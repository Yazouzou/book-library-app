import { Link } from "react-router-dom"
import Rating from "./Rating"

function BookCard({ book }) {

  const info = book.volumeInfo

  return (

    <Link
      to={`/book/${book.id}`}
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
    >

      <img
        src={info.imageLinks?.thumbnail}
        alt={info.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">

        <h3 className="font-bold text-lg">
          {info.title}
        </h3>

        <p className="text-gray-500 text-sm">
          {info.authors?.join(", ")}
        </p>

        <Rating value={4}/>

      </div>

    </Link>
  )
}

export default BookCard