import Rectangulo from "../../assets/texturesAndShapes/Rectangle.png";
const TopLabel = ({ title = "TopLabel" }) => {
  return (
    <div className="flex w-full border-b-customred border-b-4">
      <div className="h-[70px] relative hidden md:inline">
        <img
          src={Rectangulo}
          alt="Titulo de seccion"
          className="md:h-full md:object-contain"
        />

        <h2 className="w-full h-full absolute top-0 flex justify-center items-center text-xl text-white font-bold">
          {title}
        </h2>
      </div>
      <div className="h-[70px] md:hidden inline w-full inset-0">
        <h2 className="bg-customred flex items-center justify-center h-full text-xl text-white font-bold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default TopLabel;
