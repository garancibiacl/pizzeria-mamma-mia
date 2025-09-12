// src/components/Pizza.jsx
import React, { useEffect, useState } from "react";

function Pizza() {
  const [pizza, setPizza] = useState(null);


  async function getPizza() {
    const res = await fetch("http://localhost:5000/api/pizzas/p001");
    const data = await res.json();
    setPizza(data);
  }

  useEffect(() => {
    getPizza();
  }, []);

  if (!pizza) return <p className="p-6 text-center">Cargando pizza…</p>;

  const formatCurrency = (n) => Number(n).toLocaleString("es-CL");

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl border border-black/10 overflow-hidden">
        <img
          src={pizza.img}
          alt={`Pizza ${pizza.name}`}
          className="w-full h-72 object-cover md:h-full"
        />

        <div className="p-6">
          <h1 className="text-2xl font-bold">Pizza {pizza.name}</h1>
          <p className="mt-2 text-black/70">{pizza.desc}</p>

          <h3 className="mt-4 font-semibold">Ingredientes</h3>
          <ul className="mt-1 list-disc list-inside text-sm text-black/70">
            {pizza.ingredients?.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-extrabold">
              $ {formatCurrency(pizza.price)}
            </span>
            <button className="rounded-xl bg-black text-white px-5 py-2.5 hover:opacity-90">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pizza;
