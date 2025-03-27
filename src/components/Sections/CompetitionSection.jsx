import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegClock } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";

// Import images (update paths as needed)
import img1 from "../../assets/Competitionimage1.png";
import img2 from "../../assets/Competitionimage2.png";
import img3 from "../../assets/Competitionimage3.png";
import img4 from "../../assets/Competitionimage4.png";
import img5 from "../../assets/Competitionimage5.png";

import log1 from "../../assets/CompetitionLogo1.png";
import log2 from "../../assets/CompetitionLogo2.png";
import log3 from "../../assets/CompetitionLogo3.png";
import log4 from "../../assets/CompetitionLogo4.png";
import log5 from "../../assets/CompetitionLogo2.png";

// Competition data array
const competitions = [
  { id: 1, title: "Bridgeathon 2.0", location: "IIT JAMMU", mode: "Offline", streaming: "Paid", registered: "1,000+", timeLeft: "6 days left", image: img1, image2: log1 },
  { id: 2, title: "Journique", location: "Hansraj College", mode: "Offline", streaming: "Paid", registered: "1,000+", timeLeft: "6 days left", image: img2, image2: log2 },
  { id: 3, title: "Startup Showdown", location: "IIT Patna", mode: "Offline", streaming: "Paid", registered: "1,000+", timeLeft: "6 days left", image: img3, image2: log3 },
  { id: 4, title: "Bizmind", location: "Maharaja Agrasen", mode: "Offline", streaming: "Paid", registered: "1,000+", timeLeft: "6 days left", image: img4, image2: log4 },
  { id: 5, title: "Zakir Fest", location: "Zakir Hussain College", mode: "Offline", streaming: "Paid", registered: "1,000+", timeLeft: "6 days left", image: img5, image2: log5 },
];

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
    <div className="p-2">
      <div className="max-w-[275px] mx-auto rounded-lg overflow-hidden border shadow-md bg-white">
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
          <div className="flex space-x-2 mt-2">
            <span className="text-xs font-medium px-4 py-1 rounded-full border border-gray-300 bg-gray-100">{competition.mode}</span>
            <span className="text-xs font-medium px-4 py-1 rounded-full border border-gray-300 bg-gray-100">{competition.streaming}</span>
          </div>

          {/* Registered Count and Time Left */}
          <div className="flex justify-between items-center mt-4 text-gray-600 text-xs">
            <div className="flex items-center space-x-1">
              <IoPersonOutline size={14} />
              <span>{competition.registered} Registered</span>
            </div>
            <div className="flex items-center space-x-1">
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
   
  <div className="hidden lg:flex absolute right-0">
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
      <div className="md:hidden flex justify-center mt-6">
         <div className=" flex items-center">
                  <p className="text-[16px] font-[500] text-[#272F3A]">View more</p>
                  <TbCircleArrowUpRightFilled className="w-5 h-5 text-[#414D60]" />
         </div>
      </div>
    </div>
  );
};

export default CompetitionSection;
