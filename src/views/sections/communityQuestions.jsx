import Logo from "@/assets/images/icons/logo.png";
import { dataFake } from "../../data/dataCommunityQuestions";
import CardMessage from "../../components/cardMessage";
import BtnContact from "../../components/btnContact";
const CommunityQuestions = () => {
  return (
    <section className="">
      <div className="min-h-[40vh] sm:min-h-[70vh] bg-primary flex justify-center items-center overflow-hidden relative">
        <img
          src={Logo}
          alt="Logo autolatino"
          className="object-cover object-center opacity-30"
        />
      
      <div className="scrollbar w-full h-full absolute top-0 overflow-hidden overflow-y-auto sm:px-10 pb-16">
        {dataFake.map(({_id, id, msg, name})=>(
            <CardMessage key={_id} id={id} msg={msg} name={name}/>
        ))}
      </div>
      <BtnContact text="¿Tienes dudas? Pregúntanos" optionClass="absolute bottom-2 border-1 border-black"/>
      </div>
    </section>
  );
};
export default CommunityQuestions;
