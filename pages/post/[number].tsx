import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Gitalk from 'gitalk'
import { ParsedUrlQuery } from 'querystring'
import { queryPostByNumber, REPO_NAME, REPO_OWNER } from '../../utils/service'
import { IssueContent } from '../../types/interface'
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

  useEffect(() => {
    const gitalk = new Gitalk({
      clientID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
      repo: REPO_NAME,
      owner: REPO_OWNER,
      admin: [REPO_OWNER],
      number,
    })

    gitalk.render('gitalk-container')

    const linkElements = document.querySelectorAll<HTMLLinkElement>(
      '.markdown-body-content a[href]'
    )
    linkElements.forEach((ele) => {
      const match = ele.href.match(/^https:\/\/github.com\/zhangyu1818\/blog\/issues\/(\d+)/)
      if (match) {
        const [, issueNumber] = match
        ele.href = `/post/${issueNumber}`
      }
    })
  }, [])

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
          <a
            href={url}
            target="_blank"
            className="ml-4 transition-colors text-xs underline hover:text-gray-800 dark:hover:text-gray-400"
          >
            在Github上查看
          </a>
        </p>
      </section>
      <article className="markdown-body max-w-3xl mx-auto md:p-8 mt-16">
        <div
          className="markdown-body-content mb-16"
          dangerouslySetInnerHTML={{ __html: bodyHTML }}
        />
        <div id="gitalk-container" />
      </article>
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
