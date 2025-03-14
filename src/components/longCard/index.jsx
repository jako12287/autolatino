import Toyotaimage from "../../assets/temp/toyota1.png";
const LongCard = ({
  title = "Noticias",
  header = "Titulo de seccion",
  text = "Texto de secccion",
}) => {
  return (
    <div className="flex flex-col-reverse justify-center items-center sm:flex-row p-2 bg-white rounded-2xl m-h-96 md:m-h-[382px] gap-2">
      <div className="flex flex-col justify-center flex-1 h-[50%] sm:h-auto sm:w[50%] md:px-4">
        <h3 className="title-card">
          {title}
        </h3>
        <h4 className="subtitle-card">{header}</h4>
        <p className="description-card">{text}</p>
      </div>

      <div className="flex-1 h-[50%] justify-center items-center sm:h-auto sm:w[50%] p-2">
        <img
          src={Toyotaimage}
          alt="Imagen de tarjeta"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default LongCard;


