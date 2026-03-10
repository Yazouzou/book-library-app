// src/components/Features.jsx
import { useNavigate } from "react-router-dom";

function Features() {
  const navigate = useNavigate(); // hook to navigate programmatically

  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-beige p-4 rounded">
        {/* Optional top container */}
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-beige">
            Smart recommendations for you
          </h2>
          <p className="text-gray-600 dark:text-[#F5F5DC] mb-6">
            Discover new books based on your reading preferences.
          </p>

          {/* Interactive Find Books Button */}
          <button
            onClick={() => navigate("/search")} // ✅ navigate to search page
            className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
          >
            {/* You can add an icon if you want */}
            📚 Find Books
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;