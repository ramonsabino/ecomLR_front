// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Product";
import ProductDetailPage from "./pages/ProductDetail/ProductDetail";
import { CartProvider } from "./context/CartContext";
import { DeliveryProvider } from "./context/DeliveryContext";
import ChargersPage from "./pages/Chargers/ChargersPage";
import SpeakerPage from "./pages/Speakers/SpeakersPage";
import ScreenProtectorPage from "./pages/ScreenProtector/ScreenProtectorPage";
import SmartwatchPage from "./pages/SmartWatch/SmartwatchPage";
import SupportPage from "./pages/SupportCar/SupportPage";
import UtilitariesPage from "./pages/Utilitaries/UtilitariesPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import { ProductProvider } from "./context/ProductContext";
import FonesPage from "./pages/Headphone/HeadphonePage";
import ContactPage from "./pages/Contact/Contact";
import LoginPage from "./pages/Login/LoginPage";
import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <CartProvider>
      <DeliveryProvider>
        <ProductProvider>
            <AuthProvider>
          <Router>

            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/categorias/:productCategory/:productId" element={<ProductDetailPage />} />
              <Route path="categorias/carregadores" element={<ChargersPage />} />
              <Route path="categorias/fones-de-ouvido" element={<FonesPage />} />
              <Route path="categorias/caixas-de-som" element={<SpeakerPage />} />
              <Route path="categorias/peliculas" element={<ScreenProtectorPage />} />
              <Route path="categorias/smartwatchs" element={<SmartwatchPage />} />
              <Route path="categorias/suportes-veiculares" element={<SupportPage />} />
              <Route path="categorias/utilitarios" element={<UtilitariesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>

          </Router>
            </AuthProvider>
        </ProductProvider>
      </DeliveryProvider>
    </CartProvider>
  );
};

export default App;
