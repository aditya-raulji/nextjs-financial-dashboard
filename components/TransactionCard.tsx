'use client'

import { FileText, Gift, AlertTriangle, TrendingDown, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface TransactionCardProps {
  type: 'purchases' | 'redemptions' | 'rejectedTransactions' | 'sipRejections' | 'newSip'
  count: number
  amount: string
}

const transactionConfig = {
  purchases: {
    title: 'Purchases',
    icon: FileText,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-900/30',
    borderColor: 'border-blue-200 dark:border-blue-800'
  },
  redemptions: {
    title: 'Redemptions',
    icon: Gift,
    color: 'text-success-600 dark:text-success-400',
    bgColor: 'bg-success-50 dark:bg-success-900/30',
    borderColor: 'border-success-200 dark:border-success-800'
  },
  rejectedTransactions: {
    title: 'Rej. Transactions',
    icon: AlertTriangle,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-900/30',
    borderColor: 'border-red-200 dark:border-red-800'
  },
  sipRejections: {
    title: 'SIP Rejections',
    icon: TrendingDown,
    color: 'text-warning-600 dark:text-warning-400',
    bgColor: 'bg-warning-50 dark:bg-warning-900/30',
    borderColor: 'border-warning-200 dark:border-warning-800'
  },
  newSip: {
    title: 'New SIP',
    icon: TrendingUp,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-900/30',
    borderColor: 'border-purple-200 dark:border-purple-800'
  }
}

export default function TransactionCard({ type, count, amount }: TransactionCardProps) {
  const config = transactionConfig[type]
  const Icon = config.icon

  return (
    <Card className="flex-1 hover:shadow-lg dark:hover:shadow-dark-900/40 transition-all duration-200">
      <div className="space-y-3 sm:space-y-4">
        {/* Header Section with Icon and Title */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className={cn('p-1.5 sm:p-2 rounded-lg border transition-all duration-200', config.bgColor, config.borderColor)}>
            <Icon className={cn('h-4 w-4 sm:h-6 sm:w-6', config.color)} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-gray-100 truncate transition-colors duration-200">
              {config.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
              {count} {config.title}
            </p>
          </div>
        </div>
        
        {/* Amount and Action Button */}
        <div className="space-y-2">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-200">
            {amount}
          </p>
          <Button variant="primary" size="sm" className="w-full text-xs sm:text-sm">
            View Report
          </Button>
        </div>
      </div>
    </Card>
  )
}
