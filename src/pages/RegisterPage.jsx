import React from "react";
import Header from "./Header";
import { RiUserAddLine } from "react-icons/ri";



function RegisterPage() {
  return (
    <section className="">
              <Header />

      <div className="max-w-sm mx-auto bg-white rounded-xl border border-black/10 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Crear cuenta</h1>

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="tu@correo.com"
              className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:border-black/20 focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:border-black/20 focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="confirm" className="text-sm font-medium">Confirmar contraseña</label>
            <input
              id="confirm"
              type="password"
              placeholder="Repite tu contraseña"
              className="w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:border-black/20 focus:ring-2 focus:ring-black/10"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-black text-white py-2.5 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
          >
            <RiUserAddLine className="inline mr-1 align-[-2px]" aria-hidden="true" />
            Registrarse
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegisterPage;
