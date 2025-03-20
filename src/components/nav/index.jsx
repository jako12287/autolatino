import { useState, useEffect } from "react";
import LogoAutolatino from "../../assets/images/icons/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { itemNav } from "../../utils";

const Nav = () => {
  

  const { pathname } = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(pathname);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

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
        <ul className="text-white text-base flex flex-col md:flex-row justify-around md:gap-8 p-4 md:p-0 md:text-sm lg:text-base cursor-pointer">
          {itemNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setActiveTab(item.path)}
              className="relative text-center hover:text-red"
            >
              <li className="mb-2.5 mt-2 hover:text-customred transition-all duration-500 hover:scale-105 inline-block ">{item.name}</li>
              {activeTab === item.path && (
                <div className="w-full h-[2px] absolute bottom-0 left-0 pt-0.5 rounded-xl bg-customred " />
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
