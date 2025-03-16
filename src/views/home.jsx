import Advertising from "../components/advertising";
import LongCard from "../components/longCard";
import TopLabel from "../components/topLabel";
import ToyoImage from "../assets/temp/toyota1.png";
import NissanImage from "../assets/temp/nissan1.png";
import SparkImage from "../assets/temp/spark1.png";

const dataFake = [
  {
    id: 1,
    image: ToyoImage,
    title: "Noticias",
    header:
      "Toyota lanza su primer vehículo autónomo de energía infinita, el Toyota Infinity",
    text: "Toyota revoluciona la industria automotriz con el lanzamiento del Toyota Infinity, el primer automóvil completamente autónomo que utiliza energía renovable continua, eliminando la necesidad de recargas y reduciendo a cero las emisiones. ",
  },
  {
    id: 2,
    image: NissanImage,
    title: "Reseña",
    header: "Excelente opción de sedan confiable",
    text: "Este Nissan Sentra usado ofrece un rendimiento de combustible excepcional y un manejo suave. Su interior cómodo y bien mantenido lo hace ideal para el uso diario. Es un auto confiable, económico en mantenimiento y en perfectas condiciones para su año. ¡Listo para nuevos caminos!",
  },
  {
    id: 3,
    image: SparkImage,
    title: "Reseña",
    header: "Compacto y económico, ideal para la ciudad",
    text: "Este Chevrolet Spark usado es perfecto para moverse en la ciudad gracias a su tamaño compacto y su gran eficiencia de combustible. Con un interior práctico y bien cuidado, es cómodo y fácil de estacionar. Un auto confiable y económico, listo para acompañarte en tus trayectos diarios.",
  },
];

const Home = () => {
  return (
    <div className="h-full">
      <Advertising />
      <TopLabel title="Blog" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
        {dataFake.map(({ id, title, header, text, image }, index) => (
          <div
            key={id}
            className={index === 0 ? "md:col-span-2" : "col-span-1"}
          >
            <LongCard
              header={header}
              title={title}
              text={text}
              image={image}
              small={index !== 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
