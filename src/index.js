import UserProvider from "./context/UserContext";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login";
import PrivateRoutes from "./PrivateRoutes"
import Header from "./components/ProductItem/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserProvider>
  <CartProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cart" element={<PrivateRoutes><Cart /></PrivateRoutes>} />
        <Route path="/products" element={<PrivateRoutes><Products /></PrivateRoutes>} />

      </Routes>
    </BrowserRouter>
  </CartProvider>
  </UserProvider>
);

reportWebVitals();
