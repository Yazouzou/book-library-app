import SearchBar from "../components/SearchBar"

function Home(){

  return(

    <section className="bg-gray-100 py-32">

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-6xl font-bold mb-6">
          Discover your next favorite book
        </h1>

        <p className="text-gray-600 mb-10">
          Search millions of books and find your next read
        </p>

        <div className="max-w-xl mx-auto">
          <SearchBar/>
        </div>

      </div>

    </section>

  )
}

export default Home