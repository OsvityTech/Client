import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ai from "../../assets/Ai.png";
import Hackthon from "../../assets/Hackthon.png";

const TechnologySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };


  const settings = {
    dots: false,
    infinite: false, // Disable infinite scroll to handle arrow visibility
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    nextArrow: currentSlide < totalSlides - 2 ? <NextArrow /> : null,
    prevArrow: currentSlide > 0 ? <PrevArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const Cards = [Hackthon, Ai, Hackthon, Ai, Hackthon, Ai];
  return (
    <>
      <div className=" relative  px-15 py-6 ">
        <Slider {...settings}>
          {Cards.map((card, idx) => (
            <div key={idx} className="px-6">
              <img
                src={card}
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
                alt={`Card ${idx + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full w-12 h-12 items-center justify-center cursor-pointer z-10"
//       onClick={onClick}
//     >
//       ❯
//     </div>
//   );
// };
// const PrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full w-12 h-12 cursor-pointer z-10"
//       onClick={onClick}
//     >
//       ❮
//     </div>
//   );
// };


const ArrowButton = ({ onClick, direction }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-200 text-black w-12 h-12 flex items-center justify-center rounded-full cursor-pointer z-10 shadow-md ${direction === "right" ? "right-[-40px]" : "left-[-40px]"
      }`}
    onClick={onClick}
  >
    {direction === "right" ? "❯" : "❮"}
  </div>
);

const NextArrow = (props) => <ArrowButton {...props} direction="right" />;
const PrevArrow = (props) => <ArrowButton {...props} direction="left" />;
export default TechnologySlider;
