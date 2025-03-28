import { dataFake } from "../../data/dataAdminBanner";
import BtnContact from "@/components/btnContact";

const BannerCarousel = () => {
  return (
    <div className="px-20 h-screen overflow-auto py-10 flex flex-col gap-7">
      <h2 className="text-center font-bold text-xl">Banner Carrusel</h2>
      <div className="flex flex-row-reverse">
        <BtnContact text="Crear Banner" optionClass=" shadow-sm shadow-black"/>
      </div>
      <table className="w-full">
        <thead className="">
          <tr className="bg-black text-white">
            <th scope="col" className="border-1">
              Imagen
            </th>
            <th scope="col" className="border-1">
              Estado
            </th>
            <th scope="col" className="border-1">
              Accion
            </th>
          </tr>
        </thead>
        <tbody className="">
          {dataFake.map((el) => (
            <tr key={el.id} className="">
              <td className="border-1 py-1 px-1">
                <img src={el.image} className="w-30" />
              </td>
              <td className={`border-1 border-black text-center ${
                el.status === "active" ? "text-green-600":"text-customred"
              }`}>
                {el.status === "active" ? "Activo" : "Desactivado"}
              </td>

              <td className="border-1 text-center cursor-pointer">⌖</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BannerCarousel;
