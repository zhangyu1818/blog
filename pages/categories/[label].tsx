import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { queryPostsByLabel } from '../../utils/service'
import { ParsedUrlQuery } from 'querystring'
import { Issues } from '../../types/interface'
import PostItem from '../../components/post-item'
import { CornerLeftUp } from '../../components/icon'

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
      <h2 className="flex items-center font-semibold text-center text-2xl md:text-4xl lg:text-6xl lg:py-12">
        <Link href="/">
          <CornerLeftUp
            title="back"
            className="mr-8 cursor-pointer rounded transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
          />
        </Link>
        <span className="mr-4">Category</span>
        <span className="text-secondary">"{label}"</span>
      </h2>
      <ul className="mt-8 p-0 group">
        {nodes.map((v) => (
          <PostItem key={v.number} {...v} />
        ))}
      </ul>
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
