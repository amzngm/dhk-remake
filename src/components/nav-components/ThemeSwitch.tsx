'use client'

import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  const activeTheme = theme || 'dark'

  return (
    <div className="inline-flex relative items-center gap-3 text-sm select-none">
      <button
        type="button"
        aria-pressed={activeTheme === 'dark'}
        aria-label="Switch to dark theme"
        onClick={() => setTheme('dark')}
        className={`transition px-2 py-1 rounded-full ${activeTheme === 'dark' ? 'bg-main text-bg' : 'text-text/70 hover:text-text'}`}
      >
        dark
      </button>

      <span className="text-main">/</span>

      <button
        type="button"
        aria-pressed={activeTheme === 'light'}
        aria-label="Switch to light theme"
        onClick={() => setTheme('light')}
        className={`transition px-2 py-1 rounded-full ${activeTheme === 'light' ? 'bg-main text-bg' : 'text-text/70 hover:text-text'}`}
      >
        light
      </button>
    </div>
  )
}
