import { NavLink, useLocation } from "react-router-dom";
import { itemNav } from "../../utils";
import { useState } from "react";
import LogoAutolatino from "../../assets/images/icons/logo.png";
import LogoYoutube from "../../assets/images/icons/Logo_YouTube.png";
import Mail from "../../assets/images/icons/mail.png";

const Footer = () => {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState(pathname);
  return (
    <div className="sm:min-h-[350px] bg-black flex flex-col">
      <div className="flex-2 flex flex-col md:flex-row justify-between p-8">
        <div className="w-full flex items-center md:border-r-2 border-white-50">
          <ul className=" flex flex-col  text-white-50 cursor-pointer">
            {itemNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setActiveTab(item.path)}
                className={`hover:text-red ${
                  activeTab === item.path && "text-customred"
                }`}
              >
                <li className="mb-2.5 mt-2 hover:text-customred transition-all duration-500 hover:scale-105 inline-block ">
                  {item.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="w-full flex items-center  justify-center">
          <img
            src={LogoAutolatino}
            className="h-14 w-auto object-contain"
            alt="Logo autolatino"
          />
        </div>
        <div className="w-full flex md:border-l-2 border-white-50 text-white flex-col gap-4 justify-center pl-2 md:pl-10">
          <h3 className="text-customred font-bold">Cantacto:</h3>
          <div>
            <img
              src={LogoYoutube}
              className="w-auto object-contain"
              alt="Logo autolatino"
            />
          </div>
          <span className="flex items-center gap-1">
            <img
              src={Mail}
              className="w-auto object-contain object-center"
              alt="Logo autolatino"
            />
            <a 
            href="mailto:autolatinoguzman@gmail.com"
            rel="noopener noreferrer"
            className="hover:text-customred transition-all duration-500"
            >

            <h4>autolatinoguzman@gmail.com</h4>
            </a>
          </span>
        </div>
      </div>

      <div className="pb-8">
        <h4 className="text-white text-center">
          Diseñado y desarrollado por{" "}
          <a 
          href="https://www.jcmaker.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-customred transition-all duration-500"
          >JCMaker</a>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
