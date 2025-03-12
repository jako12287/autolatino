import Toyotaimage from "../../assets/temp/toyota1.png";
const LongCard = ({
  title = "Noticias",
  header = "Titulo de seccion",
  text = "Texto de secccion",
}) => {
  return (
    <div className="bg-white h-[382px] w-full flex justify-between p-4 rounded-xl">
      <div className="flex flex-col justify-between w-[50%] p-2 px-5">
        <h3 className="text-customred font-bold h-[25%]">{title}</h3>
        <h4 className="h-[40%] font-extrabold">{header}</h4>
        <p className="h-full">{text}</p>
      </div>

      <div>
        <img
          src={Toyotaimage}
          alt="Imagen de tarjeta"
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default LongCard;
