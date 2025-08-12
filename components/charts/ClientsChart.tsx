'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Download } from 'lucide-react'

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
    <Card>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">CLIENTS</h3>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>

        {/* Bubble Chart Visualization */}
        <div className="relative h-64 flex items-center justify-center">
          {/* Main Active Clients Circle */}
          <div className="absolute w-32 h-32 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {data.active}
          </div>
          
          {/* Online Clients Circle */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {data.online}
          </div>
          
          {/* Inactive Clients Circle */}
          <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
            {data.inactive}
          </div>
          
          {/* New Clients Circle */}
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
            {data.new}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <span className="text-sm text-gray-600">Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm text-gray-600">New</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Active</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <span className="text-sm text-gray-600">InActive</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">Total Clients: {totalClients.toLocaleString()}</p>
        </div>
      </div>
    </Card>
  )
}
