const Card = ({ box }) => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-card hover:bg-[#292c28] rounded-xl cursor-pointer">
      <img className="size-6" src={box.image} />
      <h2 className="text-white font-semibold">{box.title}</h2>
      <p>{box.text}</p>
    </div>
  );
};
export default Card;
