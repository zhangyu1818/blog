import Link from 'next/link'
import ThemeSwitcher from '../../components/theme-switcher'

const BlogHeader = () => (
  <header className="flex items-center lg:py-10 lg:mb-0 py-4 mb-4">
    <h1 className="text-4xl font-semibold text-gray-700 dark:text-white transform transition-transform hover:translate-y-0.5">
      <span className="transition-colors duration-700 ease-in-out-quart">
        <Link href="/">zhangyu1818.</Link>
      </span>
    </h1>
    <div className="flex-1" />
    <ThemeSwitcher className="relative" />
  </header>
)

export default BlogHeader
