import React from "react";

const Navbar = () => {
  const total = 25000;
  const token = false;

  const formatCurrency = (n) => n.toLocaleString("es-CL");

  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍕</span>
          <span className="font-bold text-lg">Pizzería Mamma Mía</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20">
            🍕 Home
          </button>

          {token ? (
            <>
              <button className="px-3 py-2 rounded-xl bg-white/10">🔓 Profile</button>
              <button className="px-3 py-2 rounded-xl bg-white/10">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="px-3 py-2 rounded-xl bg-white/10">🔐 Login</button>
              <button className="px-3 py-2 rounded-xl bg-white/10">🔐 Register</button>
            </>
          )}

          <button className="px-3 py-2 rounded-xl bg-white text-black">
            🛒 Total: ${formatCurrency(total)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
