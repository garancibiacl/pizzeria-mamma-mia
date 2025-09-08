// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  async function getPizzas() {
    const res = await fetch("http://localhost:5000/api/pizzas");
    const data = await res.json();
    setPizzas(data);
  }

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <main>
      <Header />
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold mb-4">Nuestra selección</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pizzas.map((p) => (
            <CardPizza
              key={p.id}
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
