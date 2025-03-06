import Nav from "../nav";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-[1400px] mx-auto md:px-0">
        <Nav />
        {children}
      </div>
    </main>
  );
};

export default Layout;
