const CardMessage = ({id, name, msg }) => {
  return (
    <div
      className={`px-8 py-3 rounded-2xl border-2 ${
        !id ? "border-customred" : "border-amber-400"
      } sm:w-[65vw] ${
        !id && "justify-self-end"
      } bg-white mt-16 flex flex-col gap-4`}
    >
      <h3 className="font-bold">{name}</h3>
      <p>{msg}</p>
    </div>
  );
};

export default CardMessage;
