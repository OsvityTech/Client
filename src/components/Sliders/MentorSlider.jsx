// import React from "react";
// import { AiFillThunderbolt } from "react-icons/ai";
// import { PiSuitcaseSimpleBold } from "react-icons/pi";


// const MentorSlider = ({ currentMentor }) => {
//   return (
//     <div className="md:w-[759px] md:h-[325px] w-[333px] h-[160px] rounded-lg flex gap-6 sm:w-[679px] sm:h-[252px] ">
//       <div className="md:w-[270px] md:h-[273px] sm:w-[197px] sm:h-[212px] w-[120px] h-[160px]">
//         <img
//           src={currentMentor.image}
//           alt={currentMentor.name}
//           className="w-full h-full object-cover rounded-md"
//         />
//       </div>
//       <div className="md:w-2/3 sm:w-[468px] w-[190px] flex flex-col justify-between align-middle md:mt-8">
//         <div>
//           <div className="flex md:justify-between items-center  md:w-[87px] md:h-[19px] w-[74px] h-[16px] bg-[#1C4A81] rounded-full md:pl-0.5 md:pr-4 pl-1 md:mb-4">
//           <AiFillThunderbolt className="text-[#1C4A81] bg-violet-600 rounded-full w-3 h-3" />
//             <button className="text-white font-[500] md:text-[10px] text-[8px] ">
//               Available
//             </button>
//           </div>
//           <h2 className="sm:text-xl md:text-2xl font-semibold text-[#000000]">
//             {currentMentor.name}
//             <span className="text-yellow-500 text-lg mx-2">★</span>
//             <span className="md:text-lg text-[12px]">{currentMentor.rating}</span>
//           </h2>
//           <p className="md:mt-3 mt-1 text-[#888686] font-[500] text-sm">
//             {currentMentor.description}
//           </p>
//           <div className="flex items-center gap-2 mt-2 text-[#685A5A]">
//           <PiSuitcaseSimpleBold />
//             <span className="text-sm  font-[500]">
//               {currentMentor.experience}
//             </span>
//           </div>
//           <button className=" text-black font-[500] text-[10px] w-[111px] h-[31px] border-black border mt-4 px-6 py-2 rounded-[50px] hover:bg-blue-600 transition-all">
//             View Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorSlider;


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mentors } from "../../data/LandingPageData";


const MentorSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full">
   



      {/* Mobile View: Automatic Slider */}
      <div className="block md:hidden">
        <Slider {...settings}>
          {mentors.map((mentor, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={mentor.image} alt={mentor.name} className="w-full h-40 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">{mentor.role}</p>
                  <span className="mt-2 bg-yellow-400 text-black px-2 py-1 text-sm rounded-full">
                    ⭐ {mentor.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MentorSlider;

