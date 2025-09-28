// src/context/CartContext.jsx
import React, { createContext, useContext, useMemo, useReducer, useEffect } from "react";

// Cart item shape: { id, name, price, img, count }
const CartContext = createContext(null);

const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.payload || [];
    }
    case "ADD": {
      const { item } = action.payload; // {id,name,price,img}
      const idx = state.findIndex((it) => it.id === item.id);
      if (idx >= 0) {
        return state.map((it) => (it.id === item.id ? { ...it, count: it.count + 1 } : it));
      }
      return [...state, { ...item, count: 1 }];
    }
    case "INC": {
      const id = action.payload;
      return state.map((it) => (it.id === id ? { ...it, count: it.count + 1 } : it));
    }
    case "DEC": {
      const id = action.payload;
      return state
        .map((it) => (it.id === id ? { ...it, count: it.count - 1 } : it))
        .filter((it) => it.count > 0);
    }
    case "REMOVE": {
      const id = action.payload;
      return state.filter((it) => it.id !== id);
    }
    case "CLEAR": {
      return [];
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // hydrate from localStorage (optional persistence)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      if (raw) dispatch({ type: "INIT", payload: JSON.parse(raw) });
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const total = useMemo(() => cart.reduce((sum, it) => sum + it.price * it.count, 0), [cart]);
  const count = useMemo(() => cart.reduce((sum, it) => sum + it.count, 0), [cart]);

  const addToCart = (item) => dispatch({ type: "ADD", payload: { item } });
  const inc = (id) => dispatch({ type: "INC", payload: id });
  const dec = (id) => dispatch({ type: "DEC", payload: id });
  const remove = (id) => dispatch({ type: "REMOVE", payload: id });
  const clear = () => dispatch({ type: "CLEAR" });

  const value = useMemo(
    () => ({ cart, total, count, addToCart, inc, dec, remove, clear }),
    [cart, total, count]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
