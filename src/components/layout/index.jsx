import { useLocation } from "react-router-dom";
import Nav from "../nav";
import Carousel from "../carousel";
import Footer from "../footer";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-[1400px] mx-auto md:px-0">
        {pathname === "/" && (
          <div className="hidden md:block">
            <Carousel />
          </div>
        )}
        <Nav />
        {children}
      </div>
    </main>
    <Footer/>
        </>
  );
};

export default Layout;
