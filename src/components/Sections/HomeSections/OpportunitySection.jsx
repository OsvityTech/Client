import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { FaFileImport, FaFilePrescription } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import RightOpportunityImg1 from "../../../assets/RightOpportunityImg1.png";
import RightOpportunityImg2 from "../../../assets/RightOpportunityImg2.png";
import RightOpportunityImg3 from "../../../assets/RightOpportunityImg3.png";
import RightOpportunityImg4 from "../../../assets/RightOpportunityImg4.png";

const OpportunitySection = () => {
  return (
    <div
      className="flex flex-col justify-between gap-[47px]  
        sm:flex-col  sm:gap-y-[72px] sm:items-center sm:justify-center
        lg:justify-between  py-[43px] xxl:p-[43px_100px] md:flex-col lg:flex-row w-full"
    >
      <div className="w-[350px] lg:max-w-md sm:max-w-[800px] ml-2.5 flex flex-col  sm:flex-col  sm:items-center lg:items-start  ">
        <div className="max-w-md sm:w-[447px] ">
          <h2
            className="text-[25px] font-bold pt-0 sm:text-[32px] "
            style={{ color: "#1C4A81" }}
          >
            Pick The Right Opportunity!
          </h2>
        </div>

        <div className=" pt-[13px] ">
          <p className="text-gray-600 mt-2 text-[14px] sm:text-[14px] lg:text-[16px] w-[333px] sm:text-center justify-center lg:text-start">
            Discover opportunities that align with your skills and passions!
          </p>
        </div>

        <div className=" space-y-3 flex flex-col sm:w-[700px] sm:flex-row lg:max-w-md lg:flex-col  justify-between mt-[34px]">
          <div className="flex items-center space-x-3 sm:w-[217px] sm:h-[50px]">
            <div className="w-[53px] h-[50px] bg-pink-200 flex justify-center items-center rounded-full">
              <HiUserGroup
                style={{ color: "#FF3093" }}
                className="w-[25px] h-[17px]"
              />
            </div>
            <span
              className="text-[14px] font-semibold"
              style={{ color: "#164481" }}
            >
              Skill-Based Matches
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:w-[202px] sm:h-[50px]">
            <div className="w-[53px] h-[50px] bg-blue-200 flex justify-center items-center rounded-full">
              <FaFileImport
                style={{ color: "#0A50C7" }}
                className="w-[17px] h-[17px] sm:w-[18px] sm:h-[18px]"
              />
            </div>
            <span
              className="text-blue-900 font-semibold"
              style={{ color: "#164481" }}
            >
              Growth & Rewards
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:w-[217px] sm:h-[50px] ">
            <div className="w-[53px] h-[50px] bg-green-200 flex justify-center items-center rounded-full">
              <FaFilePrescription
                style={{ color: "#0C9066" }}
                className="w-5 h-5 sm:w-[15px] sm:h-5"
              />
            </div>
            <span
              className="text-blue-900 font-semibold"
              style={{ color: "#164481" }}
            >
              Passion-Driven
            </span>
          </div>
        </div>

        <button
          style={{ backgroundColor: "#144D9E" }}
          className="mt-[38px] text-white rounded-full flex w-[161px] h-[41px]  transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          <p className="px-[27px] py-2">Explore all</p>
          <div
            className="w-[32px] h-[32px] rounded-full mt-[4px] mr-[2px] flex justify-center items-center"
            style={{ backgroundColor: "#639AF8", color: "#FFFFFF" }}
          >
            <LuArrowUpRight style={{ color: "#FFFFFF" }} className="h-5 w-4" />
          </div>
        </button>
      </div>
      {/* TODO : Reduce the height width of each card here by 10% */}
      <div className="flex flex-col sm:flex-col w-[325px] h-[1484px] gap-y-12 sm:w-[572px] sm:h-[550px] lg:w-[682px] lg:h-[570px] sm:gap-y-[30px] sm:gap-[30px] rounded-lg sm:justify-center ">
        <div className=" flex flex-col gap-y-12 lg:flex-row  lg:w-[682px] lg:h-[270px] justify-between sm:flex-row sm:gap-[30px]">
          <div className="w-[323px] h-[338px] sm:w-[250px] sm:h-[270px]  lg:w-[300px] lg:h-[270px] rounded-lg bg-[#FFCBE1]   transition-transform duration-300 hover:scale-105 shadow-lg">
            <h1 className="pt-[25px] text-center font-medium text-3xl ">
              Quizzes
            </h1>
            <img
              src={RightOpportunityImg1}
              alt="QuizzesImg"
              className="pt-[111px] rounded-l-lg sm:pt-[43px]"
            />
          </div>

          <div className="w-[323px] h-[338px] lg:w-[352px] lg:h-[270px] sm:w-[302px] sm:h-[270px]    rounded-lg bg-[#FEC5BB]  transition-transform duration-300 hover:scale-105 shadow-lg">
            <h1 className="pt-[25px] text-center font-medium text-3xl ">
              Hackathons
            </h1>
            <img
              src={RightOpportunityImg2}
              alt="HackathonsImage"
              className="sm:w-[300px] sm:h-[209px] rounded-l-lg pt-[44px] "
            />
          </div>
        </div>
        <div className=" flex flex-col gap-y-12 sm:flex-row lg:flex-row  lg:w-[682px] lg:h-[270px] justify-between sm:gap-[30px] ">
          <div className="w-[323px] h-[338px] lg:w-[352px] lg:h-[270px]  rounded-lg bg-[#DBCCEB] sm:w-[302px] sm:h-[270px]  transition-transform duration-300 hover:scale-105 shadow-lg">
            <h1 className="pt-[25px] text-center font-medium text-3xl ">
              Scholarships
            </h1>
            <img
              src={RightOpportunityImg3}
              alt="Scholarships"
              className="pt-[76px] rounded-l-lg sm:pt-[9px]"
            />
          </div>
          <div className="w-[323px] h-[338px] lg:w-[300px] lg:h-[270px] rounded-lg bg-[#BCD8ED]  sm:w-[250px] sm:h-[270px]   transition-transform duration-300 hover:scale-105 shadow-lg">
            <h1 className="pt-[25px] text-center font-medium text-3xl ">
              {" "}
              CollegeFestival
            </h1>
            <img
              src={RightOpportunityImg4}
              alt="CollegeFestival_Image"
              className="pt-[116px] sm:pt-[49px] rounded-l-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitySection;
