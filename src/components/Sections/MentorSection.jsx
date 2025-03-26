import React, { useState, useEffect } from "react";
import { mentors } from "../../data/LandingPageData";
import MentorSlider from "../Sliders/MentorSlider";
import ArrowLeft from "../../assets/ArrowLeft.png";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";

const MentorSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mentors.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const currentMentor = mentors[currentIndex];

  return (
    <div className="container mx-auto px-6 py-12 w-full sm:max-w-full">
      <h1 className="md:text-4xl text-2xl sm:text-3xl font-[400] flex md:justify-start sm:justify-center  text-[#1C4A81]  mb-2">
        Top Mentors
      </h1>
      <div className="flex md:justify-between md:items-start sm:justify-center">
        <p className="text-gray-600 md:w-[540px] mb-12 sm:w-[470px] ">
          In search of excellence? Explore the highest-rated mentors as
          recognized by the learner community.
        </p>
        <div className=" flex items-center">
          <p className="text-[16px] font-[500] text-[#272F3A]">View more</p>
          <TbCircleArrowUpRightFilled className="w-5 h-5 text-[#414D60]" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center ">
        <MentorSlider currentMentor={currentMentor} />

        <div className="sm:w-2/5 hidden rounded-lg md:grid grid-cols-3 gap-4 ">
          {mentors.map((mentor, index) => (
            <div
              className={`relative overflow-hidden rounded-xl w-[148px] h-[156px] `}
            >
              {index === currentIndex && (
                <>
                  <div className="absolute inset-0 bg-[#0A50C799]"></div>
                  <img
                    src={ArrowLeft}
                    alt="Arrow Left"
                    className="absolute inset-0 m-auto w-6 h-4"
                  />
                </>
              )}
              <img
                onClick={() => setCurrentIndex(index)}
                src={mentor.image}
                className="h-full w-full object-cover cursor-pointer"
                alt={mentor.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorSection;
