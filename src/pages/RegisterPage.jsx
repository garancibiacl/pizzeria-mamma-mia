import React, { useState } from "react";
import Header from "./Header";
import { RiUserAddLine } from "react-icons/ri";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { register } = useUser();
  const navigate = useNavigate();
  const [toast, setToast] = useState({ show: false, type: "success", text: "" });
  const [timerId, setTimerId] = useState(null);
  const [invalid, setInvalid] = useState({ email: false, password: false, confirm: false });
  const baseInput = "w-full rounded-lg border border-black/10 px-3 py-2 outline-none focus:border-black/20 focus:ring-2 focus:ring-black/10";
  const errInput = "border-red-400 focus:border-red-500 focus:ring-red-200";
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const showToast = (type, text, ms = 2500) => {
    if (timerId) clearTimeout(timerId);
    setToast({ show: true, type, text });
    const id = setTimeout(() => { setToast((t) => ({ ...t, show: false })); setTimerId(null); }, ms);
    setTimerId(id);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const emptyEmail = email.trim() === "";
    const emptyPass = password.trim() === "";
    const emptyConf = confirm.trim() === "";
    if (emptyEmail || emptyPass || emptyConf) {
      setInvalid({ email: emptyEmail, password: emptyPass, confirm: emptyConf });
      showToast("error", "Todos los campos son obligatorios.");
      return;
    }
    if (!isValidEmail(email)) {
      setInvalid((p) => ({ ...p, email: true }));
      showToast("error", "Email inválido.");
      return;
    }
    if (password.length < 6) {
      setInvalid((p) => ({ ...p, password: true }));
      showToast("error", "La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (password !== confirm) {
      setInvalid((p) => ({ ...p, confirm: true }));
      showToast("error", "Las contraseñas no coinciden.");
      return;
    }
    try {
      await register({ email, password });
      showToast("success", "Cuenta creada ✅");
      setTimeout(() => navigate("/profile"), 600);
    } catch (err) {
      showToast("error", err.message || "Error al registrar");
    }
  };

  return (
    <section className="">
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

      <div className="max-w-sm mx-auto bg-white rounded-xl border border-black/10 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Crear cuenta</h1>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="tu@correo.com"
              className={`${baseInput} ${invalid.email ? errInput : ""}`}
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
              className={`${baseInput} ${invalid.password ? errInput : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="confirm" className="text-sm font-medium">Confirmar contraseña</label>
            <input
              id="confirm"
              type="password"
              placeholder="Repite tu contraseña"
              className={`${baseInput} ${invalid.confirm ? errInput : ""}`}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          <button
            type="submit"
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
