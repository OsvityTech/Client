import React from "react";
import CountUp from "react-countup";
import img1 from "../../../assets/Amazon.png";
import Wipro from "../../../assets/Wipro.png";
import Walmart from "../../../assets/walmart.png";
import flipkart from "../../../assets/flipkart.png";
import Loreal from "../../../assets/Loreal.png";
import aisanpaints from "../../../assets/aisanpaints.png";
import Acer from "../../../assets/acer.png";
import Google from "../../../assets/Google.png";
import netflex from "../../../assets/netflex.png";
import Hp from "../../../assets/Hp.png";
import Aditass from "../../../assets/Aditasss.png";
import Hackthon from "../../../assets/Hackthon.png";
import Meta from "../../../assets/Meta.png";
import Ai from "../../../assets/Ai.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// TODO : Separate the slider keep it as another section , Separate Section for trustUSection
const TrustUsSection = () => {
  const stats = [
    { value: 21, label: "Active Users", suffix: "M+" },
    { value: 22.3, label: "Assessment", suffix: "M+" },
    { value: 130, label: "Opportunities", suffix: "K+" },
    { value: 800, label: "Brands trust us", suffix: "+" },
    { value: 42, label: "Organisations", suffix: "K+" },
    { value: 78, label: "Countries", suffix: "+" },
  ];
  const logos = [
    img1,
    Wipro,
    Acer,
    flipkart,
    Google,
    Loreal,
    aisanpaints,
    netflex,
    Hp,
    Walmart,
    Aditass,
    Meta,
    aisanpaints,
    flipkart,
    Loreal,
    aisanpaints,
    img1,
    Wipro,
    Walmart,
  ];
  const Cards = [Hackthon, Ai, Hackthon, Ai, Hackthon, Ai];
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
  const mobileChunks = [4, 5, 4];
  let mobileRows = [];
  let startIndex = 0;
  mobileChunks.forEach((size) => {
    mobileRows.push(logos.slice(startIndex, startIndex + size));
    startIndex += size;
  });
  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-[#0d47a1] to-[#6ea8dc] text-white py-6 px-4 flex flex-wrap justify-center mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/2 px-4 py-4 md:w-1/3 lg:w-1/6 flex flex-col items-center "
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl font-bold">
              <CountUp
                start={stat.value * 0.1}
                end={stat.value}
                duration={1.5}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
                useEasing={true}
                redraw={true}
              />
              {stat.suffix}
            </p>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold text-center">
        Industry veterans <span className="text-blue-600">Trust us</span>
      </h2>
      <div className="bg-gradient-to-b from-white to-blue-100 ">
        <div className="space-y-2 ">
          <div className="block sm:hidden space-y-6">
            {mobileRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid grid-cols-${mobileChunks[rowIndex]} gap-2 gap-y-2 justify-center`}
              >
                {row.map((logo, index) => (
                  <div
                    key={index}
                    className="w-18 h-18 flex items-center justify-center bg-white rounded-full shadow-md transition-transform duration-300 hover:scale-110 p-2"
                  >
                    <img
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="w-12 h-12"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="hidden sm:block space-y-6 ml-15">
            {[...Array(Math.ceil(logos.length / 13))].map((_, groupIndex) => (
              <div key={groupIndex} className="space-y-6">
                <div className="grid grid-cols-6 gap-6 justify-center">
                  {logos
                    .slice(groupIndex * 13, groupIndex * 13 + 6)
                    .map((logo, index) => (
                      <div
                        key={index}
                        className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md transition-transform duration-300 hover:scale-110 p-2"
                      >
                        <img
                          src={logo}
                          alt={`Logo ${index + 1}`}
                          className="w-12 h-12"
                        />
                      </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-6 justify-center">
                  {logos
                    .slice(groupIndex * 13 + 6, groupIndex * 13 + 13)
                    .map((logo, index) => (
                      <div
                        key={index}
                        className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md transition-transform duration-300 hover:scale-110 p-2"
                      >
                        <img
                          src={logo}
                          alt={`Logo ${index + 1}`}
                          className="w-12 h-12"
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-15 py-6 ">
        <Slider {...settings}>
          {Cards.map((card, idx) => (
            <div key={idx} className="px-6 ">
              <img
                src={card}
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
                alt={`Card ${idx + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
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
export default TrustUsSection;
