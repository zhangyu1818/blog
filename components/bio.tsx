import Social from './social'

interface BioProp {
  markdownHTML: string
}

const Bio = ({ markdownHTML }: BioProp) => (
  <div className="flex flex-col justify-between h-full w-full sm:py-12 lg:py-24 transition-colors duration-700 ease-in-out-quart">
    <div>
      <img
        className="select-none mb-4 md:mb-8 mr-8 rounded-full shadow-2xl w-16 h-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
        src="https://www.gravatar.com/avatar/27ee8db42e4599907f401b6c4ac546fc?s=512"
        alt=""
      />
      <div
        className="markdown-body bio-markdown pt-2"
        dangerouslySetInnerHTML={{ __html: markdownHTML }}
      />
    </div>
    <Social className="mt-4 md:mt-8" />
  </div>
)

export default Bio
