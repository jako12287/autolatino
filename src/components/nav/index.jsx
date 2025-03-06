import { useState } from "react";
import LogoAutolatino from "../../assets/images/icons/logo.png";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="h-30 bg-black flex items-center justify-between sm:px-4 md:px-2 lg:px-35 py-2">
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
        className={`absolute top-20 left-0 w-full bg-black md:static md:w-auto md:flex bg-red ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-white text-base flex flex-col md:flex-row justify-around md:gap-8 p-4 md:p-0 custom-text-14">
          <li className="hover:text-blue-400 text-center">INICIO</li>
          <li className="hover:text-blue-400 text-center">SOBRE AUTOLATINO</li>
          <li className="hover:text-blue-400 text-center">ASESORIA PERSONAL</li>
          <li className="hover:text-blue-400 text-center">TIENDA</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
