import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'outlined' | 'elevated'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base card styles
          'rounded-lg border transition-all duration-200',
          // Variant-specific styles
          {
            'bg-white dark:bg-dark-800 border-gray-100 dark:border-dark-700 shadow-md dark:shadow-dark-900/20': variant === 'default',
            'bg-transparent border-gray-200 dark:border-dark-600': variant === 'outlined',
            'bg-white dark:bg-dark-800 border-transparent shadow-lg dark:shadow-dark-900/30': variant === 'elevated',
          },
          // Responsive padding
          'p-4 sm:p-5 lg:p-6',
          // Hover effects
          'hover:shadow-lg dark:hover:shadow-dark-900/40 transition-shadow duration-200',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Card.displayName = 'Card'

export { Card }
