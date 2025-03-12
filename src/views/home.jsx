import Advertising from "../components/advertising";
import LongCard from "../components/longCard";
import TopLabel from "../components/topLabel";

const dataFake = [
  {
    id: 1,
    title: "Noticias",
    header:
      "Toyota lanza su primer vehículo autónomo de energía infinita, el Toyota Infinity",
    text: "Toyota revoluciona la industria automotriz con el lanzamiento del Toyota Infinity, el primer automóvil completamente autónomo que utiliza energía renovable continua, eliminando la necesidad de recargas y reduciendo a cero las emisiones. ",
  },
];

const Home = () => {
  return (
    <div className="h-full text-primary bg-white">
      <Advertising />
      <TopLabel title="Blog" />
      <br />
      <LongCard
        header={dataFake[0].header}
        title={dataFake[0].title}
        text={dataFake[0].text}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
