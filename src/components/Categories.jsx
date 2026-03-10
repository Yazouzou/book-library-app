import { useState } from "react";
import Button from "./Button";

const categoriesList = [
  { name: "Fiction", color: "black" },
  { name: "Non-fiction", outline: true },
  { name: "Science", color: "black" },
  { name: "History", outline: true },
  { name: "Romance", color: "black" },
  { name: "Technology", outline: true }
];

function Categories({ onCategorySelect }) {
  const [active, setActive] = useState(null);

  const handleClick = (category) => {
    setActive(category);
    if (onCategorySelect) onCategorySelect(category);
  };

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
          Explore Categories
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          {categoriesList.map((cat) => (
            <Button
              key={cat.name}
              color={active === cat.name ? "blue" : cat.color}
              outline={cat.outline}
              onClick={() => handleClick(cat.name)}
            >
              {cat.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;