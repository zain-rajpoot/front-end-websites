import React from 'react'
import './App.css';
import './Responsive.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Shop";
import Technology from "./Technology";
import Support from "./Support";
import Contact from "./Contact";
import Errorpage from "./Errorpage";
import { useEffect } from 'react';
// import { useState } from 'react';
function App() {
  // const [num, setnum] = useState(1);
  useEffect(() => {
    return () => {
      document.title = "Westmire Wires"
    };
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="technology" element={<Technology />} />
            <Route path="support" element={<Support />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Errorpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
