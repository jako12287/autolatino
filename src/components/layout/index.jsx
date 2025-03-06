import { useLocation } from "react-router-dom";
import Nav from "../nav";
import Carousel from "../carousel";

const Layout = ({ children }) => {
  const {pathname} = useLocation()
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-[1400px] mx-auto md:px-0">
        {pathname === "/" && <Carousel/>}
        <Nav />
        {children}
      </div>
    </main>
  );
};

export default Layout;
