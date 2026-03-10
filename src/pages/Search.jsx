// src/pages/Search.jsx
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import { searchBooks } from "../services/googleBooks";

function Search() {
  const [books, setBooks] = useState([]);
  const [searchParams] = useSearchParams(); // react-router hook
  const query = searchParams.get("q") || "";

  // Run search when query changes
  useEffect(() => {
    const fetchBooks = async () => {
      if (query) {
        const results = await searchBooks(query);
        setBooks(results);
      }
    };
    fetchBooks();
  }, [query]);

  const handleSearch = async (term) => {
    const results = await searchBooks(term);
    setBooks(results);
  };

  return (
    <div className="p-8">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Search;