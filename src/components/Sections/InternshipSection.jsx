import React from "react";
import { useState, useEffect } from "react";
import { FaRegClock } from "react-icons/fa6";
import Users from "../../assets/usersicon.svg";
import { internships } from "../../data/LandingPageData";
import { FiHeart, FiArrowRight } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";

// Custom Previous Arrow
const CustomPrevArrow = (props) => (
  <button
    {...props}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-200"
    style={{ left: "-35px" }}
  >
    <MdKeyboardArrowLeft size={30} />
  </button>
);

// Custom Next Arrow
const CustomNextArrow = (props) => (
  <button
    {...props}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-200
    md:right-[-20px] sm:right-[-2px] xs:right-[-10px]"
  >
    <MdKeyboardArrowRight size={30} />
  </button>
);

// Slider Settings
const sliderSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 2, // Default for screens > 425px
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 921, // Tablet View
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 715, // Smaller Tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 425, // Mobile View (Only 1 centered card)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: true, // Center the card
        centerPadding: "0px", // Hide extra cards
      },
    },
  ],
};

// Internship Card Component
const InternshipCard = ({ internship }) => (
  <div className="w-[350px] md:w-[320px] sm:w-[260px] xs:w-[90%] max-w-xs h-[390px] rounded-xl border border-blue-800 relative bg-transparent overflow-hidden mx-auto">
    {/* Internship Image */}
    <div className="p-2">
      <img src={internship.image} alt={internship.title} className="w-full h-[240px] object-cover rounded-xl" />
    </div>

    {/* Save Icon */}
    <button className="absolute top-2 right-3 bg-white rounded-full border border-blue-700 p-2 mt-43">
      <FiHeart className="text-gray-600" size={18} />
    </button>

    {/* Internship Details */}
    <div className="p-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-sm text-gray-900 w-[150px]">{internship.title}</h3>
        <div className="text-xs text-gray-500">{internship.mode}</div>
      </div>

      <div className="mt-3 text-gray-600 text-xs">
        <div className="flex items-center space-x-1 mt-2 mb-2">
          <p className="text-gray-500 flex items-center text-sm ">
               <img src={Users} alt="Registered Users" className="w-4 h-4" />
             </p>
          <span><strong>{internship.registered}</strong> Registered</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaRegClock size={14} />
          <span><strong>{internship.timeLeft}</strong> days left</span>
        </div>
      </div>
    </div>

    {/* Arrow Button to Navigate */}
    <button className="absolute bottom-3 right-3 bg-white border border-blue-700 rounded-full p-2">
      <FiArrowRight className="text-gray-600" size={18} />
    </button>
  </div>
);

// Main Internship Component
const InternshipSection = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundStyle =
  windowWidth >= 1042
    ? {
        background: `
          radial-gradient(circle at top left, rgba(238, 234, 254, 0.8), rgba(220, 210, 255, 0.3), rgba(200, 220, 255, 0.3), rgba(255, 255, 255, 0.4)) no-repeat,
          radial-gradient(circle at top right, rgba(238, 234, 254, 0.8), rgba(220, 210, 255, 0.5), rgba(200, 220, 255, 0.3), rgba(255, 255, 255, 0.5)) no-repeat,
          radial-gradient(circle at bottom left, rgba(216, 247, 238, 0.8), rgba(184, 230, 204, 0.5), rgba(255, 255, 255, 0.3)) no-repeat,
          radial-gradient(circle at bottom right, rgba(238, 234, 254, 0.8), rgba(220, 210, 255, 0.3), rgba(200, 220, 255, 0.3), rgba(255, 255, 255, 0.4)) no-repeat,
          rgba(255, 255, 255, 0.5) /* Transparent base background */
        `,
        backgroundSize: "20% 50%, 25% 50%, 23% 40%, 24.3% 40%, 100% 100%",
        backgroundPosition: "top left, top right, bottom left, bottom right, center",
        backdropFilter: "blur(100px)", // Moderate blur for a smooth effect
        // maskImage: "radial-gradient(circle, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0) 100%)",
        // webkitMaskImage: "radial-gradient(circle, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0) 100%)"
      }
    : { background: "white" };

  return (
    <div className="w-full p-8 flex flex-col" style={backgroundStyle}>
      {/* Heading Section */}
      {/* Section Header */}
           <h2 className="text-4xl font-semibold text-blue-900 mb-4 text-center">Internships</h2>
           {/* Description and "View More" Button for Desktop */}
           <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-center mb-6 px-4">
       <p className="text-black text-sm font-light max-w-xl" 
          style={{ fontFamily: "Roboto Slab" }}>
       Find the Internships that fits your career aspirations.
       </p>
       <div className="hidden min-[922px]:flex absolute right-0 mb-10">
       <p className="text-[16px] font-[500] text-[#272F3A]">View more</p>
         <TbCircleArrowUpRightFilled className="w-5 h-5 text-[#414D60]" />
         
       </div>
     </div>

      {/* Mobile & Tablet View */}
      <div className="lg:hidden w-full px-4">
        {/* Internship Slider */}
        <Slider {...sliderSettings}>
          {internships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </Slider>

    {/* View More Button (for mobile and tabs) */}
        <div className="max-[921px]:flex hidden justify-center mt-6">
        <div className="flex items-center">
         <p className="text-[16px] font-[500] text-[#272F3A]">View more</p>
         <TbCircleArrowUpRightFilled className="w-5 h-5 text-[#414D60]" />
        </div>
       </div>
       </div>


      {/* Desktop View with Cards */}
      <div className="hidden lg:flex flex-col items-center space-y-6">
        <div className="flex space-x-6 gap-2.5">
          {internships.slice(0, 3).map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
        <div className="flex space-x-6 gap-2.5">
          {internships.slice(3, 5).map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipSection;
