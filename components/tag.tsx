import { FunctionComponent } from 'react'
import Link from 'next/link'

interface TagProps {
  children: string
}

const Tag: FunctionComponent<TagProps> = ({ children }) => (
  <span className="after:content-[','] last:after:content-none ext-sm md:text-base mr-2 hover:text-gray-800 dark:hover:text-gray-400">
    <Link href={`/categories/${children}`}>{children}</Link>
  </span>
)

export default Tag
