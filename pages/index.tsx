import { GetServerSideProps } from 'next'
import Head from 'next/head'
import PostItem from '../components/post-item'
import PageLayout from '../layouts/page-layout'

import { queryPostsFromIssues, renderProfileMarkdown } from '../utils/service'

import type { Issues } from '../types/interface'

interface BlogProps {
  issues: Issues
  profile: string
}

export default function Blog({ issues, profile }: BlogProps) {
  const { nodes } = issues

  return (
    <PageLayout bioHTML={profile}>
      <Head>
        <title>zhangyu1818</title>
      </Head>
      <div className="flex group md:max-w-[565px] lg:max-w-[656px]">
        <ul className="w-full p-0 m-0 md:grid md:grid-cols-2 md:gap-2">
          {nodes.map((v) => (
            <PostItem key={v.number} {...v} />
          ))}
        </ul>
      </div>
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps<BlogProps> = async () => {
  const [
    {
      repository: { issues },
    },
    { data: profile },
  ] = await Promise.all([queryPostsFromIssues(), renderProfileMarkdown()])

  return {
    props: {
      issues,
      profile,
    },
  }
}
