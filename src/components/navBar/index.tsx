import styles from "../../styles/components/navBar.module.css";
import imageLogo from "../../assets/Logo/logo.png";
import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.containerMain}>
      <div className={styles.flex1}>
        <img src={imageLogo} alt="Logo" className={styles.imageLogo} />
      </div>
      <div className={styles.flex2}>
        <ul className={styles.containerTextMenu}>
          <Link to={"/"} className={styles.link}>
            <li
              className={
                pathname === "/" ? styles.textActive : styles.textInaActive
              }
            >
              INICIO
              <span
                className={
                  pathname === "/"
                    ? styles.indicatorActive
                    : styles.indicatorInActive
                }
              />
            </li>
          </Link>
          <Link to={"/about"} className={styles.link}>
            <li
              className={
                pathname === "/about" ? styles.textActive : styles.textInaActive
              }
            >
              SOBRE AUTOLATINO{" "}
              <span
                className={
                  pathname === "/about"
                    ? styles.indicatorActive
                    : styles.indicatorInActive
                }
              />
            </li>
          </Link>
          <Link to={"/advice"} className={styles.link}>
            <li
              className={
                pathname === "/advice"
                  ? styles.textActive
                  : styles.textInaActive
              }
            >
              ASESORIA PERSONAL{" "}
              <span
                className={
                  pathname === "/advice"
                    ? styles.indicatorActive
                    : styles.indicatorInActive
                }
              />
            </li>
          </Link>
          <Link to={"/store"} className={styles.link}>
            <li
              className={
                pathname === "/store" ? styles.textActive : styles.textInaActive
              }
            >
              TIENDA{" "}
              <span
                className={
                  pathname === "/store"
                    ? styles.indicatorActive
                    : styles.indicatorInActive
                }
              />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
