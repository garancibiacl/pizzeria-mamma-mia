import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-stone-100">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
