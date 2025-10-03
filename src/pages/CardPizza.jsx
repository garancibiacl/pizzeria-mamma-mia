import React from "react";
import { Link } from "react-router-dom";
import { RiEyeLine, RiShoppingCartLine } from "react-icons/ri";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

function CardPizza({ id, name, price, ingredients, img }) {
  const formatCurrency = (n) => n.toLocaleString("es-CL");
  const { addToCart } = useCart();
  const { show, update } = useToast();

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

           {/* Hito 3: ingredientes como lista */}
           {/* <ul className="mt-3 list-disc list-inside text-sm text-black/70">
          {ingredients && ingredients.map((ing) => <li key={ing}>{ing}</li>)}
        </ul> */}
        <div className="mt-5 grid grid-cols-2 gap-3 ">
          <Link
            to={`/pizza/${id}`}
            className="rounded-xl border border-black px-3 py-2 text-center text-black hover:bg-black hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 cursor-pointer"
          >
            <RiEyeLine className="inline mr-1 align-[-2px]" aria-hidden="true" />
            Ver más
          </Link>
          <button
            className="rounded-xl border border-black bg-black text-white px-3 py-2 hover:bg-white hover:text-black transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 cursor-pointer"
            onClick={() => {
              const toastId = show(`Agregando \"${name}\"…`, { type: "info", duration: 800 });
              // acción síncrona
              addToCart({ id, name, price, img });
              // dar feedback de éxito
              setTimeout(() => {
                update(toastId, { message: `\"${name}\" añadido al carrito`, type: "success" });
              }, 300);
            }}
          >
            <RiShoppingCartLine className="inline mr-1 align-[-2px]" aria-hidden="true" />
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
