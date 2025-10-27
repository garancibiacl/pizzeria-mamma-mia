import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const formatCurrency = (n) => Number(n).toLocaleString("es-CL");

export default function Cart() {
  const { cart, inc, dec, remove, clear, total } = useCart();
  const { token } = useUser();
  const [toast, setToast] = useState({ show: false, type: "success", text: "" });
  const [timerId, setTimerId] = useState(null);
  const API = "http://localhost:5000";
  const showToast = (type, text, ms = 2500) => {
    if (timerId) clearTimeout(timerId);
    setToast({ show: true, type, text });
    const id = setTimeout(() => { setToast((t) => ({ ...t, show: false })); setTimerId(null); }, ms);
    setTimerId(id);
  };

  const handleCheckout = async () => {
    try {
      const res = await fetch(`${API}/api/checkouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });
      if (!res.ok) throw new Error("No se pudo procesar el pago");
      showToast("success", "Compra realizada con éxito ✅");
      clear();
    } catch (e) {
      showToast("error", e.message || "Error en el checkout");
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      {toast.show && (
        <div
          role="status"
          className={`fixed top-4 right-4 z-50 rounded-lg px-4 py-3 shadow-md text-sm ${
            toast.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {toast.text}
        </div>
      )}
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
          <button
            className="rounded-xl bg-black text-white px-5 py-2.5 hover:opacity-90 disabled:bg-black/40 disabled:cursor-not-allowed"
            disabled={!token || cart.length === 0}
            onClick={handleCheckout}
          >
            Pagar
          </button>
        </div>
      </div>
    </section>
  );
}
