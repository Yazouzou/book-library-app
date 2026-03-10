import { Link } from "react-router-dom"
import Rating from "./Rating"

function BookCard({ book }) {

  // 1️⃣ Safe volumeInfo access
  const info = book.volumeInfo || {}

  // 2️⃣ Fallback cover image if Google Books has none
  const thumbnail =
    info.imageLinks?.thumbnail?.replace("zoom=1", "zoom=2") ||
    "https://via.placeholder.com/150x220?text=No+Cover"

  // 3️⃣ Safe author display
  const authors =
    info.authors?.join(", ") || "Unknown Author"

  // 4️⃣ Safe title
  const title =
    info.title || "Untitled"

  return (

    <Link
      to={`/book/${book.id}`}
      className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
    >

      <img
        src={thumbnail}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">

        <h3 className="font-bold text-lg line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
          {authors}
        </p>

        <Rating value={4} />

      </div>

    </Link>
  )
}

export default BookCard