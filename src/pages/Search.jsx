import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { searchBooks } from "../services/googleBooks"
import BookCard from "../components/BookCard"

function Search(){

  const [books,setBooks] = useState([])

  const query = new URLSearchParams(useLocation().search).get("q")

  useEffect(()=>{

    const fetchBooks = async ()=>{

      const data = await searchBooks(query)

      setBooks(data)
    }

    fetchBooks()

  },[query])

  return(

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Results for "{query}"
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        {books?.map(book=>(
          <BookCard key={book.id} book={book}/>
        ))}

      </div>

    </div>

  )
}

export default Search