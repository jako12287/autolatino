import Logo from "@/assets/images/icons/logo.png";
import { dataFake } from "../../data/dataCommunityQuestions";
const CommunityQuestions = () => {
  return (
    <div className="relative">
      <div className="min-h-[40vh] sm:min-h-[70vh] bg-primary flex justify-center items-center">
        <img
          src={Logo}
          alt="Logo autolatino"
          className="object-cover object-center opacity-30"
        />
      </div>
      <div className="border-2 border-blue-900 w-full h-full absolute top-0">
        {dataFake.map(({id, msg, name})=>(
            <div key={id} className="text-white">
                <h3>{name}</h3>
                <p>{msg}</p>
            </div>
        ))}
      </div>
    </div>
  );
};
export default CommunityQuestions;
