'use client'

import { Search, Bell, Settings, Star, User, Lock, LogOut, Lightbulb, GraduationCap, Play, RotateCcw, TrendingUp, Menu, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/lib/contexts/ThemeContext'
import { Button } from '@/components/ui/Button'

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Logo Symbol */}
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21L12 3L21 21H3Z" fill="currentColor"/>
                    <path d="M8 15L12 9L16 15H8Z" fill="white" fillOpacity="0.3"/>
                  </svg>
                </div>
              </div>
              
              {/* Text Logo */}
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1">
                  <span className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">Wealth</span>
                  <span className="text-lg sm:text-xl font-bold text-green-600 dark:text-green-400">Elite</span>
                </div>
                <span className="text-xs text-blue-500 dark:text-blue-400 font-medium hidden sm:block">INVESTMENT MADE EASIER</span>
              </div>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="ex. Live portfolio"
                className="w-full pl-4 pr-12 py-2 bg-gray-100 dark:bg-dark-700 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:bg-white dark:focus:bg-dark-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-gray-200 dark:bg-dark-600 rounded hover:bg-gray-300 dark:hover:bg-dark-500 transition-colors duration-200">
                <Search className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {/* Right Section - Icons and Theme Toggle */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-md transition-all duration-200">
              <Menu className="h-5 w-5" />
            </button>
            
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>
            
            {/* Desktop Icons - Hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
              <Button variant="ghost" size="sm" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <Star className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
            
            {/* Logout Button - Hidden on mobile */}
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex items-center space-x-1 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-dark-600 hover:bg-gray-50 dark:hover:bg-dark-700"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="text-xs sm:text-sm font-medium">LOGOUT</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
