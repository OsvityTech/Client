import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegClock } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";
import {competitions} from "../../data/LandingPageData";
import Users from "../../assets/usersicon.svg";

/**
 * Custom arrow component for the previous button in the slider.
 * It positions the button on the left side of the slider.
 */
const CustomPrevArrow = (props) => (
  <button
    {...props}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-200"
    style={{ left: "-35px" }} // Increased negative margin
  >
    <MdKeyboardArrowLeft size={30} />
  </button>
);

/**
 * Custom arrow component for the next button in the slider.
 * It positions the button on the right side of the slider.
 */
const CustomNextArrow = (props) => (
  <button
  {...props}
  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-200
             md:right-[-20px] sm:right-[-25px] xs:right-[-10px]">
  <MdKeyboardArrowRight size={30} />
    </button>
      );

// Slider settings configuration
const sliderSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4.25,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 921,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true, // Keep arrows visible for tablet
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Hide arrows for mobile
        dots: true,
        centerMode: true,
        centerPadding: "0px"
      }
    }
  ]
};

/**
 * CompetitionCard component to display details of a single competition.
 * @param {Object} competition - The competition object containing details.
 */
const CompetitionCard = ({ competition }) => {
  return (
    <div className="p-1.5">
      <div className="max-w-[275px] mx-auto rounded-2xl overflow-hidden border border-blue-800  bg-white">
        {/* Competition Image */}
        <img src={competition.image} alt={competition.title} className="w-full h-[130px] object-cover" />

        <div className="p-3 h-[170px]">
          {/* Title and Logo */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg whitespace-nowrap">{competition.title}</h3>
              <p className="text-gray-500 text-sm">{competition.location}</p>
            </div>
            <img src={competition.image2} alt={competition.title} className="w-[84px] h-[84px] rounded-md object-cover ml-2" />
          </div>

          {/* Mode and Streaming Type */}
          <div className="flex space-x-2 mt-2  text-gray-700">
            <span className="text-xs font-medium px-4 py-1 rounded-full border border-gray-300 bg-white">{competition.mode}</span>
            <span className="text-xs font-medium px-4 py-1 rounded-full border border-gray-300 bg-white">{competition.streaming}</span>
          </div>

          {/* Registered Count and Time Left */}
          <div className="flex  items-center mt-4 text-black  text-xs font-medium">
          <div className="flex items-center space-x-1">
    <p className="text-gray-500 flex items-center text-sm ">
      <img src={Users} alt="Registered Users" className="w-4 h-4" />
    </p>
    <span>{competition.registered} Registered</span>
</div>
            <div className="flex items-center ml-3 space-x-1">
              <FaRegClock size={14} />
              <span>{competition.timeLeft}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * CompetitionSlider component that displays a list of competitions in a slider format.
 */
const CompetitionSection = () => {
  return (
    <div className="relative w-full bg-white p-6 overflow-x-hidden">
      {/* Section Header */}
      <h2 className="text-4xl font-semibold text-blue-900 mb-2 text-center">Competitions</h2>

      {/* Description and "View More" Button for Desktop */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-center mb-4 px-4">
  <p className="text-black text-sm font-light max-w-xl" 
     style={{ fontFamily: "Roboto Slab" }}>
   Explore the Competitions that are creating a buzz among your peers!
  </p>
   
  <div className="hidden min-[922px]:flex absolute right-0">
  <p className="text-[16px] font-[500] text-[#272F3A]">View more</p>
    <TbCircleArrowUpRightFilled className="w-5 h-5 text-[#414D60]" />
    
  </div>
</div>


      {/* Mobile & Tablet View */}
      <div className="mx-8"> 
        <Slider {...sliderSettings}>
          {competitions.map((competition) => (
            <CompetitionCard key={competition.id} competition={competition} />
          ))}
        </Slider>
      </div>

      {/* Mobile "View More" Button */}
      <div className="max-[921px]:flex hidden justify-center mt-6">
         <div className=" flex items-center">
                  <p className="text-[16px] font-[500] text-[#272F3A]">View more</p>
                  <TbCircleArrowUpRightFilled className="w-5 h-5 text-[#414D60]" />
         </div>
      </div>
    </div>
  );
};

export default CompetitionSection;
