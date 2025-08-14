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
    <Card className="flex-1 hover:shadow-lg dark:hover:shadow-dark-900/40 transition-all duration-200">
      <div className="space-y-3 sm:space-y-4">
        {/* Title and Value Section */}
        <div>
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-200">
            {title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 mt-2">
            <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-200">
              {value}
            </span>
            <div className={cn(
              "flex items-center space-x-1 px-2 py-1 rounded-full text-xs sm:text-sm font-medium w-fit transition-all duration-200",
              isPositive 
                ? "bg-success-100 dark:bg-success-900/30 text-success-800 dark:text-success-300 border border-success-200 dark:border-success-800" 
                : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800"
            )}>
              {isPositive ? (
                <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
              ) : (
                <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4" />
              )}
              <span>{momChange} MoM</span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2">
          <Button variant="primary" size="sm" className="text-xs sm:text-sm">
            View Report
          </Button>
          <Button variant="outline" size="sm" className="text-xs sm:text-sm">
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