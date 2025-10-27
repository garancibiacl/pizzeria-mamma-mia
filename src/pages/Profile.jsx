// src/pages/Profile.jsx
import React, { useEffect } from "react";
import { useUser } from "../context/UserContext";

export default function Profile(){
  const { email, fetchMe, logout } = useUser();

  useEffect(() => {
    if (!email) {
      (async () => {
        try { await fetchMe(); } catch {}
      })();
    }
  }, [email, fetchMe]);

  return (
    <section className="max-w-md mx-auto px-4 py-10">
      <div className="bg-white rounded-xl border border-black/10 p-6">
        <h1 className="text-2xl font-semibold">Perfil</h1>
        <p className="mt-2 text-black/70"><span className="font-medium">Email:</span> {email || "cargando..."}</p>
        <button onClick={logout} className="mt-6 rounded-xl bg-black text-white px-5 py-2.5 hover:opacity-90">Cerrar sesión</button>
      </div>
    </section>
  );
}
