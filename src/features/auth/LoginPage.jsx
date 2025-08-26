import React from "react";

const LoginPage = () => (
  <section className="min-h-[calc(100vh-160px)] grid place-items-center px-4 py-10 bg-gradient-to-b from-stone-50 to-stone-100">
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Panel visual (solo md+) */}
      <aside
        className="hidden md:block rounded-2xl overflow-hidden border border-black/5 shadow-sm"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.25), rgba(0,0,0,.25)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      >
        <div className="h-full w-full grid place-items-end p-6">
          <p className="text-white/90 text-sm">Entra y sigue creando.</p>
        </div>
      </aside>

      {/* Formulario */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-black/5 shadow-sm p-6 sm:p-8">
        <header className="mb-6 text-center">
          <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-black text-white grid place-items-center">
            🔐
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Iniciar sesión</h1>
          <p className="text-sm text-black/60 mt-1">Simple. Enfocado. Sin fricción.</p>
        </header>

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="tu@correo.com"
              className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none transition focus:border-black/20 focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none transition focus:border-black/20 focus:ring-2 focus:ring-black/10"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-black text-white py-2.5 font-semibold tracking-wide hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-xs text-center text-black/50">
          ¿Olvidaste tu contraseña? <span className="underline decoration-black/40">Recupérala</span>
        </p>
      </div>
    </div>
  </section>
);

export default LoginPage;
