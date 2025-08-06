'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className='relative w-14 h-8 bg-gradient-to-r from-emerald-200/80 to-green-200/80 dark:from-emerald-900/80 dark:to-green-900/80 backdrop-blur-sm rounded-full shadow-lg border border-emerald-200/50 dark:border-emerald-700/50'>
        <div className='absolute top-0.5 left-0.5 w-7 h-7 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center transition-all duration-300'>
          <span className='text-sm'>🌙</span>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className='relative w-14 h-8 bg-gradient-to-r from-emerald-200/80 to-green-200/80 dark:from-emerald-900/80 dark:to-green-900/80 hover:from-emerald-300/80 hover:to-green-300/80 dark:hover:from-emerald-800/80 dark:hover:to-green-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl border border-emerald-200/50 dark:border-emerald-700/50 transition-all duration-300 group'
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Toggle Track */}
      <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-50/30 to-green-50/30 dark:from-emerald-950/30 dark:to-green-950/30'></div>

      {/* Toggle Button */}
      <div
        className={`absolute top-0.5 w-7 h-7 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${
          theme === 'light'
            ? 'left-0.5 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700'
            : 'left-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-700 dark:to-gray-800'
        }`}
      >
        <span
          className={`text-sm transition-all duration-300 ${
            theme === 'light'
              ? 'text-yellow-600 dark:text-yellow-400'
              : 'text-emerald-600 dark:text-emerald-400'
          }`}
        >
          {theme === 'light' ? '☀️' : '🌙'}
        </span>
      </div>

      {/* Background Icons */}
      <div className='absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none'>
        <span
          className={`text-xs transition-opacity duration-300 ${
            theme === 'light' ? 'opacity-0' : 'opacity-40'
          }`}
        >
          ☀️
        </span>
        <span
          className={`text-xs transition-opacity duration-300 ${
            theme === 'light' ? 'opacity-40' : 'opacity-0'
          }`}
        >
          🌙
        </span>
      </div>
    </button>
  );
}