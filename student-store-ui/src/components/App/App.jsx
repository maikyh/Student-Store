import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Sidebar />
          <Navbar />
          <Home />
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  );
}
