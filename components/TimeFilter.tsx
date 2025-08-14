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
    <div className="w-full">
      {/* Mobile: Vertical stack */}
      <div className="flex flex-col space-y-2 sm:hidden">
        {timeFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={cn(
              // Base button styles
              'w-full px-4 py-3 text-sm font-medium rounded-md transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-offset-2',
              // Active state
              activeFilter === filter
                ? 'bg-primary-500 dark:bg-primary-600 text-white shadow-lg transform scale-[1.02] focus:ring-primary-500 dark:focus:ring-primary-400'
                : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-600 focus:ring-gray-500 dark:focus:ring-gray-400 active:scale-95'
            )}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Tablet and Desktop: Horizontal layout */}
      <div className="hidden sm:flex flex-wrap gap-2 md:gap-3 lg:gap-4">
        {timeFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={cn(
              // Base button styles
              'px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 text-sm md:text-base font-medium rounded-md transition-all duration-200 whitespace-nowrap',
              'focus:outline-none focus:ring-2 focus:ring-offset-2',
              // Active state
              activeFilter === filter
                ? 'bg-primary-500 dark:bg-primary-600 text-white shadow-lg transform scale-[1.02] focus:ring-primary-500 dark:focus:ring-primary-400'
                : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-600 focus:ring-gray-500 dark:focus:ring-gray-400 active:scale-95'
            )}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}
