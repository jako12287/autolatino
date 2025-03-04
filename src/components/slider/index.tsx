import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "../../assets/temporalImages/banner 1.png";
import Banner2 from "../../assets/temporalImages/banner 2.png";
import Banner3 from "../../assets/temporalImages/banner 3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const imagesBanner = [Banner1, Banner2, Banner3]
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0} // Sin espacios entre imágenes
        slidesPerView={1} // Solo una imagen visible por slide
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{ width: "100%", height: "70vh" }} // Ocupar toda la pantalla
      >
        {imagesBanner.map((el, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={el}
              alt="Banner Autolatino"
              style={{ width: "100%", height: "100%", objectFit: "contain" }} // Ajustar imagen
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
