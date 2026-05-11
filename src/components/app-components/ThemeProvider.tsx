'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

function ThemeWatcher() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/' && theme === 'light') {
      setTheme('dark')
    }
  }, [pathname, theme, setTheme])

  return null
}

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false} storageKey="theme">
      <ThemeWatcher />
      {children}
    </ThemeProvider>
  )
}
