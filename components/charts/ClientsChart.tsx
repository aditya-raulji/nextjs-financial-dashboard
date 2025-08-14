'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface ClientsData {
  active: number
  online: number
  new: number
  inactive: number
}

interface ClientsChartProps {
  data: ClientsData
}

export default function ClientsChart({ data }: ClientsChartProps) {
  const totalClients = data.active + data.online + data.new + data.inactive

  return (
    <Card className="relative flex flex-col items-center hover:shadow-lg dark:hover:shadow-dark-900/40 transition-all duration-200">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-4 gap-2">
        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base transition-colors duration-200">
          CLIENTS
        </h3>
        <Button 
          variant="outline" 
          size="sm" 
          className="text-primary-500 dark:text-primary-400 border-primary-300 dark:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-xs sm:text-sm"
        >
          Download Report
        </Button>
      </div>

      {/* Bubble Container - Responsive sizing */}
      <div className="relative w-48 h-48 sm:w-72 sm:h-72">
        {/* Main Red Circle (behind others) - Inactive Clients */}
        <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-36 sm:h-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 dark:bg-red-600 shadow-lg dark:shadow-red-900/30 flex items-center justify-center text-white text-lg sm:text-2xl font-bold z-0 transition-all duration-200">
          {data.inactive}
        </div>

        {/* Yellow Circle (Top) - Online Clients */}
        <div className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-400 dark:bg-yellow-500 shadow-lg dark:shadow-yellow-900/30 flex items-center justify-center text-white font-bold z-10 text-sm sm:text-base transition-all duration-200">
          {data.online}
        </div>

        {/* Green Circle (Bottom) - New Clients */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-success-500 dark:bg-success-600 shadow-lg dark:shadow-success-900/30 flex items-center justify-center text-white font-bold z-10 text-xs sm:text-sm transition-all duration-200">
          {data.new}
        </div>

        {/* Orange Circle (Left) - Active Clients */}
        <div className="absolute top-1/2 left-3 sm:left-4 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-300 dark:bg-red-400 shadow-lg dark:shadow-red-900/30 flex items-center justify-center text-white font-bold z-10 text-sm sm:text-base transition-all duration-200">
          {data.active}
        </div>
      </div>

      {/* Legends - Responsive layout */}
      <div className="flex flex-col sm:flex-row justify-center mt-4 sm:mt-6 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
        <div className="flex items-center space-x-1">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 dark:bg-yellow-500 rounded-full"></span>
          <span>Online</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-success-500 dark:bg-success-600 rounded-full"></span>
          <span>New Active</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 dark:bg-red-600 rounded-full"></span>
          <span>Inactive</span>
        </div>
      </div>

      {/* Total Clients */}
      <p className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-200">
        Total Clients: {totalClients.toLocaleString()}
      </p>
    </Card>
  )
}
