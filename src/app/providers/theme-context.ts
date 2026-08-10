import { createContext } from 'react'

export type Theme = 'light' | 'dark'

export interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

/**
 * Kept in its own module (not alongside ThemeProvider) so the provider file
 * only exports components — otherwise React Fast Refresh invalidates the whole
 * module on every edit.
 */
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const THEME_STORAGE_KEY = 'portfolio-theme'
