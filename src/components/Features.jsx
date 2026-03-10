function Features() {
  return (
    <section className="py-20 px-8 bg-gray-50">

      <div className="grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Smart recommendations for you
          </h2>

          <p className="text-gray-600 mb-6">
            Discover new books based on your reading preferences.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Find Books
          </button>
        </div>

        <div className="bg-gray-200 h-64 rounded-lg"></div>

      </div>

    </section>
  )
}

export default Features