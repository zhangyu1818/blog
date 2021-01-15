import { FunctionComponent } from 'react'

const PostContent: FunctionComponent = ({ children }) => (
  <article className="markdown-body max-w-3xl mx-auto py-4 px-8 mt-16">{children}</article>
)

export default PostContent
