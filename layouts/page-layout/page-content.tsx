import { FunctionComponent } from 'react'
const PageContent: FunctionComponent = ({ children }) => {
  return (
    <main className="sm:absolute sm:right-0 p-6 sm:max-w-[60vw] sm:px-12 lg:px-16 sm:py-12 lg:py-24">
      {children}
    </main>
  )
}

export default PageContent
