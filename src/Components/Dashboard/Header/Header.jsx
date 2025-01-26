import React from "react";

const Header = ({ handleLogout }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-600">GrocerySave</h1>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLogout}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
