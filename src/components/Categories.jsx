import Button from "./Button"

function Categories() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Button onClick={() => console.log("Fiction clicked")} color="black">Fiction</Button>
          <Button onClick={() => console.log("Non-fiction clicked")} outline>Non-fiction</Button>
          <Button onClick={() => console.log("Science clicked")} color="black">Science</Button>
          <Button onClick={() => console.log("History clicked")} outline>History</Button>
        </div>
      </div>
    </section>
  )
}

export default Categories