import React, { useState } from "react";

const Sidebar = ({ categories, setCategories, setSelectedCategory }) => {
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const addCategory = () => {
    const categoryKey = newCategory.trim().toLowerCase();
    if (categoryKey && !categories.includes(categoryKey)) {
      setCategories([...categories, categoryKey]);
      setNewCategory("");
      setIsAddingCategory(false);
    }
  };

  const removeCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
  };

  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h3 className="text-lg font-bold mb-4">Categories</h3>
      {isAddingCategory && (
        <div className="mb-4 bg-gray-100 p-2 rounded-lg">
          <input
            type="text"
            placeholder="New Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full px-2 py-1 border rounded"
          />
          <button
            onClick={addCategory}
            className="w-full mt-2 bg-green-500 text-white py-1 rounded"
          >
            Add
          </button>
        </div>
      )}
      <button
        onClick={() => setIsAddingCategory(!isAddingCategory)}
        className="bg-green-500 text-white py-1 px-2 rounded mb-4 w-full"
      >
        {isAddingCategory ? "Cancel" : "Add Category"}
      </button>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 cursor-pointer"
            onClick={() => setSelectedCategory(category)}
          >
            <span className="capitalize">{category}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeCategory(category);
              }}
              className="text-red-500"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
