import { FunctionComponent } from 'react'
import BlogContent from './blog-content'
import BlogHeader from './blog-header'
import BlogFooter from './blog-footer'

const BlogLayout: FunctionComponent = ({ children }) => (
  <div className="px-8 sm:px-12 md:px-24 lg:px-32 font-inconsolata">
    <BlogHeader />
    <BlogContent>{children}</BlogContent>
    <BlogFooter />
  </div>
)
export default BlogLayout
