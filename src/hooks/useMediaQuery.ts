import { useCallback, useSyncExternalStore } from 'react'

/**
 * Subscribes to a media query and re-renders when it starts or stops matching.
 *
 * Uses `useSyncExternalStore` rather than useState + useEffect: the match state
 * lives outside React, so reading it through a snapshot avoids both the initial
 * setState-in-effect and any tearing during concurrent rendering.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mediaQuery = window.matchMedia(query)
      mediaQuery.addEventListener('change', onStoreChange)
      return () => mediaQuery.removeEventListener('change', onStoreChange)
    },
    [query],
  )

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query])

  // The site is client-rendered; the server snapshot only guards against a
  // pre-render environment where `window` is absent.
  const getServerSnapshot = () => false

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
