
const PracticeInterviewCard = (props) => {
  const { Details } = props;
  const {
    imagePath,
    heading,
    paragraph1,
    spanEl,
    paragraph2,
    altName,
    image2,
    image3,
  } = Details;

  return (
    <div
      className={`md:ml-[90px] relative md:mb-[30px] lg:mb-[0px] md:w-[370px] md:h-[220px] sm:w-[370px] sm:h-[220px] mt-[20px] lg:w-[695px] lg:h-[388px] lg:ml-[20px] p-6 rounded-xl shadow-lg flex flex-row`}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className="absolute flex flex-col">
        <h2 className="lg:w-[319px] sm:text-[12px] sm:pl-[15px] lg:text-[25px] font-[700] lg:pl-[26px] lg:pt-[10px] lg:pb-[20px]  lg:h-[27px]">
          {heading}
        </h2>
        <p className="sm:text-[8px] sm:w-[143px] sm:pl-[15px] lg:text-[14px] font-[Roboto Slab] font-[600] text-gray-800 mt-2  lg:pl-[26px] md:pt-[10px] lg:w-[273px] lg:h-[91px]">
          {paragraph1}
        </p>
        <p className="sm:text-[8px] sm:pl-[15px] lg:text-[14px] font-[Roboto Slab] font-[600]  lg:pl-[26px] lg:pt-[10px] md:pt-[10px]">
          {spanEl}
        </p>
        <p className="sm:text-[8px] sm:w-[143px] sm:pl-[15px] lg:text-[14px] font-[Roboto Slab] font-[600] lg:pl-[26px] lg:pt-[10px] lg:h-[82px] lg:w-[175px] text-gray-800 md:pt-[10px]">
          {paragraph2}
        </p>
        <button className="sm:h-[25px] sm:w-[90px] sm:text-[12px] sm:mt-[20px]  sm:ml-[10px] lg:mt-[45px] lg:h-[33px] lg:w-[111px] flex sm:flex-row sm:justify-center items-center lg:ml-[26px] px-4 py-2 bg-blue-600 text-white rounded-[22px] shadow-md hover:bg-blue-700">
          Start Now
        </button>
      </div>
      <div className="flex-1 flex self-center">
        <img
          src={image2}
          alt={altName}
          className="absolute sm:h-[125px] sm:w-[176px] rounded-lg bg-cover sm:left-[176px] sm:top-[66px] lg:left-[285px] lg:top-[77px] lg:h-[299px] lg:w-[392px]"
        />

        <div className="flex flex-row justify-center items-center sm:top-[6px] sm:left-[290px] sm:h-[30px] sm:w-[30px] lg:h-[55px] lg:w-[55px] absolute lg:top-[8px] lg:left-[584px] bg-white p-2 rounded-full shadow-md">
          <img
            src={image3}
            className="lg:h-[22.5px] lg:w-[22.5px] sm:h-[20px] sm:w-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PracticeInterviewCard;
