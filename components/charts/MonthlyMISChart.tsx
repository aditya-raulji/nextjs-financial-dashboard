'use client'

import { Card } from '@/components/ui/Card'
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Legend,
  Line,
} from 'recharts'

interface MonthlyMISData {
  month: string
  aum: number
  sip: number
  redemptions: number
}

interface MonthlyMISChartProps {
  data: MonthlyMISData[]
}

// Helper to calculate total MIS for tooltip
const calculateTotal = (data: MonthlyMISData) => {
  return data.aum + data.sip + data.redemptions
}

export default function MonthlyMISChart({ data }: MonthlyMISChartProps) {
  return (
    <Card className="hover:shadow-lg dark:hover:shadow-dark-900/40 transition-all duration-200">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-3 sm:mb-4 gap-2">
        <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wide transition-colors duration-200">
          Monthly MIS Overview
        </h3>
        <button className="text-xs px-2 py-1 sm:px-3 sm:py-1 rounded-md border border-red-300 dark:border-red-600 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200">
          View Detailed Report
        </button>
      </div>

      {/* Chart Section */}
      <div className="h-56 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="gradRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EF4444" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Grid */}
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" className="dark:stroke-dark-600" />

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

            {/* Y-Axis */}
            <YAxis
              tickFormatter={(value) => `${(value * 100).toFixed(0)} L`}
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
                borderRadius: '6px',
                fontSize: '11px',
              }}
              formatter={(value: number, name: string, props: any) => [`${(value * 100).toFixed(2)} L`, name.toUpperCase()]}
              labelFormatter={(label) => `Month: ${label}`}
            />

            {/* Legend */}
            <Legend
              verticalAlign="top"
              height={30}
              iconType="circle"
              formatter={(value) => <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">{value}</span>}
            />

            {/* AUM Area */}
            <Area
              type="monotone"
              dataKey="aum"
              stroke="#EF4444"
              fill="url(#gradRed)"
              strokeWidth={2}
            />

            {/* SIP Area */}
            <Area
              type="monotone"
              dataKey="sip"
              stroke="#10B981"
              fill="url(#gradGreen)"
              strokeWidth={2}
            />

            {/* Redemptions Area */}
            <Area
              type="monotone"
              dataKey="redemptions"
              stroke="#3B82F6"
              fill="url(#gradBlue)"
              strokeWidth={2}
            />

            {/* Total MIS Line */}
            <Line
              type="monotone"
              dataKey={(data) => calculateTotal(data)}
              name="Total MIS"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{ r: 2 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Footer / Summary */}
      <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-700 dark:text-gray-300 gap-1 transition-colors duration-200">
        <div>
          <span className="font-semibold">Data Range:</span> {data[0]?.month} - {data[data.length - 1]?.month}
        </div>
        <div>
          <span className="font-semibold">Note:</span> All values in Crores (Cr)
        </div>
      </div>
    </Card>
  )
}
