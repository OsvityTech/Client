import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const OpportunityCard = ({ title, image, author }) => {
  return (
    <div className=" h-[400px] bg-white  relative  !mt-[30px] ml-[-10px] overflow-hidden">
      {/* SVG Background Shape */}
      <svg
        width="650px"
        height="410px"
        viewBox="0 0 650 410"
        fill="none"
        stroke="#164A98"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 1.5C15 1.5 1.5 15 1.5 30V370C1.5 385 15 398.5 30 398.5H250C265 398.5 278.5 385 278.5 370V350C278.5 335 290 323.5 305 323.5H325C340 323.5 353.5 310 353.5 295V30C353.5 15 340 1.5 325 1.5H30ZM0.5 30C0.5 14 14 0.5 30 0.5H325C341 0.5 354.5 14 354.5 30V295C354.5 311 341 324.5 325 324.5H305C290 324.5 279.5 335 279.5 350V370C279.5 386 266 399.5 250 399.5H30C14 399.5 0.5 386 0.5 370V30Z"
          fill="black"
        />
      </svg>


      {/* Image */}
      <img src={image} alt={title} className="w-[330px] h-[262px] border border-gray-300 flex justify-center items-center rounded-[20px] overflow-hidden relative top-[18px] left-[12px]" />

      {/* Title & Author */}
      <div className="text-left w-full ">
        <h3 className="absolute top-[307px] left-[16px] w-[237px] h-[36px] text-[24px] font-[400] leading-[100%] tracking-[0%] font-[Poppins] text-gray-800">
          {title}
        </h3>
        <p className="absolute top-[360px] left-[16px] w-[109px] h-[24px] text-[18px] font-[400] leading-[100%] tracking-[0%] font-[Poppins] text-gray-600">
          {author}
        </p>
      </div>

      {/* Arrow Icon */}
      <div className="absolute top-[335px] left-[280px] w-[80px] h-[80px] flex justify-end pr-2">
        <div className="w-[65px] h-[65px] border border-[#164A98] rounded-full flex justify-center items-center hover:bg-[#164A98] hover:border-[#164A98]">
          <ArrowForwardIosIcon
            className="text-[#164A98] transition duration-300 ease-in-out hover:text-white"
            style={{ fontSize: "42px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;