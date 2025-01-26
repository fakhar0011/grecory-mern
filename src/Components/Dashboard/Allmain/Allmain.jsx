import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Header from "../Header/Header.jsx";
import Maincontent from "../Maincontent/Maincontent.jsx";
import AddListModal from "../Addlist/AddListModal.jsx";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "POST",
        credentials: "include", 
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setIsLoggedIn(false); 
        navigate("/"); 
      } else {
        const errorData = await response.json();
        console.error(
          "Failed to log out:",
          errorData.message || "Unknown error"
        );
        alert(errorData.message || "Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };
  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        categories={categories}
        setCategories={setCategories}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="flex-1 flex flex-col">
        <Header handleLogout={handleLogout} />
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
