import React, { useState, useEffect } from "react";
import AiMock1 from "../../assets/img1.png";
import AiMock2 from "../../assets/img2.png";
import AiMock3 from "../../assets/AiMock3.jpg";
import AiMock4 from "../../assets/AiMock4.jpg";



const AiMockSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: "Blockchain Engineer",
      description: "Designs, develops and Secures blockchain-based...",
      image: AiMock1,
    },
    {
      title: "Embedded Systems Engineer",
      description: "Develops software for hardware integrated systems",
      image: AiMock2,
    },
    {
      title: "AI Engineer",
      description: "Develops AI-driven solutions for various applications",
      image: AiMock3,
    },
    {
      title: "Cybersecurity Expert",
      description: "Secures networks and systems from cyber threats",
      image: AiMock4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % slides.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-r from-[#f0faf7] via-white to-[#fbf2fc] py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <h3 className="font-semibold uppercase" style={{ color: "#144D9E" }}>
          AI Powered
        </h3>
        <h1 className="text-2xl md:text-3xl font-normal text-black font-roboto">
          AI-Powered Mock Tests
        </h1>

        <p className="text-gray-600">
          Master your concepts with AI-Powered full-length mock tests for 360°
          preparation!
        </p>

        {/* Make Buttons Responsive */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-3">
          {["Tech", "Management", "General"].map((category) => (
            <button
              key={category}
              className="border px-4 py-2 rounded-full border-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pagination Dots Responsive */}
        <div className="flex flex-wrap items-center justify-center md:justify-start space-x-3 pt-4">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
        </div>

        {/* VIEW MORE Button */}
        <button className="mt-4 flex items-center justify-center space-x-2 text-blue-600 font-semibold">
          <div className="relative w-6 h-6 bg-blue-600 text-white flex items-center justify-center rotate-45">
            <span className="-rotate-45">→</span>
          </div>

          <span className="text-sm text-black">VIEW MORE</span>
        </button>
      </div>

      {/* Right Section - Image Slider */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center mt-8 md:mt-0 space-y-4 md:space-x-8">
        {[0].map((offset) => {
          // Show 1 card for mobile
          if (window.innerWidth >= 1025) {
            // If screen is desktop (>=768px), show 2 cards
            return [0, 1].map((offset) => {
              const index = (currentIndex + offset) % slides.length;
              return (
                <div
                  key={index}
                  className="text-center space-y-2 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg border border-transparent hover:border-gray-300 rounded-lg p-4 w-full sm:w-1/2"
                >
                  <img
                    src={slides[index].image}
                    alt={slides[index].title}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto transition-all duration-300 ease-in-out hover:scale-105 border-2 border-transparent"
                  />
                  <p className="text-gray-500">{slides[index].description}</p>
                  <h3 className="font-semibold">{slides[index].title}</h3>
                  <a className="text-blue-400">Start Test →</a>
                </div>
              );
            });
          }
          const index = currentIndex % slides.length;
          return (
            <div
              key={index}
              className="text-center space-y-2 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg border border-transparent hover:border-gray-300 rounded-lg p-4 w-full sm:w-1/2"
            >
              <img
                src={slides[index].image}
                alt={slides[index].title}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto transition-all duration-300 ease-in-out hover:scale-105 border-2 border-transparent"
              />
              <p className="text-gray-500">{slides[index].description}</p>
              <h3 className="font-semibold">{slides[index].title}</h3>
              <a className="text-blue-400">Start Test →</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AiMockSection;
