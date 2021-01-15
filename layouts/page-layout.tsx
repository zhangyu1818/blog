import { FunctionComponent } from 'react'
import PageHeader from './page-header'
import PageFooter from './page-footer'

const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <div className="container mx-auto text-primary bg-primary-bg xl:px-32 lg:px-20 md:px-10 px-6">
      <PageHeader />
      {children}
      <PageFooter />
    </div>
  )
}

export default PageLayout
