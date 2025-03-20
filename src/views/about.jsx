import Advertising from "@/components/advertising";
import Aboutimage from "@/assets/images/aboutImage.png";
const About = () => {
  return (
    <div className="flex flex-col px-12 md:px-40 font-medium md:gap-8">
      <div>
        <Advertising />
      </div>
      <>
        <div className="flex justify-center mb-10">
          <h2 className="title-view text-xl md:text-2xl">SOBRE AUTOLATINO</h2>
        </div>

        <div className="flex flex-col gap-7 md:flex-row md;justify-between">
          <div className="flex flex-col gap-7 md:gap-10  order-2 md:order-1">
            <p className="md:pr-15">
              Bienvenidos a Autolatino, el{" "}
              <a
                className="text-customred"
                href="https://www.youtube.com/@alexdeautolatino"
                rel="noopener noreferer"
                target="_blank"
              >
                canal de YouTube
              </a>{" "}
              donde Alex, un apasionado del mundo automotriz, comparte su
              experiencia y conocimiento para ayudarte a tomar decisiones
              informadas al comprar vehículos.
            </p>
            <p className="md:pr-15">
              Con una dedicación única a la reseña y asesoría, Autolatino se ha
              convertido en un recurso invaluable para los amantes de los autos
              y aquellos que buscan adquirir un nuevo vehículo.
            </p>
          </div>
          <div className="overflow-hidden order-1 w-[100%] md:order-2 md:w-[1000px]">
            <img
              src={Aboutimage}
              alt="imagen de Alex"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <p>
            En nuestro canal, encontrarás reseñas detalladas de los últimos
            modelos, comparativas entre diferentes marcas y consejos prácticos
            sobre el mantenimiento y cuidado de tu auto. Alex se esfuerza por
            ofrecer contenido honesto y objetivo, basado en pruebas de manejo
            reales y análisis exhaustivos, para que puedas sentirte seguro en
            cada compra.
          </p>
          <p>
            Además, ofrecemos asesorías personalizadas para ayudarte a encontrar
            el vehículo que mejor se adapte a tus necesidades y presupuesto.{" "}
          </p>
          <p>
            Ya sea que estés buscando un automóvil familiar, un deportivo
            emocionante o un vehículo económico, en Autolatino estamos aquí para
            guiarte en cada paso del proceso.
          </p>
          <p>
            Únete a nuestra comunidad y suscríbete para mantenerte al tanto de
            las últimas novedades del mundo automotriz. En Autolatino, tu viaje
            hacia la compra del auto perfecto comienza aquí.
          </p>
          <p>
            ¡No olvides{" "}
            <a
              className="text-customred"
              href="https://www.youtube.com/@alexdeautolatino"
              rel="noopener noreferer"
              target="_blank"
            >
              suscribirte al canal
            </a>
            para estar al tanto de todas las novedades y consejos automotrices!
            Si tienes alguna pregunta o te interesa una asesoría personalizada,
            contáctanos hoy mismo. Tu próximo vehículo está a un clic de
            distancia.
          </p>
        </div>
      </>
      <div className="">
        <Advertising />
      </div>
    </div>
  );
};

export default About;
