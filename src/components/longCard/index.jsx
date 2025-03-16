const LongCard = ({
  title = "Noticias",
  header = "Título de sección",
  text = "Texto de sección",
  image,
  small = false,
}) => {
  return (
    <div
      className={`flex justify-center items-center p-2 bg-white rounded-2xl m-h-96 md:m-h-[382px] gap-2 overflow-hidden 
        ${small ? "flex-col-reverse" : "flex-col-reverse sm:flex-row"}
      `}
    >
      <div
        className={`flex flex-col justify-center flex-1 
          ${small ? "h-[50%]" : "h-[50%] sm:h-auto sm:w-[50%]"} 
          md:px-4
        `}
      >
        <h3 className="title-card">{title}</h3>
        <h4 className="subtitle-card">{header}</h4>
        <p className="description-card">{text}</p>
      </div>

      <div
        className={`flex-1 justify-center items-center p-2 
          ${small ? "h-[50%]" : "h-[50%] sm:h-auto sm:w-[50%]"}
        `}
      >
        <img
          src={image}
          alt="Imagen de tarjeta"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default LongCard;
