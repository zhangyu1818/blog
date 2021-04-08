import { GetServerSideProps } from 'next'
import { queryPostByNumber, queryPostsByLabel } from '../../utils/service'
import { ParsedUrlQuery } from 'querystring'
import { Issues } from '../../types/interface'
import PostItem from '../../components/post-item'
import BlogContent from '../../layouts/blog-content'

interface CategoriesPageParams extends ParsedUrlQuery {
  label: string
}

interface CategoriesProps {
  issues: Issues
  label: string
}

export default function Categories({ issues, label }: CategoriesProps) {
  const { nodes } = issues
  return (
    <main className="max-w-6xl mx-auto">
      <h1 className="text-3xl text-secondary lg:py-12">分类为 "{label}" 的文章</h1>
      <div className="mt-8">
        {nodes.map((v) => (
          <PostItem key={v.number} {...v} />
        ))}
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<CategoriesProps, CategoriesPageParams> = async (
  context
) => {
  const { params } = context
  const { label } = params

  const {
    repository: { issues },
  } = await queryPostsByLabel([label])

  return {
    props: {
      issues,
      label,
    },
  }
}
