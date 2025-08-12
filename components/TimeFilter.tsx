'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const timeFilters = ['3 Days', '7 Days', '10 Days', '30 Days']

interface TimeFilterProps {
  onFilterChange: (filter: string) => void
}

export default function TimeFilter({ onFilterChange }: TimeFilterProps) {
  const [activeFilter, setActiveFilter] = useState('3 Days')

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  return (
    <div className="flex space-x-2">
      {timeFilters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterChange(filter)}
          className={cn(
            'px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200',
            activeFilter === filter
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
