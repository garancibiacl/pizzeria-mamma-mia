// src/context/UserContext.jsx
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [token, setToken] = useState(true); // token simulado activo por defecto

  const logout = useCallback(() => setToken(false), []);

  const value = useMemo(() => ({ token, logout }), [token, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser debe usarse dentro de UserProvider");
  return ctx;
}
