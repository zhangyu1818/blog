import Social from './social'

const Bio = () => (
  <div className="flex items-center sticky top-28 left-0">
    <img
      className="flex-none rounded-full shadow-xl2 mr-8 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
      src="/avatar.jpg"
      alt=""
    />
    <div className="font-semibold text-sm">
      <p className="mb-2">oh oh~,</p>
      <p> sometimes I get a good feeling ~</p>
      <Social className="mt-5" />
    </div>
  </div>
)

export default Bio
