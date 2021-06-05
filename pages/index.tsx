import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { queryPostsFromIssues } from '../utils/service'
import PostItem from '../components/post-item'
import useMediaQuery from '../hooks/useMediaQuery'

import { Issues } from '../types/interface'
import { useMemo } from 'react'

interface BlogProps {
  issues: Issues
}

export default function Blog({ issues }: BlogProps) {
  const { nodes } = issues

  const isMd = useMediaQuery('(min-width: 1024px)')

  const postsContent = useMemo(() => {
    if (isMd) {
      const column1 = nodes.filter((_, i) => i % 2 === 0)
      const column2 = nodes.filter((_, i) => i % 2 !== 0)
      return (
        <>
          <ul className="w-1/2 p-0 m-0">
            {column1.map((v) => (
              <PostItem key={v.number} {...v} />
            ))}
          </ul>
          <ul className="w-1/2 p-0 m-0">
            {column2.map((v) => (
              <PostItem key={v.number} {...v} />
            ))}
          </ul>
        </>
      )
    }
    return (
      <ul className="w-full p-0 m-0">
        {nodes.map((v) => (
          <PostItem key={v.number} {...v} />
        ))}
      </ul>
    )
  }, [isMd])

  return (
    <>
      <Head>
        <title>zhangyu1818</title>
      </Head>
      <div className="flex group md:max-w-[565px] lg:max-w-[656px]">
        {postsContent}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<BlogProps> = async () => {
  const {
    repository: { issues },
  } = await queryPostsFromIssues()
  return {
    props: {
      issues,
    },
  }
}
