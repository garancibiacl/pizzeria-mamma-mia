// src/components/ToastContainer.jsx
import React from "react";
import { useToast } from "../context/ToastContext";
import { RiCloseLine } from "react-icons/ri";

const typeStyles = {
  info: "bg-black text-white border-black",
  success: "bg-green-600 text-white border-green-700",
  error: "bg-red-600 text-white border-red-700",
  warning: "bg-yellow-500 text-black border-yellow-600",
};

export default function ToastContainer() {
  const { toasts, remove } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`min-w-[240px] max-w-xs rounded-xl border shadow-lg px-4 py-3 flex items-start gap-3 ${
            typeStyles[t.type] || typeStyles.info
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="flex-1 text-sm">{t.message}</div>
          <button
            className="opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white rounded"
            aria-label="Cerrar"
            onClick={() => remove(t.id)}
          >
            <RiCloseLine />
          </button>
        </div>
      ))}
    </div>
  );
}
