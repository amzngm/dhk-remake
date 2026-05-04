'use client'

import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  const activeTheme = theme || 'dark'

  return (
    <div className="relative flex justify-center items-center gap-3 px-1">
      <button
        type="button"
        aria-pressed={activeTheme === 'dark'}
        aria-label="Switch to dark theme"
        onClick={() => setTheme('dark')}
        className={`cursor-pointer ${activeTheme === 'dark' ? 'text-text' : 'text-main hover:text-text'}`}
      >
        dark
      </button>

      <span className="text-main">/</span>

      <button
        type="button"
        aria-pressed={activeTheme === 'light'}
        aria-label="Switch to light theme"
        onClick={() => setTheme('light')}
        className={`cursor-pointer ${activeTheme === 'light' ? 'text-text' : 'text-main hover:text-text'}`}
      >
        light
      </button>
    </div>
  )
}
