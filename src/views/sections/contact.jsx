import ImageBackgroud from "@/assets/temp/bgSectionContact.png";
import Logo from "@/assets/images/icons/logoTransparent.png";
import BtnContact from "@/components/btnContact";
const Contact = () => {
  return (
    <section className="h-[70vh] overflow-hidden relative">
      <div>
        <img
          src={ImageBackgroud}
          alt="Imagen de fondo de seccion"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute top-0 w-full h-full flex">
        <div className="flex-2 pl-10">
          <img
            src={Logo}
            alt="Logo autolatino"
            className="w-[80%] aspect-auto"
          />
        </div>
        <div className="flex-3 flex justify-center items-center py-10 pr-8">
          <div className="rounded-2xl bg-white-50 w-[90%] h-full flex flex-col items-center justify-between py-18">
            <h3 className="font-extrabold text-4xl text-customred">
              Enamórate
            </h3>
            <h4 className="font-bold text-2xl">pero asegúrate de que dure</h4>
            <BtnContact
              text="¡Contáctanos y elige sabiamente!"
              optionClass="max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
