import CardTestimonial from "../../components/cardTestimonial";
import { data } from "../../data/dataTestimonial";
const Testimonial = () => {
  return (
    <div className="flex flex-col gap-20 mt-10">
      <h3 className="font-medium md:text-2xl text-center">
        Muchos clientes satisfechos ya han encontrado el carro perfecto
        <br />
        gracias a nuestra asesoría.
        <br /> Esto es lo que tienen para decir sobre su experiencia:
      </h3>
      <div className="flex flex-col gap-5 items-center md:flex-row md:justify-between md:px-8">
        {data.map(({ id, image, name, text }) => (
          <CardTestimonial
            key={id}
            image={image}
            name={name}
            text={text}
            id={id}
          />
        ))}
      </div>
      <h3 className="font-medium md:text-2xl text-center">
        Nuestro objetivo es que tomes una decisión informada, segura y<br/> que
        encuentres el carro ideal para ti. Con más de 4 años de <br/> experiencia, te
        acompañamos en cada paso del proceso de compra.
      </h3>
    </div>
  );
};

export default Testimonial;
