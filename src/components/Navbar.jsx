// src/components/Navbar.jsx (fragmento clave)
import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  RiHomeLine,
  RiUserLine,
  RiLogoutBoxRLine,
  RiLoginCircleLine,
  RiUserAddLine,
  RiShoppingCartLine,
} from "react-icons/ri";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
 

const formatCurrency = (n) => Number(n).toLocaleString("es-CL");

function Navbar(){
  const { total } = useCart();
  const { token, logout } = useUser();

  const linkBase = "px-3 py-2 text-sm rounded-xl hover:bg-white/20";
  const active = ({ isActive }) => isActive ? "bg-white/20" : "bg-white/10";

  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <NavLink to="/" className="font-bold text-lg tracking-wide hover:opacity-90">
            Pizzería Mamma Mía
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <NavLink to="/" className={({isActive}) => `${linkBase} ${active({isActive})}`}>
            <RiHomeLine className="inline mr-1 align-[-2px]" aria-hidden="true" />
            Home
          </NavLink>

          {token ? (
            <>
              <NavLink to="/profile" className={({isActive}) => `${linkBase} ${active({isActive})}`}>
                <RiUserLine className="inline mr-1 align-[-2px]" aria-hidden="true" />
                Profile
              </NavLink>
              <button className={`${linkBase} bg-white/10`} onClick={logout}>
                <RiLogoutBoxRLine className="inline mr-1 align-[-2px]" aria-hidden="true" />
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={({isActive}) => `${linkBase} ${active({isActive})}`}>
                <RiLoginCircleLine className="inline mr-1 align-[-2px]" aria-hidden="true" />
                Login
              </NavLink>
              <NavLink to="/register" className={({isActive}) => `${linkBase} ${active({isActive})}`}>
                <RiUserAddLine className="inline mr-1 align-[-2px]" aria-hidden="true" />
                Register
              </NavLink>
            </>
          )}

          {/* Botón Total → /cart */}
          <Link to="/cart" className="px-3 py-2 text-sm rounded-xl bg-white text-black hover:opacity-90">
            <RiShoppingCartLine className="inline mr-1 align-[-2px]" aria-hidden="true" />
            Total: ${formatCurrency(total)}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
