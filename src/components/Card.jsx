const Card = () => {
  return (
    <div className="bg-transparent max-w-sm mx-auto md:mx-0 my-6">
      <h2 className="text-xl text-left font-bold sm:my-12 my-6 text-[#164481]">Who's using Osvity Tech?</h2>
      <div className="flex space-x-2 sm:my-12 my-6">
        <button className="border border-[#61B7E6] rounded-full px-4 py-2 text-[#164481]">Students</button>
        <button className="border border-[#61B7E6] rounded-full px-4 py-2 text-[#164481]">Mentor</button>
        <button className="border border-[#61B7E6] rounded-full px-4 py-2 text-[#164481]">Organization</button>
      </div>
    </div>
  );
};
export default Card;