import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
  import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-stone-100">
       <Navbar /> 

     {/* Hito 3 — Para evaluar Home dinámico: <Home /> */}
      {/* Hito 3 — Para evaluar Carrito: <Cart /> */}
      
\   {/* <LoginPage/> */}
   {/* <RegisterPage/> */}
      <Footer />
    </div>
  );
}

export default App;
