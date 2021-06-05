import { FunctionComponent } from 'react'
import PageAside from './page-aside'
import PageContent from './page-content'
import PageHeader from './page-header'
import PageFooter from './page-footer'
import ThemeSwitcher from '../../components/theme-switcher'

const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <ThemeSwitcher className="absolute top-8 right-8 z-20 sm:fixed sm:top-4 sm:right-4 2xl:top-16 2xl:right-16" />
      <PageHeader />
      <div className="relative mx-auto text-base max-w-[1440px] font-inconsolata ">
        <PageAside />
        <PageContent>{children}</PageContent>
      </div>
      <PageFooter />
    </>
  )
}

export default PageLayout
