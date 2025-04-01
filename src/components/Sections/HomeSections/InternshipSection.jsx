import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { internships } from "../../../data/LandingPageData";
import { FiHeart, FiArrowRight } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";

const CustomPrevArrow = (props) => (
  <button
    {...props}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-200"
    style={{ left: "-35px" }}
  >
    <MdKeyboardArrowLeft size={30} />
  </button>
);

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
      breakpoint: 425, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: true, 
        centerPadding: "0px", 
      },
    },
  ],
};

const InternshipCard = ({ internship }) => (
  <div className="w-[350px] md:w-[320px] sm:w-[260px] xs:w-[90%] max-w-xs h-[390px] rounded-xl border border-blue-800 relative bg-transparent overflow-hidden mx-auto">
    <div className="p-2">
      <img src={internship.image} alt={internship.title} className="w-full h-[240px] object-cover rounded-xl" />
    </div>

    <button className="absolute top-2 right-3 bg-white rounded-full p-2 mt-43">
      <FiHeart className="text-gray-600" size={18} />
    </button>

    <div className="p-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-sm text-gray-900 w-[150px]">{internship.title}</h3>
        <div className="text-xs text-gray-500">{internship.mode}</div>
      </div>

      <div className="mt-3 text-gray-600 text-xs">
        <div className="flex items-center space-x-1 mt-2 mb-2">
          <IoPersonOutline size={14} />
          <span><strong>{internship.registered}</strong> Registered</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaRegClock size={14} />
          <span><strong>{internship.timeLeft}</strong> days left</span>
        </div>
      </div>
    </div>

    <button className="absolute bottom-3 right-3 bg-white border border-blue-950 rounded-full p-2">
      <FiArrowRight className="text-gray-600" size={18} />
    </button>
  </div>
);

const InternshipSection = () => {
  return (
    <div className="w-full bg-white p-8 flex flex-col"
    style={{
      background: window.innerWidth >= 980 ? `
          radial-gradient(circle at top left, rgba(220, 210, 255, 0.3), rgba(200, 220, 255, 0.4), rgba(255, 255, 255, 0.6)) no-repeat,
          radial-gradient(circle at top right, rgba(220, 210, 255, 0.3), rgba(200, 220, 255, 0.4), rgba(255, 255, 255, 0.6)) no-repeat,
         background: linear-gradient(to bottom right, #ffffff, #f9faff, #e8eaff, #dde7ff);
          radial-gradient(circle at bottom right, rgba(220, 210, 255, 0.3), rgba(200, 220, 255, 0.4), rgba(255, 255, 255, 0.6)) no-repeat,
          white
        ` : "white",
        backgroundSize: window.innerWidth >= 1024 ? "35% 65%, 25% 65%, 35% 35%, 35% 35%, 100% 100%" : "100% 100%",
        backgroundPosition: window.innerWidth >= 1024 ? "top left, top right, bottom left, bottom right, center" : "center",
      }}
    >
      <div className="flex justify-between items-center mb-6 relative">
        <div className="w-full text-center">
          <h2 className="text-4xl font-semibold text-blue-900 mb-2.5">Internships</h2>
          <p className="text-[#414D60] text-[16px] font-[400] leading-[100%] text-center"
            style={{ fontFamily: "Manrope", letterSpacing: "0%" }}>
            Find the Internships that fit your career aspirations.
          </p>
        </div>

        <div className="hidden lg:flex absolute right-0">
          <p className="text-[16px] font-[500] text-[#272F3A]">View more</p>
          <TbCircleArrowUpRightFilled className="w-5 h-5 text-[#414D60]" />
        </div>
      </div>

      <div className="lg:hidden w-full px-4">
        <Slider {...sliderSettings}>
          {internships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </Slider>

        <div className="md:hidden flex justify-center mt-6">
          <div className="flex items-center">
            <p className="text-[16px] font-[500] text-[#272F3A]">View more</p>
            <TbCircleArrowUpRightFilled className="w-5 h-5 text-[#414D60]" />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-center space-y-6">
        <div className="flex space-x-6 gap-5">
          {internships.slice(0, 3).map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
        <div className="flex space-x-6 gap-5">
          {internships.slice(3, 5).map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipSection;
