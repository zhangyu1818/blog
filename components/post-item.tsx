import { FunctionComponent } from 'react'
import Link from 'next/link'
import { CalendarIcon, ListIcon } from './icon'
import Tag from './tag'
import formatDate from '../utils/format-date'

import { IssueContentBaseFields } from '../types/interface'

interface PostItemProps extends IssueContentBaseFields {}

const PostItem: FunctionComponent<PostItemProps> = ({ number, title, createdAt, labels }) => (
  <div className="mb-8">
    <div className="flex text-sm text-secondary">
      <p className="flex items-center mr-4 ">
        <CalendarIcon className="mr-1" />
        <span>{formatDate(createdAt)}</span>
      </p>
      {labels.nodes.length !== 0 && (
        <p className="flex items-center">
          <ListIcon className="mr-1" />
          {labels.nodes.map((v) => (
            <Tag key={v.name}>{v.name}</Tag>
          ))}
        </p>
      )}
    </div>
    <h1 className="text-xl font-semibold py-4 transition-colors hover:text-primary-hover">
      <Link href={`/post/${number}`}>{title}</Link>
    </h1>
  </div>
)

export default PostItem
