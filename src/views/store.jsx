import Advertising from "@/components/advertising";
const Store = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <Advertising />
      <div className="flex flex-col items-center justify-between flex-1 px-10 sm:p-20 md:p-30 text-3xl">
        <h2 className="text-center mb-10 sm:mb-0">En Autolatino, la tienda también hace parte de la familia.</h2>

        <p className="text-center text-2xl">
          Se está trabajando para traer lo mejor en accesorios y curiosidades,
          pensados para quienes aman meterle mano a la nave y salir a rodar.
          Pronto disponible… quédense atentos, familia.
        </p>
      </div>
      <Advertising />
    </div>
  );
};

export default Store;
