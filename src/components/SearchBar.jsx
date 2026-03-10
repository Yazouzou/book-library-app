import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (onSearch) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search books..."
        value={query}                      // controlled input
        onChange={(e) => setQuery(e.target.value)} // handle typing
        className="border rounded-l p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-black-500"
      />
      <button
        type="submit"
        className="bg-black-600 text-white px-4 rounded-r hover:bg-black-700 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;