import React, { useState, useEffect } from "react";
import BEDeveloper from "../../../assets/icons/BEDeveloper.png";
import FEDeveloper from "../../../assets/icons/FEDeveloper.png";
import UXDesigner from "../../../assets/icons/UXDesigner.png";
import ML from "../../../assets/icons/ML.png";
import IOS from "../../../assets/icons/IOS.png";
import DataAnalyst from "../../../assets/icons/DataAnalyst.png";

const AiMockSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: "Backend Developer",
      description:
        "Backend Development involves the logic, dataand other operations that are built behind the scenes to run the web servers efficiently.",
      image: BEDeveloper,
      Date: "14 November 2022",
    },
    {
      title: "Frontend Developer",
      description:
        "Frontend Development is the creation of a website that you interact with directly(client-side).",
      image: FEDeveloper,
      Date: "26 June 2020",
    },
    {
      title: "UX Designer",
      description:
        "The term user experience refers to all aspects of the interaction you have with a digital product,service, or physical product.",
      image: UXDesigner,
      Date: "6 July 2015",
    },
    {
      title: "Machine Learning",
      description:
        "Machine learning is a branch of AI that enables algorithms to uncover hidden patterns within datasets.",
      image: ML,
      Date: "26 February 2018",
    },
    {
      title: "IOS Developer",
      description:
        "An iOS developer produces applications for the iPhone,iPad and other mobile devices that use the iPhone operating system (iOS).",
      image: IOS,
      Date: "26 December 2017",
    },
    {
      title: "Data Analyst",
      description:
        "Data analytics, also known as data analysis, is a crucial component of modern business operations.",
      image: DataAnalyst,
      Date: "2 March 2016",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-r from-[#f0faf7] via-white to-[#fbf2fc] py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left pl-8">
        <h3 className="font-semibold uppercase" style={{ color: "#144D9E" }}>
          AI SUPPORTED
        </h3>
        <h1 className="text-[36px] font-normal text-black font-poppins">
          AI-Enhanced Mock Tests
        </h1>

        <p className="text-[16px] text-gray-600">
          With the help of our AI-augmented full-length mock exams, be ready to
          take your preparation 360°!
        </p>

        <button className="mt-4 flex items-center space-x-2 font-semibold">
          <div className="relative w-8 h-8 bg-[#1E4A8E] flex items-center justify-center text-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
            <span className="text-[10px] font-light rotate-340">➜</span>
          </div>
          <span className="text-sm text-black">VIEW MORE</span>
        </button>
      </div>

      <div className="w-full flex flex-col items-center pl-12">
        <div className="flex flex-wrap justify-center gap-4 mb-8 -ml-18s">
          {["Tech", "Management", "General"].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border text-black transition-all text-sm md:text-base
      border-[#0A2A5A] bg-white hover:bg-gradient-to-b hover:from-[#0A2A5A] hover:to-[#41A2E4] hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="w-[656px] h-[270px] overflow-hidden relative bg-white shadow-xl rounded-3xl border border-gray-300">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 656}px)`,
              width: `${slides.length * 656}px`,
            }}
            s
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-[656px] h-[270px] flex items-center bg-white shadow-lg rounded-lg p-6 shrink-0"
              >
                <div className="w-1/3 flex justify-center items-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[224px] h-[205px] rounded-[15px] object-cover"
                  />
                </div>

                <div className="w-2/3 pl-6 space-y-2">
                  <p className="text-gray-500 text-sm">{slide.Date}</p>
                  <h3 className="text-xl font-bold text-black">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {slide.description}
                  </p>
                  <button className="mt-4 px-5 py-2 bg-gradient-to-r from-[#4A90E2] to-[#79B8F3] text-white text-sm font-semibold rounded-full shadow-md transition">
                    START TEST
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === 3 ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiMockSection;
