import React, { useState } from "react";

const AddListModal = ({ closeModal }) => {
    const [listTitle, setListTitle] = useState("");
    const [items, setItems] = useState([]);
    const [itemInput, setItemInput] = useState("");

    const addItem = () => {
        if (itemInput.trim() !== "") {
            setItems([...items, itemInput]);
            setItemInput("");
        }
    };

    const createList = () => {
        console.log({ listTitle, items });
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md shadow-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={closeModal}
                >
                    ✕
                </button>
                <h2 className="text-lg font-bold mb-4 text-center">Add New List</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">List Title</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={listTitle}
                        onChange={(e) => setListTitle(e.target.value)}
                        placeholder="Enter list title"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Add Items</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={itemInput}
                            onChange={(e) => setItemInput(e.target.value)}
                            placeholder="Item name"
                        />
                        <button
                            onClick={addItem}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-sm font-medium">Items:</p>
                    {items.length === 0 ? (
                        <p className="text-gray-500 text-sm">No items added yet</p>
                    ) : (
                        <ul className="list-disc list-inside text-sm">
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <button
                    onClick={createList}
                    className={`w-full px-4 py-3 rounded text-sm ${listTitle && items.length > 0
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    disabled={!listTitle || items.length === 0}
                >
                    Create List
                </button>
            </div>
        </div>
    );
};

export default AddListModal;
