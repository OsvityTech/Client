import React from "react";
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
import Meta from "../../../assets/Meta.png";
import Aditass from "../../../assets/Aditasss.png";
// import TrustUsSlider from "../../Sliders/TrustUsSlider";

// TODO : Separate the slider keep it as another section , Separate Section for trustUSection
const TrustUsSection = () => {
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

  const mobileChunks = [4, 5, 4];
  let mobileRows = [];
  let startIndex = 0;
  mobileChunks.forEach((size) => {
    mobileRows.push(logos.slice(startIndex, startIndex + size));
    startIndex += size;
  });
  return (
  <div className="w-full relative top-1">
      <div className="w-full relative bottom-10 bg-gradient-to-r from-blue-50 via-white to-blue-50 py-6">
        <div className="space-y-2 relative top-10">
          <p className="text-2xl font-semibold text-center mb-10">
            <span className="text-[#1C4A81]">Rely on us -</span> Backed by Industry Veterans
          </p>
          {/* Mobile View */}
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
                    <img src={logo} alt={`Logo ${index + 1}`} className="w-12 h-12" />
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Desktop View */}
          <div className="hidden sm:block space-y-6">
            {[...Array(Math.ceil(logos.length / 13))].map((_, groupIndex) => (
              <div key={groupIndex} className="space-y-6">
                <div className="grid grid-cols-6 gap-6 justify-center ml-20">
                  {logos.slice(groupIndex * 13, groupIndex * 13 + 6).map((logo, index) => (
                    <div
                      key={index}
                      className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md transition-transform duration-300 hover:scale-110 p-2"
                    >
                      <img src={logo} alt={`Logo ${index + 1}`} className="w-12 h-12" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-15 justify-center ml-11">
                  {logos.slice(groupIndex * 13 + 6, groupIndex * 13 + 13).map((logo, index) => (
                    <div
                      key={index}
                      className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md transition-transform duration-300 hover:scale-110 p-2"
                    >
                      <img src={logo} alt={`Logo ${index + 1}`} className="w-12 h-12" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Text inside background */}
          {/* <p className="text-blue-600 mt-2 cursor-pointer text-center ">See All Programs →</p> */}
        </div>
        <p className="text-blue-600 mt-10 cursor-pointer text-center ">See All Programs →</p>
      </div>
    </div>

  );
};

export default TrustUsSection;

