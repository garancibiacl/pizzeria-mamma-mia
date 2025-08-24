import React from "react";

function CardPizza({ name, price, ingredients, img }) {
  const formatCurrency = (n) => n.toLocaleString("es-CL");

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-black/5 flex flex-col">
      <img src={img} alt={`Pizza ${name}`} className="w-full h-48 object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold">Pizza {name}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {ingredients.map((ing) => (
            <span key={ing} className="text-xs px-2 py-1 rounded-full bg-black/5">
              #{ing}
            </span>
          ))}
        </div>
        <div className="mt-4 text-2xl font-extrabold">
          ${formatCurrency(price)}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 mt-auto">
          <button className="rounded-xl border px-3 py-2 hover:bg-black/5">Ver más</button>
          <button className="rounded-xl bg-black text-white px-3 py-2 hover:opacity-90">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
