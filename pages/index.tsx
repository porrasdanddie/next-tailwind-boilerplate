import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
      <p className="text-red-500 font-extrabold text-3xl md:text-5xl">
        Ghostwind
      </p>
      <p className="text-xl md:text-2xl text-gray-500"> Welcome to my Blog </p>
    </div>
  )
}

export default Home
