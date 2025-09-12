// src/components/Navbar.jsx (fragmento clave)
import React from "react";
import { NavLink, Link } from "react-router-dom";

const formatCurrency = (n) => Number(n).toLocaleString("es-CL");

function Navbar(){
  const total = 25000; // tu valor actual
  const token = false; // como lo venías simulando

  const linkBase = "px-3 py-2 text-sm rounded-xl hover:bg-white/20";
  const active = ({ isActive }) => isActive ? "bg-white/20" : "bg-white/10";

  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍕</span>
          <NavLink to="/" className="font-bold text-lg tracking-wide hover:opacity-90">
            Pizzería Mamma Mía
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <NavLink to="/" className={({isActive}) => `${linkBase} ${active({isActive})}`}>🍕 Home</NavLink>

          {token ? (
            <>
              <NavLink to="/profile" className={({isActive}) => `${linkBase} ${active({isActive})}`}>🔓 Profile</NavLink>
              <button className={`${linkBase} bg-white/10`}>🔒 Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={({isActive}) => `${linkBase} ${active({isActive})}`}>🔐 Login</NavLink>
              <NavLink to="/register" className={({isActive}) => `${linkBase} ${active({isActive})}`}>🔐 Register</NavLink>
            </>
          )}

          {/* Botón Total → /cart */}
          <Link to="/cart" className="px-3 py-2 text-sm rounded-xl bg-white text-black hover:opacity-90">
            🛒 Total: ${formatCurrency(total)}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
