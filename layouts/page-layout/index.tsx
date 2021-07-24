import { FunctionComponent } from 'react'
import PageAside from './page-aside'
import PageContent from './page-content'
import PageHeader from './page-header'
import PageFooter from './page-footer'
import ThemeSwitcher from '../../components/theme-switcher'

import type { PageAsideProps } from './page-aside'

// nested value, maybe I should use ReactContext
type PageLayoutProps = PageAsideProps

const PageLayout: FunctionComponent<PageLayoutProps> = (props) => {
  const { children, bioHTML } = props
  return (
    <>
      <ThemeSwitcher className="absolute top-8 right-8 z-20 sm:fixed sm:top-4 sm:right-4 2xl:top-16 2xl:right-16" />
      <PageHeader />
      <div className="relative mx-auto text-base max-w-[1440px] font-inconsolata ">
        <PageAside bioHTML={bioHTML} />
        <PageContent>{children}</PageContent>
      </div>
      <PageFooter />
    </>
  )
}

export default PageLayout
