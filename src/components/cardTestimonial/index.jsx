import QuotationOpen from "../../assets/images/icons/quotationOpen.png";
import QuotationClose from "../../assets/images/icons/quotationClose.png";
const CardTestimonial = ({
  name = "user",
  text = "testimonial",
  image,
  id,
}) => {
  console.log("indice", id % 2 === 0);
  return (
    <div className="overflow-hidden max-w-[300px] min-h-[400px] p-2 flex flex-col justify-between border-1 border-black-10 rounded-xl shadow-xl hover:scale-105 transition-all duration-500 md:w-[300px] md:min-h-[400px] ">
      <div className={`${id % 2 === 0 && "order-3"}`}>
        <img
          src={image}
          alt="imagen clientes testimonio"
          className="w-full object-center object-cover"
        />
      </div>
      <p className="font-medium order-2">{text}</p>
      <h3
        className={`font-medium text-customred md:text-xl ${
          id % 2 === 0 ? "order-1" : "order-3"
        }`}
      >
        {name}
      </h3>
    </div>
  );
};

export default CardTestimonial;
