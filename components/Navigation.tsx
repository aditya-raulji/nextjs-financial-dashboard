'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  'HOME',
  'CRM',
  'UTILITIES',
  'INSURANCE',
  'ASSETS',
  'MUTUAL',
  'RESEARCH',
  'TRANSACT ONLINE',
  'GOAL GPS',
  'FINANCIAL PLANNING',
  'WEALTH REPORT',
  'OTHER'
]

export default function Navigation() {
  const [activeItem, setActiveItem] = useState('HOME')

  return (
    <nav className="bg-primary-500 dark:bg-primary-600 relative transition-colors duration-200">
      {/* Subtle white gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-white/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center space-x-0 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveItem(item)}
              className={cn(
                // Base navigation button styles
                'px-2 py-2 sm:px-3 md:px-4 py-2 sm:py-3 text-white text-xs sm:text-sm font-bold uppercase whitespace-nowrap',
                'transition-all duration-200 hover:bg-primary-600 dark:hover:bg-primary-700',
                'focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-500',
                // Active state
                activeItem === item && 'bg-primary-600 dark:bg-primary-700 shadow-lg',
                // Hover effects
                'hover:shadow-md active:scale-95'
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      
      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  )
}
