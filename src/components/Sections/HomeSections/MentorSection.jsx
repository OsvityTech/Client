// import React, { useState, useEffect } from "react";
// import { mentors } from "../../../data/LandingPageData";
// import MentorSlider from "../../Sliders/MentorSlider";
// import ArrowLeft from "../../../assets/ArrowLeft.png";
// import { TbCircleArrowUpRightFilled } from "react-icons/tb";

// const MentorSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % mentors.length);
//     }, 5000);
//     return () => clearInterval(slideInterval);
//   }, []);

//   const currentMentor = mentors[currentIndex];

//   return (
//     <div className="container mx-auto w-full max-w-full overflow-hidden px-4">
//       <h1 className="md:text-4xl text-2xl sm:text-3xl font-[400] flex md:justify-start sm:justify-center text-[#1C4A81] mb-2">
//         Top Mentors
//       </h1>
//       <div className="flex md:justify-between md:items-start sm:justify-center flex-wrap">
//         <p className="text-gray-600 md:w-[540px] sm:w-[470px] w-full mb-12">
//           In search of excellence? Explore the highest-rated mentors as
//           recognized by the learner community.
//         </p>
//         <div className="flex items-center">
//           <p className="text-[16px] font-[500] text-[#272F3A]">View more</p>
//           <TbCircleArrowUpRightFilled className="w-5 h-5 text-[#414D60]" />
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8 items-center w-full">
//         <MentorSlider currentMentor={currentMentor} />

//         <div className=" hidden md:grid grid-cols-3 max-w-full">
//           {mentors.map((mentor, index) => (
//             <div key={mentor.name} className="relative mx-4 my-1 overflow-hidden rounded-xl w-[133px] h-[140px]">
//               {index === currentIndex && (
//                 <>
//                   <div className="absolute inset-0 bg-[#0A50C799]"></div>
//                   <img src={ArrowLeft} alt="Arrow Left" className="absolute inset-0 m-auto w-6 h-4" />
//                 </>
//               )}
//               <img
//                 onClick={() => setCurrentIndex(index)}
//                 src={mentor.image}
//                 className="h-full w-full object-cover cursor-pointer"
//                 alt={mentor.name}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorSection;

import { useState } from "react";
import MentorSlider from "../../Sliders/MentorSlider";

import { mentors } from "../../../data/LandingPageData";

const MentorSection = () => {
  return (
    <div className="w-full max-w-[1440px] gap-8 mx-auto h-[757px] py-12 flex flex-col lg:flex-row items-center">
      {/* Left Side (Text) */}
      <div className="max-w-[420px] text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-4xl font-normal text-gray-900 leading-tight">
          Our leading, strong & creative team
        </h2>
        <p className="mt-4 text-gray-600 text-[16px]">
          Seeking excellence? Discover top-rated mentors, highly acclaimed by
          the learner community for their expertise and guidance.
        </p>
      </div>

      {/* Right Side (Mentor Slider for Mobile, Cards for Desktop) */}
      <div className="max-w-[1020px] w-full">
        <div className="block lg:hidden">
          <MentorSlider />
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MentorCard = ({ mentor }) => {
  const [hover, setHover] = useState(false);

  return (
    // <div
    //   className={`w-[218px] h-[252px] bg-white shadow-lg rounded-lg overflow-hidden relative
    //     ${mentor.id % 3 === 2 ? "-mt-18" : "mt-0"}`}
    //   onMouseEnter={() => setHover(true)}
    //   onMouseLeave={() => setHover(false)}
    // >
    //   <img
    //     src={mentor.image}
    //     alt={mentor.name}
    //     className={`w-full h-full object-cover transition-all duration-300 ${
    //       hover ? "brightness-50" : "brightness-100"
    //     }`}
    //   />

    //   <div
    //     className={`absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-300 text-white flex flex-col justify-center items-center transition-opacity duration-300 ${
    //       hover ? "opacity-100" : "opacity-0"
    //     }`}
    //   >
    //     <h3 className="text-sm font-bold">{mentor.name}</h3>
    //     <p className="text-xs">{mentor.role}</p>
    //     <span className="mt-1 bg-yellow-400 text-black px-2 py-1 text-xs rounded-full">
    //       ⭐ {mentor.rating}
    //     </span>
    //     <button className="mt-2 px-3 py-1 bg-white text-blue-600 text-xs rounded-lg">
    //       View Profile
    //     </button>
    //   </div>
    // </div>

    <div
      className={`w-[218px] h-[252px] bg-white shadow-lg rounded-lg overflow-hidden relative 
        ${mentor.id % 3 === 2 ? "-mt-18" : "mt-0"}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Background Image */}
      <img
        src={mentor.image}
        alt={mentor.name}
        className="w-full h-full object-cover transition-all duration-300"
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-300 opacity-0 transition-opacity duration-300 ${
          hover ? "opacity-80" : "opacity-0"
        }`}
      ></div>

      {/* Text & Content */}

      <div
        className={`absolute inset-0 flex flex-col text-white transition-opacity duration-300 
    mx-6 pt-[50%] ${hover ? "opacity-80" : "opacity-0"}`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-600">{mentor.name}</h3>
          <span className=" text-black mr-4 px-2 text-xs rounded-full">
            ⭐ {mentor.rating}
          </span>
        </div>
        <p className="text-[10px] mt-2">{mentor.description}</p>
        <button className="mt-2  py-1 text-white border w-24 text-[10px] rounded-full">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default MentorSection;
