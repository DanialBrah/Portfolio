import { useMediaQuery } from './useMediaQuery'

/**
 * Tracks the OS "reduce motion" setting, staying live if the user changes it
 * while the page is open.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
