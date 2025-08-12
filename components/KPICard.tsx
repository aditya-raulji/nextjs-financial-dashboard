'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface KPICardProps {
  title: string
  value: string
  momChange: string
  isPositive: boolean
}

export default function KPICard({ title, value, momChange, isPositive }: KPICardProps) {
  return (
    <Card className="flex-1">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-2xl font-bold text-gray-900">{value}</span>
            <div className={cn(
              "flex items-center space-x-1 px-2 py-1 rounded-full text-sm font-medium",
              isPositive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            )}>
              {isPositive ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>{momChange} MoM</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="primary" size="sm">
            View Report
          </Button>
          <Button variant="outline" size="sm">
            View Trend
          </Button>
        </div>
      </div>
    </Card>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
