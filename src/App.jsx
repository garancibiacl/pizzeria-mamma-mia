import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RegisterPage from "./features/auth/RegisterPage";
import LoginPage from "./features/auth/LoginPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-stone-100">
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage/> */}
      <LoginPage/>
      <Footer />
    </div>
  );
}

export default App;
