import React, { useState } from "react";
import AddListModal from "../Addlist/AddListModal";

const Maincontent = ({ selectedCategory, data, setData }) => {
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addItem = () => {
    if (newItem.trim() !== "") {
      const newItemData = {
        id: Date.now(),
        name: newItem,
      };
      setData((prevData) => ({
        ...prevData,
        [selectedCategory]: [
          ...(prevData[selectedCategory] || []),
          newItemData,
        ],
      }));
      setNewItem("");
      setIsAddingItem(false);
    }
  };

  const removeItem = (id) => {
    setData((prevData) => ({
      ...prevData,
      [selectedCategory]: prevData[selectedCategory].filter(
        (item) => item.id !== id
      ),
    }));
    if (selectedItem === id) {
      setSelectedItem(null);
    }
  };

  return (
    <main className="p-4 flex-1">

      <div className="p-4 flex justify-between items-center">
        <button
          onClick={openModal}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 text-sm md:text-base"
        >
          + Add List
        </button>
        {isModalOpen && <AddListModal closeModal={closeModal} />}
      </div>


      {isAddingItem && (
        <div className="mb-4 bg-gray-100 p-4 rounded-lg">
          <input
            type="text"
            placeholder="New Item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
          />
          <button
            onClick={addItem}
            className="w-full mt-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 text-sm md:text-base"
          >
            Add Item
          </button>
        </div>
      )}


      <div className="space-y-6">
        {data[selectedCategory]?.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`item-${item.id}`}
                  name={`category-${selectedCategory}`}
                  value={item.id}
                  checked={selectedItem === item.id}
                  onChange={() => setSelectedItem(item.id)}
                  className="h-4 w-4"
                />
                <label
                  htmlFor={`item-${item.id}`}
                  className={`text-gray-700 capitalize ${selectedItem === item.id
                    ? "line-through text-gray-500"
                    : ""
                    }`}
                >
                  {item.name}
                </label>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 bg-red-100 hover:bg-red-200 p-2 rounded-full"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Maincontent;
