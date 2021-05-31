import Link from 'next/link'
import { useRouter } from 'next/router'
import ThemeSwitcher from '../components/theme-switcher'

const PageHeader = () => {
  const router = useRouter()

  const stickyStyle = router.pathname == '/' ? 'lg:sticky top-0 left-0' : '3xl:sticky top-0 left-0'

  return (
    <header className={`flex items-center lg:py-10 lg:mb-0 py-4 mb-4 ${stickyStyle}`}>
      <h1 className="text-4xl font-black text-gray-700 dark:text-white transform transition-transform hover:translate-y-0.5">
        <span className="transition-colors duration-700">
          <Link href="/">zhangyu1818. </Link>
        </span>
      </h1>
      <div className="flex-1 " />
      <ThemeSwitcher />
    </header>
  )
}

export default PageHeader
