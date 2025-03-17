const BtnContact = ({ text = "btnContact", optionClass = "" }) => {
  return (
    <div className={`${optionClass} border-2 border-amber-600 text-customred font-bold text-xl`}>{text}</div>
  );
};

export default BtnContact;
