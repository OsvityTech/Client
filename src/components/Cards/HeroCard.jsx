import HeroButton from "../Buttons/HeroButton";

const HeroCard = () => {
  return (
    // <div className="bg-transparent max-w-sm mx-auto sm:mx-0 my-6">
    <div className="bg-transparent max-w-4xl mx-auto sm:mx-0 my-6">
  <h2 className="text-3xl lg:text-4xl w-full whitespace-nowrap text-left sm:my-12 my-6 text-[#164481]">
    Who's using Osvity Tech?
  </h2>
  <div className="flex lg:flex-nowrap gap-x-10 sm:my-12 my-6">
    <button className="border border-[#61B7E6] rounded-full px-4 py-2 text-[#164481] text-lg lg:text-2xl whitespace-nowrap lg:w-[200px]">
      Students
    </button>
    <button className="border border-[#61B7E6] rounded-full px-4 py-2 text-[#164481] text-lg lg:text-2xl whitespace-nowrap lg:w-[200px]">
      Mentor
    </button>
    <button className="border border-[#61B7E6] rounded-full px-4 py-2 text-[#164481] text-lg lg:text-2xl whitespace-nowrap lg:w-[200px]">
      Organization
    </button>
  </div>
</div>

  );
};
export default HeroCard;