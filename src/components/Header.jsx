import React from "react";

const Header = () => {
  const bgUrl =
    "https://images.unsplash.com/photo-1541745537413-b804c9f6f718?q=80&w=1920&auto=format&fit=crop";

  return (
    <header
      className="relative text-white text-center py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-extrabold">¡Pizzería Mamma Mía!</h1>
      <p className="mt-4 text-lg text-white/90">
        La mejor pizza artesanal de la ciudad 🍕🔥 — masa madre, ingredientes frescos y mucho cariño.
      </p>
    </header>
  );
};

export default Header;




