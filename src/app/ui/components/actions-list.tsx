'use client';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ActionsList() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex flex-col gap-2 my-auto">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
      >
        {theme === 'dark' ? (
          <SunIcon className="w-6" />
        ) : (
          <MoonIcon className="w-6" />
        )}
      </button>
    </div>
  );
}
