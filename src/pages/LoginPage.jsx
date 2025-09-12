import React, { useState } from "react";
import Header from "./Header";


function LoginPage() {
  // Campos
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Errores por input
  const [invalid, setInvalid] = useState({ email: false, password: false });

  // Toast (y timerId para auto-ocultarlo sin useEffect)
  const [toast, setToast] = useState({ show: false, type: "success", text: "" });
  const [timerId, setTimerId] = useState(null);

  const baseInput =
    "w-full rounded-lg border px-3 py-2 outline-none transition focus:ring-2";
  const okInput = "border-black/10 focus:border-black/20 focus:ring-black/10";
  const errInput = "border-red-400 focus:border-red-500 focus:ring-red-200";

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  // Muestra toast y programa su cierre sin useEffect
  const showToast = (type, text, ms = 2500) => {
    // limpia un timeout anterior si existe
    if (timerId) clearTimeout(timerId);
    setToast({ show: true, type, text });
    const id = setTimeout(() => {
      setToast((t) => ({ ...t, show: false }));
      setTimerId(null);
    }, ms);
    setTimerId(id);
  };

  function handleSubmit(e) {
    e.preventDefault();

    // Validaciones mínimas
    const emptyEmail = email.trim() === "";
    const emptyPass = password.trim() === "";

    if (emptyEmail || emptyPass) {
      setInvalid({ email: emptyEmail, password: emptyPass });
      showToast("error", "Todos los campos son obligatorios.");
      return;
    }

    if (!isValidEmail(email)) {
      setInvalid({ email: true, password: false });
      showToast("error", "Email inválido.");
      return;
    }

    if (password.length < 6) {
      setInvalid({ email: false, password: true });
      showToast("error", "La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Éxito
    setInvalid({ email: false, password: false });
    showToast("success", "Inicio de sesión exitoso ✅");
    // aquí podrías llamar a tu API
  }

  return (
    <section className="pb-5">
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

<Header />

      <div className="max-w-sm mx-auto bg-white rounded-xl border border-black/10 p-6 mt-5">
        <h1 className="text-2xl font-semibold mb-6 text-center">Iniciar sesión</h1>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="tu@correo.com"
              className={`${baseInput} ${invalid.email ? errInput : okInput}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              className={`${baseInput} ${invalid.password ? errInput : okInput}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
