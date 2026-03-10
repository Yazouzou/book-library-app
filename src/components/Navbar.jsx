function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-xl font-bold">Book Library</h1>

      <div className="hidden md:flex gap-6">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="md:hidden">
        ☰
      </button>
    </nav>
  )
}

export default Navbar