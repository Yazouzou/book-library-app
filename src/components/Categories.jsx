function Categories() {

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Science"
  ]

  return (
    <section className="py-16 text-center">

      <h3 className="text-2xl font-bold mb-8">
        Loved by readers everywhere
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">

        {categories.map((cat, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow hover:shadow-lg"
          >
            <h4 className="text-lg font-semibold">{cat}</h4>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Categories