import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { THEME_STORAGE_KEY, ThemeContext, type Theme } from './theme-context'

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    // Private mode / blocked storage — treat as "no preference saved".
    return null
  }
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'

  const stored = readStoredTheme()
  if (stored) return stored

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // The inline script in index.html has already applied the class before
  // paint; this state just mirrors it so React stays in sync.
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // Nothing to do — the theme still applies for this session.
    }
  }, [theme])

  // Follow the OS only while the visitor has not made an explicit choice.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) => {
      if (readStoredTheme() === null) {
        setThemeState(event.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [])

  const setTheme = useCallback((next: Theme) => setThemeState(next), [])
  const toggleTheme = useCallback(
    () => setThemeState((current) => (current === 'dark' ? 'light' : 'dark')),
    [],
  )

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
