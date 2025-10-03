// src/context/PizzasContext.jsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const PizzasContext = createContext(null);

const API_BASE = "http://localhost:5000"; // centralizamos el backend

export function PizzasProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [byId, setById] = useState({}); // cache por id
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/pizzas`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setPizzas(data);
      // seed cache
      setById((prev) => {
        const next = { ...prev };
        for (const p of data) next[p.id] = p;
        return next;
      });
    } catch (e) {
      setError(e.message || "Error al cargar pizzas");
    } finally {
      setLoading(false);
    }
  };

  const fetchById = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/api/pizzas/${id}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setById((prev) => ({ ...prev, [id]: data }));
      return data;
    } catch (e) {
      throw e;
    }
  };

  // carga inicial
  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({ pizzas, byId, loading, error, reload: fetchAll, getPizza: fetchById }),
    [pizzas, byId, loading, error]
  );

  return <PizzasContext.Provider value={value}>{children}</PizzasContext.Provider>;
}

export function usePizzas() {
  const ctx = useContext(PizzasContext);
  if (!ctx) throw new Error("usePizzas debe usarse dentro de PizzasProvider");
  return ctx;
}

// Hook de conveniencia para una pizza por id
export function usePizza(id) {
  const { byId, getPizza } = usePizzas();
  const [state, setState] = useState({
    pizza: id ? byId[id] : null,
    loading: id ? !byId[id] : false,
    error: null,
  });

  useEffect(() => {
    let active = true;
    if (!id) {
      setState({ pizza: null, loading: false, error: null });
      return () => {
        active = false;
      };
    }

    if (byId[id]) {
      setState({ pizza: byId[id], loading: false, error: null });
      return () => {
        active = false;
      };
    }

    setState((s) => ({ ...s, loading: true, error: null }));
    getPizza(id)
      .then((p) => {
        if (active) setState({ pizza: p, loading: false, error: null });
      })
      .catch((e) => {
        if (active) setState({ pizza: null, loading: false, error: e.message || "Error" });
      });
    return () => {
      active = false;
    };
  }, [id, byId, getPizza]);

  return state; // { pizza, loading, error }
}
