import Bio from '../../components/bio'

export interface PageAsideProps {
  bioHTML: string
}

const PageAside = (props: PageAsideProps) => {
  const { bioHTML } = props
  return (
    <aside className="box-content sm:fixed sm:top-0 sm:h-screen px-6 py-10 sm:py-0 sm:px-12 sm:max-w-[40vw] md:max-w-[30vw] lg:max-w-[512px] xl:max-w-[596px]">
      <Bio markdownHTML={bioHTML} />
    </aside>
  )
}

export default PageAside
