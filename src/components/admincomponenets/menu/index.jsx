import { NavLink, useLocation } from "react-router-dom";
import { optionsMenu } from "../../../utils";
import Logo from "../../../assets/images/icons/logo.png";
import LogoSmall from "../../../assets/images/icons/favicon.png";
import LogoSmallGray from "../../../assets/images/icons/faviconGray.png";

const Menu = () => {

  const {pathname} = useLocation()
  
  return (
    <div className="flex flex-col justify-between h-full py-20 px-5 ">
      <div className="w-full overflow-hidden">
        <img
          src={Logo}
          alt="Logo autolatino"
          className="w-full h-full object-cover"
        />
      </div>
      {optionsMenu.map((el) => (
        <NavLink
          key={el.id}
          to={el.action}
          className={({ isActive }) =>
            ` flex items-center gap-3 transition-all duration-500 ${
              isActive
                ? "text-customred "
                : "text-gray-600 hover:scale-110  hover:text-white"
            }`
          }
        >
          <div className="w-10 h-10 border-0">
            <img
              src={el.action === pathname ? LogoSmall : LogoSmallGray}
              alt="Logo pequeno de autolatino"
              className="w-full h-full object-contain"
            />
          </div>
          {el.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
