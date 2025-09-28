import React from "react";
import { useCart } from "../context/CartContext";

const formatCurrency = (n) => Number(n).toLocaleString("es-CL");

export default function Cart() {
  const { cart, inc, dec, remove, clear, total } = useCart();

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Carrito</h2>

      <div className="bg-white rounded-2xl border border-black/10 overflow-hidden">
        {cart.length === 0 ? (
          <p className="p-6 text-center text-black/60">Tu carrito está vacío.</p>
        ) : (
          <ul className="divide-y divide-black/10">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-4 p-4">
                <img src={item.img} alt={`Pizza ${item.name}`} className="w-16 h-16 rounded object-cover" />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-black/60">$ {formatCurrency(item.price)}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => dec(item.id)} className="w-9 h-9 rounded-full border border-black/20 hover:bg-black/5" aria-label="Disminuir">−</button>
                  <span className="w-8 text-center font-semibold">{item.count}</span>
                  <button onClick={() => inc(item.id)} className="w-9 h-9 rounded-full border border-black/20 hover:bg-black/5" aria-label="Aumentar">+</button>
                </div>

                <div className="w-24 text-right font-bold">
                  $ {formatCurrency(item.price * item.count)}
                </div>

                <button onClick={() => remove(item.id)} className="ml-4 text-sm text-red-600 hover:underline">
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-lg">
          Total: <span className="font-extrabold">$ {formatCurrency(total)}</span>
        </p>
        <div className="flex gap-2">
          <button onClick={clear} className="rounded-xl border px-5 py-2.5 hover:bg-black/5">Vaciar</button>
          <button className="rounded-xl bg-black text-white px-5 py-2.5 hover:opacity-90">Pagar</button>
        </div>
      </div>
    </section>
  );
}

