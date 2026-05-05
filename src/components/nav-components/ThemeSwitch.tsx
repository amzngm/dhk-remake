'use client'

import { useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'

const subscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const activeTheme = theme || 'dark'

  if (!mounted) {
    return (
      <div className="relative flex justify-center items-center gap-3 px-1">
        <span className="text-main">dark</span>
        <span className="text-main">/</span>
        <span className="text-main">light</span>
      </div>
    )
  }

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
