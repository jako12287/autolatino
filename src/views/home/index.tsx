import images from "../../assets/Carroceria-58.jpg";
import NavBar from "../../components/navBar";
import Slider from "../../components/slider";

const Home = () => {
  return (
    <div>
      <Slider/>
      <NavBar/>
      <img src={images} />
    </div>
  );
};

export default Home;
