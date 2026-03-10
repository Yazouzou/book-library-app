// src/components/Navbar.jsx
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md px-8 py-4 flex justify-between items-center relative">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        Book Library
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
        <Link to="/search" className="hover:text-blue-500 transition">Search</Link>
        <Link to="/login" className="hover:text-blue-500 transition">Login</Link>
        <Link to="/register" className="hover:text-blue-500 transition">Register</Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center gap-4">
        {/* Dark Mode Toggle */}
       
        
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col md:hidden shadow-md z-10">
          <Link
            to="/"
            className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/search"
            className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            Search
          </Link>
          <Link
            to="/login"
            className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar