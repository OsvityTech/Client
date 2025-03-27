import React, { useState } from "react";
import JobCard from "../Cards/JobCard.jsx";
import { ChevronRight, ChevronLeft } from "lucide-react";
import jobs from "../../Data/jobs.js";

const JobCarousel = () => {
  const [index, setIndex] = useState(0);
  const cardsPerView = 3;
  const maxIndex = jobs.length - cardsPerView;
  const [chevronVisible, setChevronVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

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
    <div className="relative flex items-center justify-center mt-6 w-full">
      {/* Outer Wrapper for sliding content */}
      <div className="w-full overflow-hidden">
        {/* Sliding Wrapper for Job Cards */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / cardsPerView)}%)`,
          }}
        >
          {jobs.map((job) => (
            <div key={job.id} className="w-1/3 flex-shrink-0 px-4 flex justify-center">
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>

      {/* Left Chevron with fade-out effect */}
      {index > 0 && (
        <button
          onClick={prevSlide}
          className={`absolute left-1 bg-white shadow-xl p-3 rounded-full border-1 border-gray-400 transition-opacity duration-1000 ${
            chevronVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ChevronLeft size={35} />
        </button>
      )}

      {/* Right Chevron with fade-out effect */}
      {index < maxIndex && (
        <button
          onClick={nextSlide}
          className={`absolute right-1 bg-white shadow-xl p-3 rounded-full border-1 border-gray-400 transition-opacity duration-1000 ${
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


