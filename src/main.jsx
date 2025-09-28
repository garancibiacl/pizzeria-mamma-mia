// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { PizzasProvider } from "./context/PizzasContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzasProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </PizzasProvider>
    </BrowserRouter>
  </React.StrictMode>
);
