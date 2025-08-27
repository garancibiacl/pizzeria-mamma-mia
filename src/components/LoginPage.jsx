import React, { useState, useEffect } from "react";
import Header from "./Header";


function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [invalid, setInvalid] = useState({ email: false, password: false });
  const [toast, setToast] = useState({ show: false, type: "success", text: "" });

  const baseInput =
    "w-full rounded-lg border px-3 py-2 outline-none transition focus:ring-2";
  const okInput = "border-black/10 focus:border-black/20 focus:ring-black/10";
  const errInput = "border-red-400 focus:border-red-500 focus:ring-red-200";

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const showToast = (type, text) => setToast({ show: true, type, text });

  useEffect(() => {
    if (!toast.show) return;
    const t = setTimeout(() => setToast((x) => ({ ...x, show: false })), 2500);
    return () => clearTimeout(t);
  }, [toast.show]);

  const validate = () => {
    const errs = {
      email: form.email.trim() === "",
      password: form.password.trim() === "",
    };

    if (errs.email || errs.password) {
      return { ok: false, errs, msg: "Todos los campos son obligatorios." };
    }

    if (!isValidEmail(form.email)) {
      return { ok: false, errs: { ...errs, email: true }, msg: "Email inválido." };
    }

    if (form.password.length < 6) {
      return {
        ok: false,
        errs: { ...errs, password: true },
        msg: "La contraseña debe tener al menos 6 caracteres.",
      };
    }

    return { ok: true, errs, msg: "Inicio de sesión exitoso ✅" };
  };

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((f) => ({ ...f, [id]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { ok, errs, msg } = validate();
    setInvalid(errs);
    showToast(ok ? "success" : "error", msg);
    // si ok === true, aquí podrías llamar a tu API de autenticación
  };

  return (
    <section className="pb-5">
            <Header />

      {/* Toast */}
      {toast.show && (
        <div
          role="status"
          className={`fixed top-4 right-4 z-50 rounded-lg px-4 py-3 shadow-md text-sm ${
            toast.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {toast.text}
        </div>
      )}

      <div className="max-w-sm mx-auto bg-white rounded-xl border border-black/10 p-6 mt-5">
        <h1 className="text-2xl font-semibold mb-6 text-center">Iniciar sesión</h1>

        <form className="space-y-4" onSubmit={onSubmit} noValidate>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="tu@correo.com"
              className={`${baseInput} ${invalid.email ? errInput : okInput}`}
              value={form.email}
              onChange={onChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              className={`${baseInput} ${invalid.password ? errInput : okInput}`}
              value={form.password}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black text-white py-2.5 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
