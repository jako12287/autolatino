import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Banner1 from "../../assets/temp/banner1.png";
import Banner2 from "../../assets/temp/banner2.png";
import Banner3 from "../../assets/temp/banner3.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselBar = () => {
  const datafake = [
    {
      id: 1,
      image: Banner1,
      alt:"Imeagen de banner"
    },
    {
      id: 2,
      image: Banner2,
      alt:"Imeagen de banner"
    },
    {
      id: 3,
      image: Banner3,
      alt:"Imeagen de banner"
    },
  ];
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      className="max-h-[500px]"
    >
      {datafake.map((el) => (
        <div key={el.id}>
          <img src={el.image} alt={el.alt}/>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselBar;
