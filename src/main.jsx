// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { PizzasProvider } from "./context/PizzasContext";
import { ToastProvider } from "./context/ToastContext";
import ToastContainer from "./components/ToastContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <PizzasProvider>
          <CartProvider>
            <App />
            <ToastContainer />
          </CartProvider>
        </PizzasProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);
