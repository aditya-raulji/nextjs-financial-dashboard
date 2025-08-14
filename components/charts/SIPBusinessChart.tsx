'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ComposedChart, Bar, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface SIPBusinessData {
  month: string
  value: number
  trend: number
}

interface SIPBusinessChartProps {
  data: SIPBusinessData[]
}

export default function SIPBusinessChart({ data }: SIPBusinessChartProps) {
  return (
    <Card className="hover:shadow-lg dark:hover:shadow-dark-900/40 transition-all duration-200">
      <div className="space-y-4">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-200">
            SIP BUSINESS CHART
          </h3>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs sm:text-sm border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700"
          >
            View Report
          </Button>
        </div>

        {/* Chart Container */}
        <div className="h-48 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              {/* Grid */}
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#E5E7EB" 
                className="dark:stroke-dark-600" 
              />
              
              {/* X-Axis */}
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ 
                  fontSize: 10, 
                  fill: '#6B7280',
                  className: 'dark:fill-gray-400'
                }}
              />
              
              {/* Y-Axis Left */}
              <YAxis 
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tick={{ 
                  fontSize: 10, 
                  fill: '#6B7280',
                  className: 'dark:fill-gray-400'
                }}
              />
              
              {/* Y-Axis Right */}
              <YAxis 
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ 
                  fontSize: 10, 
                  fill: '#6B7280',
                  className: 'dark:fill-gray-400'
                }}
              />
              
              {/* Tooltip */}
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  fontSize: '12px',
                  color: '#374151'
                }}
              />

              {/* Red shadow under line */}
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="trend"
                stroke="none"
                fill="rgba(239, 68, 68, 0.2)"
                activeDot={false}
              />

              {/* Red line */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="trend"
                stroke="#EF4444"
                strokeWidth={2}
                dot={{ fill: '#EF4444', strokeWidth: 2, r: 3 }}
              />

              {/* Blue bars */}
              <Bar 
                yAxisId="left"
                dataKey="value" 
                fill="#3B82F6" 
                radius={[4, 4, 0, 0]}
                barSize={15}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
              SIP Value
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
              Trend
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}