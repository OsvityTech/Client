import HeroButton from "../Buttons/HeroButton";

const HeroCard = () => {
  return (
    <div className="bg-transparent max-w-sm mx-auto sm:mx-0 my-6">
      <h2 className="text-2xl text-left sm:my-12 my-6 text-[#164481]">Who's using Osvity Tech?</h2>
      <div className="flex space-x-2 sm:my-12 my-6">
        <HeroButton label="Students" />
        <HeroButton label="Mentor" />
        <HeroButton label="Organization" />
      </div>
    </div>
  );
};
export default HeroCard;