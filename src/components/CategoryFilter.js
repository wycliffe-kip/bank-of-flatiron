
import React, {useState} from "react";

function CategoryFilter({categories, onSelectCategory}) {
  const [selectedCategory, setSelectedCategory] = useState("")

  function handleClick(e) {
    const category = e.target.getAttribute("data-category")
    setSelectedCategory(category)
    onSelectCategory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button
          key={category}
          data-category={category}
          onClick={handleClick}
          className={selectedCategory === category ? "selected" : ""}
          > 
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
