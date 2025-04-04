

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Users from "../../../assets/usersicon.svg";
import { FaRegClock } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../assets/Competitionimage3.png";
import rightarrow from "../../../assets/Vector.png";

const contests = [
  {
    id: 1,
    image: img1,
    title: "Startup Showdown",
    location: "IIT JAMMU, Jammu and Kashmir, J & K",
    registered: "1,068",
    daysLeft: "11 days left",
    mode: "Offline",
    streaming: "Paid",
  },
  {
    id: 2,
    image: img1,
    title: "Tech Sprint",
    location: "IIT Delhi, New Delhi",
    registered: "785",
    daysLeft: "7 days left",
    mode: "Online",
    streaming: "Paid",
  },
  {
    id: 3,
    image: img1,
    title: "Hackathon 2024",
    location: "IIT Bombay, Mumbai",
    registered: "921",
    daysLeft: "5 days left",
    mode: "Online",
    streaming: "Paid",
  },
  {
    id: 4,
    image: img1,
    title: "Coding Challenge",
    location: "IIT Kanpur, UP",
    registered: "850",
    daysLeft: "3 days left",
    mode: "Offline",
    streaming: "Free",
  },
];

const CompetitionSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disabling default arrows to use custom ones
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 921,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  const totalSlides = contests.length - 3; // Adjusted for dynamic slide count

  return (
    <div className="bg-gradient-to-r from-[#f8f8ff] to-[#fcfcfc] p-10 rounded-lg relative">
      {/* Left Section */}
      <div className="flex flex-col lg:flex-row lg:mt-10">
        {/* Title and Description */}
        <div className="w-full lg:w-[25%] flex flex-col items-center lg:items-start text-center lg:text-left lg:h-full">
          <h2 className="text-4xl font-semibold items-center md:items-center text-gray-900 lg:mt-7 lg:mb-4.5">
            Competitions
          </h2>
          <p className="text-gray-600 mt-3 mx-auto lg:mx-0 max-w-[300px]">
            "Check out the contests that are generating excitement among your
            peers!"
          </p>
          <div className="hidden lg:flex mt-8">
            <button className="bg-[#144D9E] text-white px-5 py-2 rounded-[20px] text-[12px] font-medium  flex items-center gap-2">
              View All
              <img src={rightarrow} alt="Arrow" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative lg:w-3/4 w-full">
          {/* Left Arrow - Hide on first slide */}
          {currentSlide > 0 && (
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-30 bg-white p-1.5  border border-blue-900 rounded-full shadow-lg transition"
            >
              <MdKeyboardArrowLeft size={32} />
            </button>
          )}

          <Slider ref={sliderRef} {...sliderSettings}>
            {contests.map((contest) => (
              <div key={contest.id}>
                <div className="bg-white shadow-lg rounded-lg p-3 h-[340px] flex flex-col  border border-blue-800 items-center w-[290px] mx-0.5">
                  <img
                    src={contest.image}
                    alt={contest.title}
                    className="rounded-lg object-cover w-[200px] h-[180px] mb-3 border border-e-blue-900"
                  />
                  <div className="w-full h-[160px] ">
                    <h3 className="text-lg font-semibold mb-4">
                      {contest.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-[14px] whitespace-nowrap ">
                      {contest.location}
                    </p>
                    <div className="flex items-center space-x-3 mt-4 text-gray-700 flex-wrap">
                      <span className="text-xs font-medium px-2 py-1 rounded-full border border-gray-300 bg-white whitespace-nowrap">
                        {contest.mode}
                      </span>
                      <span className="text-xs font-medium px-2 py-1 rounded-full border border-gray-300 bg-white whitespace-nowrap">
                        {contest.streaming}
                      </span>
                      <div className="flex items-center space-x-1">
                        <img
                          src={Users}
                          alt="Registered Users"
                          className="w-4 h-4"
                        />
                        <span className="text-sm font-medium">
                          {contest.registered} Registered
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start mt-4 text-black text-xs font-medium ">
                      <div className="flex  ml-1 items-center  space-x-1">
                        <FaRegClock size={16} />
                        <span>{contest.daysLeft}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Right Arrow - Hide on last slide */}
          {currentSlide < totalSlides && (
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-30 bg-white p-1.5 rounded-full border border-blue-900 "
            >
              <MdKeyboardArrowRight size={32} />
            </button>
          )}
        </div>
      </div>

      {/* View More Button for Smaller Screens */}
      <div className="lg:hidden flex justify-center mt-6">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-blue-700 transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default CompetitionSection;
