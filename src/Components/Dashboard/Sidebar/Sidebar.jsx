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
    <div className="w-full sm:w-64 bg-white shadow-lg p-4 flex flex-col">

      <h3 className="text-lg font-bold mb-4 text-center sm:text-left">Categories</h3>


      {isAddingCategory && (
        <div className="mb-4 bg-gray-100 p-2 rounded-lg">
          <input
            type="text"
            placeholder="New Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={addCategory}
            className="w-full mt-2 bg-green-500 text-white py-2 rounded-lg text-sm hover:bg-green-600"
          >
            Add
          </button>
        </div>
      )}


      <button
        onClick={() => setIsAddingCategory(!isAddingCategory)}
        className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4 text-sm hover:bg-green-600 w-full"
      >
        {isAddingCategory ? "Cancel" : "Add Category"}
      </button>


      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => setSelectedCategory(category)}
          >
            <span className="capitalize text-sm sm:text-base">{category}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeCategory(category);
              }}
              className="text-red-500 text-sm sm:text-base"
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
