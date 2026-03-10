import { FaStar } from "react-icons/fa"

function Rating({ value }) {

  return (

    <><div className="flex gap-1 text-yellow-400 mt-2">

      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < value ? "" : "opacity-30"} />
      ))}

    </div><div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded">

      </div></>
  )
}

export default Rating