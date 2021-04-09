import { FunctionComponent } from 'react'
import Link from 'next/link'

interface TagProps {
  children: string
}

const Tag: FunctionComponent<TagProps> = ({ children }) => (
  <span className="mr-2 transition-colors hover:text-gray-800 dark:hover:text-gray-400">
    <Link href={`/categories/${children}`}>{children}</Link>
  </span>
)

export default Tag
