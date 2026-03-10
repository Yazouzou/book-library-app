// src/pages/Home.jsx
import { useState } from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Reviews from "../components/Reviews";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import BookCard from "../components/BookCard";
import { searchBooks } from "../services/googleBooks";

function Home() {
  const [books, setBooks] = useState([]);

  // Handler for category clicks
  const handleCategorySelect = async (category) => {
    const results = await searchBooks(category); // fetch books from Google Books API
    setBooks(results);
  };

  return (
    <div>
      <Hero />

      {/* Categories with reactive search */}
      <Categories onCategorySelect={handleCategorySelect} />

      {/* Show books for selected category */}
      {books.length > 0 && (
        <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Books in this category
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      )}

      <Features />
      <Steps />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;