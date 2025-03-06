import { useState } from "react";
import LogoAutolatino from "../../assets/images/icons/logo.png";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const itemNav = [
    { name: "INICIO", path: "/" },
    { name: "SOBRE AUTOLATINO", path: "/about" },
    { name: "ASESORÍA PERSONAL", path: "/personal-advice" },
    { name: "TIENDA", path: "/store" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(""); // Estado para la pestaña activa

  return (
    <nav className="w-full h-30 flex items-center justify-between px-4 md:px-2 lg:px-35 py-2 bg-primary">
      <div className="flex">
        <img
          src={LogoAutolatino}
          className="h-14 w-auto object-contain"
          alt="Logo autolatino"
        />
      </div>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div
        className={`absolute top-20 left-0 w-full bg-primary md:static md:w-auto md:flex ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-white text-base flex flex-col md:flex-row justify-around md:gap-8 p-4 md:p-0 custom-text-14">
          {itemNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setActiveTab(item.path)}
              className="relative text-center hover:text-red"
            >
              <li className="mb-2.5 mt-2 hover:text-customred">{item.name}</li>
              {activeTab === item.path && (
                <div className="w-full h-[2px] absolute bottom-0 left-0 pt-0.5 rounded-xl bg-customred" />
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
