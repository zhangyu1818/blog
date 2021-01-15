import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import { queryPostByNumber } from '../../utils/service'
import { IssueContent } from '../../types/interface'
import PostContent from '../../layouts/post-content'
import { CalendarIcon } from '../../components/icon'
import formatDate from '../../utils/format-date'
import Tag from '../../components/tag'

interface PostPageParams extends ParsedUrlQuery {
  number: string
}

interface PostProps {
  issue: IssueContent
}

export default function Post({ issue }: PostProps) {
  const { number, url, title, createdAt, labels, bodyHTML } = issue
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <Head>
        <title>{title} | zhangyu1818.</title>
      </Head>
      <section className="max-w-2xl">
        {labels.nodes.length !== 0 && (
          <p className="flex items-center text-sm text-secondary">
            <span className="mr-3">Tag »</span>
            {labels.nodes.map((v) => (
              <Tag key={v.name}>{v.name}</Tag>
            ))}
          </p>
        )}
        <h1 className="my-4 text-3xl font-bold">{title}</h1>
        <p className="flex items-center text-sm text-secondary">
          <CalendarIcon className="mr-2" />
          <span>{formatDate(createdAt)}</span>
          <a href={url} className="ml-4 text-xs underline">
            在Github上查看
          </a>
        </p>
      </section>
      <PostContent>
        <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
      </PostContent>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PostProps, PostPageParams> = async (
  context
) => {
  const { params } = context
  const issueNumber = parseInt(params.number)

  const {
    repository: { issue },
  } = await queryPostByNumber(issueNumber)

  return {
    props: {
      issue,
    },
  }
}
