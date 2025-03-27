import React from "react";
import JobCarousel from "../Sliders/JobCarousel";
import Arrow from "../../assets/arrow.svg";

const JobsSection = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Jobs</h1>

      {/* Container for text and button */}
      <div className="flex items-center justify-center relative w-full max-w-5xl mx-auto mt-2 mb-6 px-4">
        {/* Centered Text */}
        <p className="text-gray-600 text-sm">
          Find the Jobs that fit your career aspirations.
        </p>

        {/* View More Button - Only Visible in Large Screens */}
        <button className="hidden lg:flex absolute right-10 lg:right-[-100px] text-gray-800 bg-white px-4 py-2 rounded-full items-center gap-2 hover:bg-blue-200 text-sm">
          View more
          <img src={Arrow} alt="Arrow" className="h-5 rounded-full" />
        </button>
      </div>

      {/* Job Carousel */}
      <JobCarousel />

      {/* View More Button - Only Visible in Small & Medium Screens */}
      <div className="flex justify-center mt-4 lg:hidden">
        <button className="text-gray-800 bg-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-200 text-sm">
          View more
          <img src={Arrow} alt="Arrow" className="h-5 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default JobsSection;
