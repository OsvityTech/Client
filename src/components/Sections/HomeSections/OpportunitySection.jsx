import React from "react";
import Quizzes from "../../../assets/Quizzes.png";
import scholarships from "../../../assets/scholarships.png";
import Hackthons from "../../../assets/Hackthons.png";
import CollegeFestival from "../../../assets/CollegeFestival.png";
import TelegramIcon from '@mui/icons-material/Telegram';
import Groups2Icon from '@mui/icons-material/Groups2';
import BarChartIcon from '@mui/icons-material/BarChart';
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";



const OpportunitySection = () => {
    const opportunities = [
        {
            title: "Quizzes",
            description:
                "Test your knowledge, improve your skills, and compete with peers through engaging quizzes. Stay sharp and confident!",
            image: Quizzes,
        },
        {
            title: "Hackathons",
            description:
                "Team up, solve real-world problems, and showcase your creativity in intense coding challenges.",
            image: Hackthons,
        },
        {
            title: "ScholarShips",
            description:
                "Test your knowledge, improve your skills, and compete with peers through engaging quizzes. Stay sharp and confident!",
            image: scholarships,
        },
        {
            title: "College Festival",
            description:
                "Team up, solve real-world problems, and showcase your creativity in intense coding challenges.",
            image: CollegeFestival,
        },
    ];

    return (
        <div
            className="w-full min-h-[627px]  mx-auto py-12 flex flex-col gap-6 "
        >
            {/* Heading Section */}
            <h2
                className=" text-[36px] font-[400] flex items-center justify-center font-poppins text-gray-800 mx-auto"
            >
                Level Up Your Journey with{" "}
                <span className="text-[#134CA0]">These Opportunities!</span>

            </h2>

            <p
                className="w-[926px] h-[24px] text-[16px] font-[400] leading-[100%] tracking-[0%] text-center flex items-center justify-center font-poppins text-[#2D2D2D] mx-auto"
            >
                Discover exciting avenues to showcase your skills, learn, and grow.
            </p>


            {/* Category Tags & Explore Button */}
            <div className="group w-full h-[80px] bg-white shadow-md rounded-lg p-4 border border-gray-200 mx-auto">
                <div className="flex justify-between items-center h-full">

                    {/* Left-aligned Tags */}
                    <div className="flex flex-wrap items-center gap-6">
                        <span className="bg-[#FFEBCB] text-black px-[12px] py-[12px] text-[14px] font-medium rounded-[8px] h-[45px] flex items-center w-[185px]">
                            <Groups2Icon className="mr-2 text-black" />
                            Skill-Based Matches
                        </span>

                        <span className="bg-[#E8E2FF] text-black px-[12px] py-[12px] text-[14px] font-medium rounded-[8px] h-[45px] flex items-center w-[185px]">
                            <BarChartIcon className="mr-2 text-black" />
                            Growth & Rewards
                        </span>

                        <span className="bg-[#C8FAEA] text-black px-[12px] py-[12px] text-[14px] font-medium rounded-[8px] h-[45px] flex items-center w-[180px]">
                        <LightbulbOutlinedIcon className="mr-2 text-black" />
                        Passion-Driven
                        </span>
                    </div>

                    {/* Button */}
                    <button className="w-[140px] h-[36px] rounded-[6px] px-[12px] py-[6px] flex items-center gap-[9px] border transition-colors duration-200 
            text-[#164A98] border-[#164A98] bg-white
            group-hover:bg-[#164A98] group-hover:text-white group-hover:border-[#164A98]">
                       
                        <TelegramIcon
                            className="mr-1 w-4 h-4 text-white bg-[#164A98] rounded-full p-1 transition-colors duration-200 
               hover:bg-white hover:text-[#164A98] border border-[#164A98]  group-hover:bg-white group-hover:text-[#164A98]"
                        />



                        <span>Explore All</span>
                    </button>

                </div>
            </div>





            <div className="flex justify-center gap-8">
                {/* Left Side Cards */}
                <div className="flex flex-col gap-8">
                    {opportunities.slice(0, 2).map((item, index) => (
                        <div
                            key={index}
                            className="group w-[520px] h-[140px] bg-white shadow-md rounded-lg p-6 flex items-center justify-between gap-2 border border-gray-200 transition-colors duration-300 hover:bg-[#61B7E6]"
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-black w-[400px] h-[52px] font-[Poppins] font-normal text-[16px] leading-[184%] tracking-[0%] flex items-center transition-colors duration-300 group-hover:text-white">
                                    {item.description}
                                </p>

                            </div>
                            {/* Image with Round White Background (100x100) */}
                            <div className="bg-white w-[100px] h-[100px] rounded-full flex justify-center items-center">
                                <img src={item.image} alt={item.title} className="w-20 h-20" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side Cards */}
                <div className="flex flex-col gap-8">
                    {opportunities.slice(2, 4).map((item, index) => (
                        <div
                            key={index}
                            className="group w-[600px] h-[140px] bg-white shadow-md rounded-lg p-6 flex items-center justify-between gap-2 border border-gray-200 transition-colors duration-300 hover:bg-[#61B7E6]"
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 w-[400px] h-[52px] font-[Poppins] font-normal text-[16px] leading-[184%] tracking-[0%] flex items-center transition-colors duration-300 group-hover:text-white">
                                    {item.description}
                                </p>
                            </div>
                            {/* Image with Round White Background (100x100) */}
                            <div className="bg-white w-[100px] h-[100px] rounded-full flex justify-center items-center">
                                <img src={item.image} alt={item.title} className="w-20 h-20" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>








        </div>
    );
};

export default OpportunitySection;
