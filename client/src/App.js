import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // for react router - having a separate "page" for each restaurant
import Home from "./components/Home.jsx";
import Restaurant from "./components/Restaurant.jsx"


// This App.js file just sets up React Router routes. Unlike most projects/labs till now, App.js doesn't serve as the home page.

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
