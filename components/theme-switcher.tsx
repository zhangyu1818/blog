import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import getTheme, { ThemeValue } from '../utils/get-theme'
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect'

const animate = {
  y: 0,
  transition: {
    delay: 0.2,
    duration: 0.4,
    ease: 'easeInOut',
  },
}

const DarkIcon = () => (
  <motion.span
    className="absolute inset-0 flex items-center justify-center"
    initial={{ y: -32 }}
    animate={animate}
    exit={{ y: 32 }}
  >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z" />
    </svg>
  </motion.span>
)

const LightIcon = () => (
  <motion.span
    className="absolute inset-0 flex items-center justify-center"
    initial={{ y: 32 }}
    animate={animate}
    exit={{ y: -32 }}
  >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm9 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm.22-7a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41zM17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31zM12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm5.73-1.86a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42zm-11.46 0l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44zM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
    </svg>
  </motion.span>
)

interface ThemeSwitchProps {
  className?: string
}

const toggleThemeColor = (theme: ThemeValue) => {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  // dark theme color #0d1117, light theme color #fff
  meta.content = theme === 'dark' ? '#0d1117' : '#fff'
}

const ThemeSwitcher = ({ className = '' }: ThemeSwitchProps) => {
  const [themeState, setThemeState] = useState<ThemeValue | null>(null)

  const onToggle = () => {
    const nextTheme = themeState === 'light' ? 'dark' : 'light'
    document.documentElement.className = nextTheme
    setThemeState(nextTheme)

    // we should save current select color after toggle. otherwise will get theme from matchMedia
    document.documentElement.setAttribute('data-selected-color', nextTheme)

    toggleThemeColor(nextTheme)
  }

  useIsomorphicLayoutEffect(() => {
    const theme = getTheme()
    toggleThemeColor(theme)
    setThemeState(theme)
  }, [])

  if (themeState === null) {
    return null
  }

  return (
    <div
      className={`overflow-hidden w-8 h-8 transition-colors rounded cursor-pointer text-gray-600 hover:bg-gray-200 dark:text-primary dark:hover:bg-gray-800 ${className}`}
      onClick={onToggle}
    >
      <AnimatePresence>{themeState === 'light' ? <DarkIcon /> : <LightIcon />}</AnimatePresence>
    </div>
  )
}

export default ThemeSwitcher
