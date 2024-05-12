import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Offer from "./Offer";
import Customer from "./Customer";
import Contact from "./Contact";
import NoPage from "./NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="offer" element={<Offer />} />
          <Route path="customer" element={<Customer />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
