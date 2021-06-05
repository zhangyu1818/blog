import { FunctionComponent } from 'react'
import Link from 'next/link'
import { CalendarIcon } from './icon'
import Tag from './tag'
import formatDate from '../utils/format-date'

import { IssueContentBaseFields } from '../types/interface'

interface PostItemProps extends IssueContentBaseFields {}

const PostItem: FunctionComponent<PostItemProps> = ({ number, title, createdAt, labels }) => (
  <li className="list-none overflow-hidden cursor-pointer transform transition-special md:group-hover:opacity-50 hover:!opacity-100 md:hover:scale-110">
    <div className="m-1 p-6 md:p-10 bg-tertiary hover:shadow-sm transition duration-700 ease-in-out-quart">
      <Link href={`/post/${number}`}>
        <div>
          {labels.nodes.length !== 0 && (
            <h4 className="font-semibold text-lg uppercase">
              {labels.nodes.map((v) => (
                <Tag key={v.name}>{v.name}</Tag>
              ))}
            </h4>
          )}
          <p className="flex items-center text-secondary text-sm">
            <CalendarIcon className="mr-2" />
            <span>{formatDate(createdAt)}</span>
          </p>
          <h3 className="font-semibold break-words text-xl mt-8 md:text-2xl md:mt-14">{title}</h3>
        </div>
      </Link>
    </div>
  </li>
)

export default PostItem
