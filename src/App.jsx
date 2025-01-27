import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Landing/Navbar/Navbar";
import MainSection from "./Components/Landing/Main_Section/MainSection.jsx";
import SectionTwo from "./Components/Landing/Sectiontwo/SectionTwo.jsx";
import Sectionthree from "./Components/Landing/Sectionthree/Sectionthree.jsx";
import Sectionfour from "./Components/Landing/Sectionfour/Sectionfour.jsx";
import Sectionfive from "./Components/Landing/Sectionfive/Sectionfive.jsx";
import Footer from "./Components/Landing/Footer/Footer.jsx";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";
import Mainapp from "./Components/Dashboard/Allmain/Allmain.jsx";

const App = () => {
  return (
    <div>
      {/* <Routes>

        <Route path="/signin" element={<Signin />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <MainSection />
              <SectionTwo />
              <Sectionthree />
              <Sectionfour />
              <Sectionfive />
              <Footer />
            </div>
          }
        />
      </Routes> */}
      <Mainapp />
    </div>
  );
};

export default App;
