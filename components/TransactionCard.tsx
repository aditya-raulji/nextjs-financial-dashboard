'use client'

import { FileText, Gift, AlertTriangle, TrendingDown, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface TransactionCardProps {
  type: 'purchases' | 'redemptions' | 'rejectedTransactions' | 'sipRejections' | 'newSip'
  count: number
  amount: string
}

const transactionConfig = {
  purchases: {
    title: 'Purchases',
    icon: FileText,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  redemptions: {
    title: 'Redemptions',
    icon: Gift,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  rejectedTransactions: {
    title: 'Rej. Transactions',
    icon: AlertTriangle,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  sipRejections: {
    title: 'SIP Rejections',
    icon: TrendingDown,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  newSip: {
    title: 'New SIP',
    icon: TrendingUp,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
}

export default function TransactionCard({ type, count, amount }: TransactionCardProps) {
  const config = transactionConfig[type]
  const Icon = config.icon

  return (
    <Card className="flex-1">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className={cn('p-2 rounded-lg', config.bgColor)}>
            <Icon className={cn('h-6 w-6', config.color)} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{config.title}</h3>
            <p className="text-sm text-gray-500">{count} {config.title}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-2xl font-bold text-gray-900">{amount}</p>
          <Button variant="primary" size="sm" className="w-full">
            View Report
          </Button>
        </div>
      </div>
    </Card>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
