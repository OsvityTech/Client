import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ai from "../../assets/Ai.png";
import Hackthon from "../../assets/Hackthon.png";

const TechnologySlider = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
      <div className=" relative top-20 px-15 py-6 ">
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

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      ❯
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      ❮
    </div>
  );
};
export default TechnologySlider;
