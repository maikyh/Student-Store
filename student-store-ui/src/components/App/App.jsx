import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import OrderHome from "../OrderHome/OrderHome";
import Footer from "../Footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<OrderHome />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
