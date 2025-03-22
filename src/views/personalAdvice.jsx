import Advertising from "@/components/advertising";
import FormImage from "@/assets/images/formImage.png";
import ContactForm from "../components/contactForm";
import BtnContact from "../components/btnContact";
const PersonalAdvice = () => {
  return (
    <div className="flex flex-col px-12 md:px-40 font-medium md:gap-8">
      <div>
        <Advertising />
      </div>

      <>
        <div className="flex justify-center mb-10">
          <h2 className="title-view text-xl md:text-2xl">
            Asesoría Personalizada
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          <p>
            ¿Estás buscando el auto perfecto pero no sabes por dónde empezar?{" "}
          </p>
          <p>
            En Autolatino, te ofrecemos una asesoría personalizada para ayudarte
            a encontrar el vehículo que se ajuste a tus necesidades, estilo de
            vida y presupuesto. Con la experiencia de Alex y su conocimiento del
            mercado automotriz, recibirás recomendaciones expertas que harán tu
            proceso de compra más fácil y seguro.
          </p>
          <p>¿Cómo funciona la asesoría?</p>
        </div>

        <div className="md:px-20 my-10 md:my-0">
          <div className="flex flex-col gap-8">
            <p className="item-list list-point">
              Escuchamos tus necesidades: Cuéntanos qué estás buscando. Ya sea
              que necesites un auto familiar, uno deportivo o uno económico,
              estamos aquí para entender tus preferencias.
              <div className="separate-list" />
            </p>
            <p className="item-list list-point">
              Te recomendamos opciones: Basándonos en tu perfil, te enviaremos
              una lista de vehículos recomendados, junto con detalles clave como
              precio, características y rendimiento.
              <div className="separate-list" />
            </p>

            <p className="item-list list-point">
              Resolvemos tus dudas: Te brindamos respuestas a todas tus
              preguntas sobre financiamiento, mantenimiento y comparaciones
              entre modelos.
              <div className="separate-list" />
            </p>

            <p className="item-list list-point">
              Acompañamiento en la compra: Si lo necesitas, podemos asesorarte
              durante el proceso de negociación o compra del vehículo.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p>¿Cómo solicitar tu asesoría?</p>
          <p>
            Para comenzar tu asesoría personalizada, simplemente rellena el
            formulario a continuación o envíanos un mensaje con tus datos de
            contacto y una breve descripción de lo que estás buscando.
          </p>
          <p>
            Nos pondremos en contacto contigo lo antes posible para agendar una
            sesión.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <div className="hidden lg:flex flex-1 overflow-hidden">
            <img
              src={FormImage}
              alt="imagen del formulario de contacto"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>

        <div className="flex justify-center my-8 ">
          <button className="rounded-4xl  text-white font-bold text-xl max-w-2xs px-6 py-3 cursor-pointer shadow-md shadow-black bg-customred transition-all duration-500 hover:scale-110">
            Comenzar Asesoría
          </button>
        </div>
      </>
      <div>
        <Advertising />
      </div>
    </div>
  );
};

export default PersonalAdvice;
