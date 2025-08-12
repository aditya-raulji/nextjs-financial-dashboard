'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import KPICard from '@/components/KPICard'
import TimeFilter from '@/components/TimeFilter'
import TransactionCard from '@/components/TransactionCard'
import ClientsChart from '@/components/charts/ClientsChart'
import SIPBusinessChart from '@/components/charts/SIPBusinessChart'
import MonthlyMISChart from '@/components/charts/MonthlyMISChart'
import ErrorBoundary from '@/components/ui/ErrorBoundary'

interface DashboardData {
  aum: {
    current: string
    momChange: string
    isPositive: boolean
  }
  sip: {
    current: string
    momChange: string
    isPositive: boolean
  }
  transactions: {
    purchases: { count: number; amount: string }
    redemptions: { count: number; amount: string }
    rejectedTransactions: { count: number; amount: string }
    sipRejections: { count: number; amount: string }
    newSip: { count: number; amount: string }
  }
  clients: {
    active: number
    online: number
    new: number
    inactive: number
  }
  sipBusiness: Array<{
    month: string
    value: number
    trend: number
  }>
  monthlyMis: Array<{
    month: string
    aum: number
    sip: number
    redemptions: number
  }>
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeFilter, setTimeFilter] = useState('3 Days')

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/dashboard')
      const dashboardData = await response.json()
      setData(dashboardData)
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleTimeFilterChange = (filter: string) => {
    setTimeFilter(filter)
    // In a real application, you would fetch new data based on the filter
    console.log('Time filter changed to:', filter)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Dashboard</h2>
          <p className="text-gray-600">Please try refreshing the page.</p>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <KPICard
            title="Current AUM"
            value={data.aum.current}
            momChange={data.aum.momChange}
            isPositive={data.aum.isPositive}
          />
          <KPICard
            title="Current SIP"
            value={data.sip.current}
            momChange={data.sip.momChange}
            isPositive={data.sip.isPositive}
          />
        </div>

        {/* Time Filter */}
        <div className="mb-6">
          <TimeFilter onFilterChange={handleTimeFilterChange} />
        </div>

        {/* Transaction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <TransactionCard
            type="purchases"
            count={data.transactions.purchases.count}
            amount={data.transactions.purchases.amount}
          />
          <TransactionCard
            type="redemptions"
            count={data.transactions.redemptions.count}
            amount={data.transactions.redemptions.amount}
          />
          <TransactionCard
            type="rejectedTransactions"
            count={data.transactions.rejectedTransactions.count}
            amount={data.transactions.rejectedTransactions.amount}
          />
          <TransactionCard
            type="sipRejections"
            count={data.transactions.sipRejections.count}
            amount={data.transactions.sipRejections.amount}
          />
          <TransactionCard
            type="newSip"
            count={data.transactions.newSip.count}
            amount={data.transactions.newSip.amount}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ClientsChart data={data.clients} />
          <SIPBusinessChart data={data.sipBusiness} />
          <MonthlyMISChart data={data.monthlyMis} />
        </div>
      </main>
    </div>
    </ErrorBoundary>
  )
}
