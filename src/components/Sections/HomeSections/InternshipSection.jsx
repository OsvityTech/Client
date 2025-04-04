import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";

import Arrow from "../../../assets/arrow.svg";
import Users from "../../../assets/usersicon.svg";
import skillsicon from "../../../assets/skills.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../assets/delloite.png";
import img2 from "../../../assets/ibm.png";
import img3 from "../../../assets/wipro1.png";

const jobs = [
  {
    id: 1,
    title: "Digital Marketing",
    company: "Deloitte",
    logo: img1,
    registered: 33237,
    daysLeft: 7,
    skills: ["Leadership", "Machine Learning"],
  },
  {
    id: 2,
    title: "HR Recruiting",
    company: "IBM",
    logo: img2,
    registered: 33237,
    daysLeft: 7,
    skills: ["Leadership", "Machine Learning"],
  },
  {
    id: 3,
    title: "Talent Acquisition",
    company: "Wipro",
    logo: img3,
    registered: 33237,
    daysLeft: 7,
    skills: ["Leadership", "Machine Learning"],
  },
  {
    id: 4,
    title: "Software Engineering",
    company: "Google",
    logo: img1,
    registered: 50000,
    daysLeft: 5,
    skills: ["JavaScript", "React", "Cloud Computing"],
  },
];

const InternshipSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 420) setSlidesToShow(1);
    else if (width <= 920) setSlidesToShow(2);
    else setSlidesToShow(3);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 920,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 420,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const shouldShowArrow = (direction) => {
    const totalSlides = jobs.length;
    if (direction === "prev") return currentSlide > 0;
    if (direction === "next") return currentSlide < totalSlides - slidesToShow;
    return false;
  };

  return (
    <div className="text-center bg-gradient-to-r from-[#f8f8ff] to-[#fcfcfc]">
      <h1 className="text-3xl font-bold text-[#1e3a8a]">
        Kickstart Your Career
      </h1>

      <button className="hidden lg:flex absolute right-10 text-gray-800 bg-white px-4 py-2  rounded-full items-center gap-2 hover:bg-blue-200 text-sm">
        Browse more
        <img src={Arrow} alt="Arrow" className="h-5 rounded-full" />
      </button>
      <div className="relative flex items-center justify-center mt-2 w-full px-6">
        <p className="text-gray-600 text-lg mx-auto">
          Explore internships that match your career goals.
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative flex items-center justify-center mt-6 px-4 sm:px-6 w-full max-w-[1200px] mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className={`absolute left-[-5px] md:left-[-15px] lg:left-[-13px] bg-white shadow-xl p-2 rounded-full border border-gray-400 z-10 transition-opacity duration-300 ${
            shouldShowArrow("prev")
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <MdKeyboardArrowLeft size={35} />
        </button>

        {/* Slider */}
        <div className="w-full">
          <Slider ref={sliderRef} {...sliderSettings}>
            {jobs.map((job) => (
              <div key={job.id} className="px-2">
                <div className="relative bg-white  shadow-lg p-6 rounded-xl border border-blue-900 w-full sm:w-[350px] h-[360px] flex flex-col justify-between mx-auto">
                  {/* Save Icon */}
                  <span className="absolute top-2 right-6 bg-white rounded-full border border-blue-700 p-2 mt-36  cursor-pointer">
                    <FiHeart className="text-gray-600" size={24} />
                  </span>

                  <div>
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl font-semibold text-gray-900 leading-snug text-left max-w-[200px] whitespace-pre-wrap">
                        {(() => {
                          const words = job.title.split(" ");
                          if (words.length >= 2) {
                            return `${words[0]}\n${words[1]}`;
                          }
                          return job.title;
                        })()}
                      </h2>

                      <img
                        src={job.logo}
                        alt={job.company}
                        className="h-18 w-auto"
                      />
                    </div>

                    <div className="flex flex-col space-y-2 mt-3">
                      <p className="text-left text-gray-500 text-sm mb-10">
                        Online | Free
                      </p>
                      <div className="flex items-center gap-x-3.5 mb-3">
                        <img
                          src={Users}
                          alt="Registered Users"
                          className="w-5 h-5"
                        />
                        <span className="text-sm">
                          {job.registered} Registered
                        </span>
                      </div>
                      <div className="flex items-center gap-x-3.5 mb-3">
                        <IoTimeOutline size={20} />
                        <span className="text-sm">
                          {job.daysLeft} days left
                        </span>
                      </div>
                      <div className="flex items-center gap-x-2 mb-3">
                        <img
                          src={skillsicon}
                          alt="Skills Icon"
                          className="w-5 h-5 flex-shrink-0"
                        />
                        <div className="flex flex-wrap items-center gap-x-1">
                          <span className="text-gray-500 font-semibold text-sm whitespace-nowrap">
                            Skills:
                          </span>
                          <span className="text-gray-700 text-sm">
                            {job.skills.join(", ")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 px-4 py-1 lg:w-[240px] sm:w-[200px] mx-auto inline-block border border-[#1C4A81] bg-gradient-to-r from-gray-100 to-gray-100 text-[#1C4A81] rounded-full transition-all duration-300 ease-in-out hover:from-[#1A5276] hover:to-[#7FB3D5] hover:border-[#1A5276] hover:text-white  active:scale-95 shadow-md">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className={`absolute right-[-5px] md:right-[-15px] lg:right-[-13px] bg-white shadow-xl p-2 rounded-full border border-gray-400 z-10 transition-opacity duration-300 ${
            shouldShowArrow("next")
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <MdKeyboardArrowRight size={35} />
        </button>
      </div>

      {/* Browse More Button for Small Screens */}
      <div className="lg:hidden flex justify-center mt-8 px-4">
        <button className="text-gray-800 bg-white px-4 py-2 rounded-full items-center gap-2 hover:bg-blue-200 text-sm shadow-lg w-full max-w-[250px]">
          Browse more
          <img src={Arrow} alt="Arrow" className="h-4 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default InternshipSection;
