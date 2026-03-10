import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

function SearchBar() {

  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    if(query.trim()){
      navigate(`/search?q=${query}`)
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-white shadow rounded-lg overflow-hidden"
    >

      <input
        type="text"
        placeholder="Search books, authors..."
        className="px-4 py-3 w-full outline-none"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />

      <button className="bg-black text-white px-5 py-3">
        <FaSearch/>
      </button>

    </form>
  )
}

export default SearchBar