import { GetStaticProps } from 'next'
import Head from 'next/head'
import { queryPostsFromIssues } from '../utils/service'
import BlogContent from '../layouts/blog-content'
import PostItem from '../components/post-item'

import { Issues } from '../types/interface'

interface BlogProps {
  issues: Issues
}

export default function Blog({ issues }: BlogProps) {
  const { nodes } = issues
  return (
    <BlogContent>
      <Head>
        <title>zhangyu1818</title>
      </Head>
      {nodes.map((v) => (
        <PostItem key={v.number} {...v} />
      ))}
    </BlogContent>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async (context) => {
  const {
    repository: { issues },
  } = await queryPostsFromIssues()
  return {
    props: {
      issues,
    },
  }
}
