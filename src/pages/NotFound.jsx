// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
  return (
    <section className="min-h-[50vh] grid place-items-center px-4 py-16 text-center">
      <div>
        <h1 className="text-4xl font-extrabold">404</h1>
        <p className="mt-2 text-black/70">La página que buscas no existe.</p>
        <Link to="/" className="inline-block mt-6 rounded-xl bg-black text-white px-5 py-2.5 hover:opacity-90">
          Volver al Home
        </Link>
      </div>
    </section>
  );
}
