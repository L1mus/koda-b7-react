import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Globals.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import Counter from "./pages/Counter.jsx";
import Pokemon from "./pages/Pokemon.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
