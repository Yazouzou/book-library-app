function Hero() {
  return (
    <section className="text-center py-20 px-6 bg-gray-100">

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Discover your next favorite read
      </h2>

      <p className="text-gray-600 mb-8">
        Browse thousands of books and authors.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Start Searching
        </button>

        <button className="border px-6 py-3 rounded-lg">
          Latest Releases
        </button>
      </div>

    </section>
  )
}

export default Hero