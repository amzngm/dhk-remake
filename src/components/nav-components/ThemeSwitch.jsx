'use client'

import { useEffect, useState } from 'react'

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || 'dark')
  }, [])

  const changeTheme = (next) => {
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
  }

  return (
    <div className="relative space-x-3 select-none">
      <button
        aria-pressed={theme === 'dark'}
        onClick={() => changeTheme('light')}
        className={`transition cursor-pointer ${theme === 'dark' ? 'text-main' : 'text-text'}`}
      >
        dark
      </button>

      <span className="text-main">/</span>

      <button
        aria-pressed={theme === 'light'}
        onClick={() => changeTheme('dark')}
        className={`transition cursor-pointer ${theme === 'light' ? 'text-main' : 'text-text'}`}
      >
        light
      </button>
    </div>
  )
}
