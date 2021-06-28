import Social from './social'

const Bio = () => (
  <div className="flex flex-col justify-between h-full w-full sm:py-12 lg:py-24 transition-colors duration-700 ease-in-out-quart">
    <div>
      <div className="flex items-center sm:flex-col sm:items-start">
        <img
          className="select-none mb-4 md:mb-8 mr-8 rounded-full shadow-2xl w-16 h-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
          src="https://www.gravatar.com/avatar/27ee8db42e4599907f401b6c4ac546fc?s=512"
          alt=""
        />
        <h1 className="font-semibold font-hammersmith whitespace-nowrap mb-4 md:mb-8 text-xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block mb-2">Hi there 👋</span>
          <span className="block">I'm zhangyu1818.</span>
        </h1>
      </div>
      <div>
        <p className="mb-2">
          I am a Front-end Engineer, obsessed with{' '}
          <span className="text-yellow-500">&lt;Coding /&gt;</span>, like open source, and a
          contributor to Ant Design. I like reinventing the useless wheel.
        </p>
        <p>
          I am learning English recently, so I use English to introduce myself, maybe it will help
          improve my English 😂.
        </p>
      </div>
    </div>
    <Social className="mt-4 md:mt-8" />
  </div>
)

export default Bio
