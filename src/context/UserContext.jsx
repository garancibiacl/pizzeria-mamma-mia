// src/context/UserContext.jsx
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem("token") || "";
    } catch {
      return "";
    }
  });
  const [email, setEmail] = useState(() => {
    try {
      return localStorage.getItem("email") || "";
    } catch {
      return "";
    }
  });

  useEffect(() => {
    try {
      if (token) localStorage.setItem("token", token);
      else localStorage.removeItem("token");
    } catch {}
  }, [token]);

  useEffect(() => {
    try {
      if (email) localStorage.setItem("email", email);
      else localStorage.removeItem("email");
    } catch {}
  }, [email]);

  const API = "http://localhost:5000";

  const login = useCallback(async ({ email, password }) => {
    const res = await fetch(`${API}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error("Credenciales inválidas");
    const data = await res.json();
    setToken(data.token || "");
    setEmail(data.email || "");
    return data;
  }, []);

  const register = useCallback(async ({ email, password }) => {
    const res = await fetch(`${API}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error("Registro inválido");
    const data = await res.json();
    setToken(data.token || "");
    setEmail(data.email || "");
    return data;
  }, []);

  const fetchMe = useCallback(async () => {
    if (!token) throw new Error("No autenticado");
    const res = await fetch(`${API}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("No se pudo obtener el perfil");
    const data = await res.json();
    if (data?.email) setEmail(data.email);
    return data;
  }, [token]);

  const logout = useCallback(() => {
    setToken("");
    setEmail("");
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    } catch {}
  }, []);

  const value = useMemo(
    () => ({ token, email, login, register, logout, fetchMe }),
    [token, email, login, register, logout, fetchMe]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser debe usarse dentro de UserProvider");
  return ctx;
}
