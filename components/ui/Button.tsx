import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base button styles
          'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          'active:scale-95 hover:scale-[1.02]',
          
          // Variant-specific styles
          {
            // Primary button - Red theme
            'bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400': variant === 'primary',
            
            // Secondary button - Gray theme
            'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400': variant === 'secondary',
            
            // Outline button - Bordered theme
            'border border-gray-300 bg-transparent hover:bg-gray-50 dark:border-dark-600 dark:hover:bg-dark-700 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400': variant === 'outline',
            
            // Ghost button - Transparent theme
            'bg-transparent hover:bg-gray-100 dark:hover:bg-dark-700 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400': variant === 'ghost',
            
            // Danger button - Red theme for destructive actions
            'bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 focus-visible:ring-red-500 dark:focus-visible:ring-red-400': variant === 'danger',
          },
          
          // Size-specific styles
          {
            'h-6 px-2 text-xs': size === 'xs',
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4 py-2 text-sm': size === 'md',
            'h-12 px-6 py-3 text-base': size === 'lg',
            'h-14 px-8 py-4 text-lg': size === 'xl',
          },
          
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
