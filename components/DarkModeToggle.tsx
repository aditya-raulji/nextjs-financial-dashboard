'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/lib/contexts/ThemeContext'
import { Button } from '@/components/ui/Button'

interface DarkModeToggleProps {
  className?: string
}

export default function DarkModeToggle({ className }: DarkModeToggleProps) {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={className}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  )
}
