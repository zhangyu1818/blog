import { useState } from 'react'
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

const useMediaQuery = (mediaQuery: string) => {
  const isSsr = typeof window === 'undefined'

  const [matches, setMatches] = useState(() =>
    isSsr ? false : window.matchMedia(mediaQuery).matches
  )
  useIsomorphicLayoutEffect(() => {
    if (isSsr) {
      return
    }
    const mediaQueryList = window.matchMedia(mediaQuery)
    const listener = (e: any) => setMatches(e.matches)
    mediaQueryList.addListener(listener)
    return () => mediaQueryList.removeListener(listener)
  }, [mediaQuery])

  return matches
}

export default useMediaQuery
