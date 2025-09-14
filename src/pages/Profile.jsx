// src/pages/Profile.jsx
import React from "react";
 

export default function Profile(){
  return (
    <section className="max-w-md mx-auto px-4 py-10">
      <div className="bg-white rounded-xl border border-black/10 p-6">
        <h1 className="text-2xl font-semibold">Perfil</h1>
        <p className="mt-2 text-black/70"><span className="font-medium">Email:</span> usuario@correo.com</p>
        <button className="mt-6 rounded-xl bg-black text-white px-5 py-2.5 hover:opacity-90">Cerrar sesión</button>
      </div>
    </section>
  );
}
