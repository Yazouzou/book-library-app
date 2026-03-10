import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { getBookById } from "../services/googleBooks"

function BookDetails(){

  const {id} = useParams()

  const [book,setBook] = useState(null)

  useEffect(()=>{

    const loadBook = async()=>{
      const data = await getBookById(id)
      setBook(data)
    }

    loadBook()

  },[id])

  if(!book) return <p>Loading...</p>

  const info = book.volumeInfo

  return(

    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">

      <img
        src={info.imageLinks?.thumbnail}
        className="w-full rounded-lg"
      />

      <div>

        <h1 className="text-4xl font-bold">
          {info.title}
        </h1>

        <p className="text-gray-600 mt-2">
          {info.authors?.join(", ")}
        </p>

        <p className="mt-6 text-gray-700">
          {info.description}
        </p>

      </div>

    </div>

  )
}

export default BookDetails