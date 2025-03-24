import React from "react";
import Business from "../assets/business.svg";
import Image from "../assets/osvity_logo.svg"
import Card from "./Card";
import Search from "../assets/search_icon.svg";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-start md:items-start text-center md:text-left mt-6  rounded-xl">
      <div className="flex-1 mb-6 md:mb-0">
        <button className="hidden justify-space-between w-auto bg-white h-10 text-#002B6B flex items-center space-x-2 mb-6 border border-transparent bg-gradient-to-b from-[#FCFDFF] to-[#F0F5FF] p-[1px] rounded-2xl px-2 py-4">
          <img src={Business} alt="Business" className="h-6" />
          <p className="text-sm">For Business</p>
        </button>
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="text-left block">This application for</span>
          <span className="text-left block text-[#61B7E6] mt-2">Student</span>
        </h1>
        <div className="relative sm:w-1/2 w-full sm:my-14 my-6">
          <input
            type="text"
            placeholder="Search opportunity"
            className="border p-2 w-full md:w-full pr-10 rounded-3xl border-[#164481]"
          />
          <img
            src={Search}
            alt="Search"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-7 h-7"
          />
        </div>
        <Card />
      </div>
      <div className="my-4">
      <img src={Image} alt="Student" className=" md:h-100 sm:h-45" />
      </div>
    </section>
  );
};

export default HeroSection;
