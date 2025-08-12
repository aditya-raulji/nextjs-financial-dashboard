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
    <nav className="bg-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveItem(item)}
              className={cn(
                'px-4 py-3 text-white text-sm font-medium whitespace-nowrap transition-colors duration-200 hover:bg-primary-600',
                activeItem === item && 'bg-primary-600'
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
