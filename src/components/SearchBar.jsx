import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

function SearchBar() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${query}`)
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-white dark:bg-gray-800 text-black dark:text-white shadow rounded-lg overflow-hidden w-full max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Search books, authors..."
        className="flex-grow px-4 py-3 outline-none bg-transparent placeholder-gray-500 dark:placeholder-gray-300"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-black dark:bg-blue-600 text-white px-5 py-3 hover:bg-gray-900 dark:hover:bg-blue-700 transition"
      >
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchBar