// src/components/Loader.jsx
function Loader() {
  return (
    <><div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded">
      </div><div className="flex justify-center items-center h-full mt-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          </div></>
  )
}

export default Loader