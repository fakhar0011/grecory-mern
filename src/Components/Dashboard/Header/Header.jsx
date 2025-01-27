import React from 'react'

const Header = ({ handleLogout }) => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col sm:flex-row justify-between items-center gap-2">
      <h1 className="text-xl sm:text-2xl font-bold text-green-600 text-center sm:text-left">
        GrocerySave
      </h1>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          onClick={handleLogout}
          className="bg-green-600 text-white px-4 py-2 text-sm sm:text-base rounded-lg hover:bg-green-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
