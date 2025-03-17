const BtnContact = ({ text = "btnContact", optionClass = "" }) => {
  return (
    <button
      className={`${optionClass} rounded-4xl  text-customred font-bold text-xl max-w-2xs px-6 py-3 cursor-pointer bg-white hover:bg-customred hover:text-white transition-all duration-500 hover:scale-110`}
    >
      {text}
    </button>
  );
};

export default BtnContact;
