import { FaSearch, FaBookOpen } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discover Your Next Favorite Read
        </h1>
        <p className="text-gray-700 mb-10 text-lg md:text-xl">
          Search thousands of books and explore the latest releases in our library.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button onClick={() => navigate("/search")} color="black">
            <FaSearch /> Start Searching
          </Button>
          <Button onClick={() => navigate("/search?q=latest")} outline>
            <FaBookOpen /> Latest Releases
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero