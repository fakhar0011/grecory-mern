import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Header from "../Header/Header.jsx";
import Maincontent from "../Maincontent/Maincontent.jsx";
import AddListModal from "../Addlist/AddListModal.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
// import Signin from "../../Pages/Signin/Signin.jsx"//

const Allmain = () => {
  const initialData = {
    vegetables: [
      { id: 1, name: "Tinda" },
      { id: 2, name: "Kadu" },
    ],
    breakfast: [
      { id: 3, name: "Pancakes" },
      { id: 4, name: "Omelette" },
    ],
    fruits: [
      { id: 5, name: "Apple" },
      { id: 6, name: "Banana" },
    ],
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [categories, setCategories] = useState(Object.keys(initialData));
  const [data, setData] = useState(initialData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "");

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    // return <Signin setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        categories={categories}
        setCategories={setCategories}
        setSelectedCategory={setSelectedCategory}
        className="lg:w-1/4 w-full lg:h-auto h-auto"
      />

      <div className="flex-1 flex flex-col">
        <Header handleLogout={handleLogout} className="py-2 px-4 lg:py-4" />
        <Routes>
          <Route
            path="/"
            element={
              <Maincontent
                selectedCategory={selectedCategory}
                data={data}
                setData={setData}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/add-list" element={<AddListModal />} />
        </Routes>
      </div>
    </div>
  );
};

export default Allmain;
