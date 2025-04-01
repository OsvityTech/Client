import React from "react";
import JobCarousel from "../../Sliders/JobCarousel";
import Arrow from "../../../assets/arrow.svg";

const JobsSection = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Jobs</h1>

      <div className="flex items-center justify-center relative w-full max-w-5xl mx-auto mt-2 mb-6 px-4">
        <p className="text-gray-600 text-sm">
          Find the Jobs that fit your career aspirations.
        </p>

        <button className="hidden lg:flex absolute right-4 xl:right-[-100px] text-gray-800 bg-white px-4 py-2 rounded-full items-center gap-2 hover:bg-blue-200 text-sm">
          View more
          <img src={Arrow} alt="Arrow" className="h-5 rounded-full" />
        </button>
      </div>

      <JobCarousel />

      <div className="flex justify-center mt-4 max-lg:flex lg:hidden">
        <button className="text-gray-800 bg-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-200 text-sm">
          View more
          <img src={Arrow} alt="Arrow" className="h-5 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default JobsSection;
