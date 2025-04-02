import React from "react";
import OpportunityImg5 from "../../assets/OpportunityImg5.png";
import Codenova from "../../assets/Codenova.png";
import Medicalcoding from "../../assets/Medicalcoding.png";
import flipkartrunwayimg from "../../assets/flipkartrunwayimg.png";
import salesimg from "../../assets/salesimg.png";
import smartIndiaImg from "../../assets/smartIndiaImg.png";
import salesInternshipImg from "../../assets/salesInternshipImg.png";
import TcsCodeVitaImg from "../../assets/TcsCodeVitaImg.png";
import codersHackathonImg from "../../assets/codersHackathonImg.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedOpportunityCard from "../Cards/FeaturedOpportunityCard";

const opportunities = [
  { title: "Coding Ninja's 2025", image: OpportunityImg5, text: "Mindeniousss" },
  { title: "Code Nova for Kids", image: Codenova, text: "Mindeniousss" },
  { title: "Medical coding jobs", image: Medicalcoding, text: "Mindeniousss" },
  { title: "Flipkart Runway S6", image: flipkartrunwayimg, text: "Mindeniousss" },
  { title: "Sales Internship", image: salesimg, text: "Mindeniousss" },
  { title: "Smart India Hackathon", image: smartIndiaImg, text: "Online" },
  { title: "Sales Internship", image: salesInternshipImg, text: "Mindeniousss" },
  { title: "TCS Code Vita 2025", image: TcsCodeVitaImg, text: "Online" },
  { title: "Coders Hackathon", image: codersHackathonImg, text: "Online" },
];

const FeaturedOpportunitiesSlider = () => {


  // Responsive settings for slider
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Default for desktop
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets (General)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 820, // iPad Air Specific
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="relative max-w-[1334px] mx-auto h-auto min-h-[774px] bg-white flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 md:px-8">

      {/* Header section */}
      <div className="w-full max-w-[554px] text-center mb-10 md:mb-16">
        <h1 className="text-[24px] md:text-[36px] text-[#1C4A81] mb-4 font-bold ">
          Featured Opportunities
        </h1>

        <p className="text-[14px] md:text-[14px] text-black">
          Check out the curated opportunities handpicked for you from top organizations.
        </p>
      </div>

      {/* Slider section */}
      <div className="w-full max-w-[95%] lg:max-w-[90%] sm:max-w-[120%] mx-auto">
        <Slider {...settings}>
          {opportunities.map((opportunity, index) => (
            <div key={index} className="px-2 md:px-4">
              <FeaturedOpportunityCard {...opportunity} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Explore All button */}
      <div className="mt-6 md:mt-12 flex items-center text-[#164A98] cursor-pointer">
        <span>Explore All Opportunities</span>
        <KeyboardArrowRightIcon className="text-black-600 ml-2" fontSize="medium" />
      </div>
    </div>
  );
};

export default FeaturedOpportunitiesSlider;

