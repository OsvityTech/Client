import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const OpportunityCard = ({ title, image, author }) => {
  return (


    <div className="w-[393px] h-[400px] bg-white rounded-lg mt-[200px] ml-[100px] border border-[#164A98] - 400 relative top-[5px] left-[1px] !mt-[140px]">


      {/* Image */}

      <img src={image} alt={title} className="w-[363px] h-[282px] border border-gray-300 flex justify-center items-center rounded-[20px] overflow-hidden relative top-[20px] left-[16px]" />

      {/* Title & Author */}
      <div className="text-left w-full mt-3 px-2">

        <h3 className="absolute top-[317px] left-[16px] w-[237px] h-[36px] text-[24px] font-[400] leading-[100%] tracking-[0%] font-[Poppins] text-gray-800">
          {title}
        </h3>

        <p className="absolute top-[363px] left-[16px] w-[109px] h-[24px] text-[16px] font-[400] leading-[100%] tracking-[0%] font-[Poppins] text-gray-500">
          {author}
        </p>

      </div>


      {/* Arrow Icon */}
      <div className="absolute top-[325px] left-[300px] w-[80px] h-[80px] flex justify-end pr-2">
        <div className="w-[65px] h-[65px] border border-gray-700 rounded-full flex justify-center items-center">
          <ArrowForwardIosIcon
            className="text-gray-500 absolute top-[10px] left-[32px]"
            style={{ fontSize: "42px" }}
          />
        </div>
      </div>


    </div>
  );
};

export default OpportunityCard;