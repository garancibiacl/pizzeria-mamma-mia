// src/components/Home.jsx
import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { usePizzas } from "../context/PizzasContext";

function Home() {
  const { pizzas, loading, error } = usePizzas();

  return (
    <main>
      <Header />
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold mb-4">Nuestra selección</h2>
        {loading && <p className="text-black/70">Cargando pizzas…</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pizzas.map((p) => (
            <CardPizza
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              ingredients={p.ingredients}
              img={p.img}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
