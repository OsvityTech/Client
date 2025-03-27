import React, { useState, useEffect } from "react";
import JobCard from "../Cards/JobCard.jsx";
import { ChevronRight, ChevronLeft } from "lucide-react";
import jobs from "../../Data/jobs.js";

const JobCarousel = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const maxIndex = jobs.length - cardsPerView;
  const [chevronVisible, setChevronVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextSlide = () => {
    if (index < maxIndex && !isAnimating) {
      setIsAnimating(true);
      setChevronVisible(false);
      setTimeout(() => {
        setIndex((prev) => prev + 1);
        setChevronVisible(true);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (index > 0 && !isAnimating) {
      setIsAnimating(true);
      setChevronVisible(false);
      setTimeout(() => {
        setIndex((prev) => prev - 1);
        setChevronVisible(true);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="relative flex items-center justify-center mt-6 w-full ">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / cardsPerView)}%)`,
          }}
        >
          {jobs.map((job) => (
            <div key={job.id} className="w-full sm:w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-1 md:px-4 flex justify-center">
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>
      {index > 0 && (
        <button
          onClick={prevSlide}
          className={`absolute left-[-30px] md:left-[15px] bg-white shadow-xl p-3 rounded-full border-1 border-gray-400 transition-opacity duration-1000 ${
            chevronVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronLeft size={35} />
        </button>
      )}
      {index < maxIndex && (
        <button
          onClick={nextSlide}
          className={`absolute right-[-30px] md:right-[15px] bg-white shadow-xl p-3 rounded-full border-1 border-gray-400 transition-opacity duration-1000 ${
            chevronVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronRight size={35} />
        </button>
      )}
    </div>
  );
};

export default JobCarousel;