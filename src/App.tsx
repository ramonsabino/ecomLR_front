// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Supondo que Navbar está em src/components/Navbar
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Product";
import Contact from "./pages/Contact/Contact";
import ProductDetailPage from "./pages/ProductDetail/ProductDetail";
import { CartProvider } from "./context/CartContext";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/product/:productCategory/:productId"
            element={<ProductDetailPage />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
