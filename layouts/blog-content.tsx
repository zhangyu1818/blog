import { FunctionComponent } from 'react'
import Bio from '../components/bio'

const BlogContent: FunctionComponent = ({ children }) => (
  <main className="flex flex-col lg:flex-row lg:pt-28">
    <aside className="mb-12 xl:w-1/4 lg:w-1/3 lg:mt-4 lg:mb-0">
      <Bio />
    </aside>
    <div className="flex-1 lg:ml-8">{children}</div>
  </main>
)

export default BlogContent
