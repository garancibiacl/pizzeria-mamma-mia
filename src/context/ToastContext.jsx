// src/context/ToastContext.jsx
import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  const remove = useCallback((id) => {
    setToasts((list) => list.filter((t) => t.id !== id));
  }, []);

  const show = useCallback((message, { type = "info", duration = 2500 } = {}) => {
    const id = ++idRef.current;
    setToasts((list) => [...list, { id, message, type }]);
    if (duration > 0) {
      setTimeout(() => remove(id), duration);
    }
    return id;
  }, [remove]);

  const update = useCallback((id, patch) => {
    setToasts((list) => list.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  }, []);

  const value = useMemo(() => ({ toasts, show, remove, update }), [toasts, show, remove, update]);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast debe usarse dentro de ToastProvider");
  return ctx;
}
