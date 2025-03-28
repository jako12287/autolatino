import Menu from "../../admincomponenets/menu/index";
const Layoutadmin = ({ children }) => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex h-screen w-full max-w-[1400px] mx-auto md:px-0">
        <section className="w-1/4 bg-black shadow-2xl shadow-customred">
          <Menu />
        </section>
        <section className="bg-white w-full">{children}</section>
      </div>
    </main>
  );
};

export default Layoutadmin;
