import React from "react";
import OpportunityImg5 from "../assets/OpportunityImg5.png";
import Codenova from "../assets/Codenova.png";
import Medicalcoding from "../assets/Medicalcoding.png";
import flipkartrunwayimg from "../assets/flipkartrunwayimg.png";
import salesimg from "../assets/salesimg.png";
import smartIndiaImg from "../assets/smartIndiaImg.png";
import salesInternshipImg from "../assets/salesInternshipImg.png";
import TcsCodeVitaImg from "../assets/TcsCodeVitaImg.png";
import codersHackathonImg from "../assets/codersHackathonImg.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import OpportunityCard from "./OpportunityCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const opportunities = [
  { title: "Coding Ninja's 2025", image: OpportunityImg5, author: "Mindeniousss" },
  { title: "Code Nova for Kids", image: Codenova, author: "Mindeniousss" },
  { title: "Medical coding jobs", image: Medicalcoding, author: "Mindeniousss" },
  { title: "Flipkart Runway S6", image: flipkartrunwayimg, author: "Mindeniousss" },
  { title: "Sales Internship", image: salesimg, author: "Mindeniousss" },
  { title: "Smart India Hackathon", image: smartIndiaImg, author: "Online" },
  { title: "Sales Internship", image: salesInternshipImg, author: "Mindeniousss" },
  { title: "TCS Code Vita 2025", image: TcsCodeVitaImg, author: "Online" },
  { title: "Coders Hackathon", image: codersHackathonImg, author: "Online" },
];

const FeaturedOpportunities = () => {

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
        breakpoint: 744, // Tablet View
        settings: {
          slidesToShow: 2, // Show 2 cards in tablet view
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Mobile View
        settings: {
          slidesToShow: 1, // Show 1 card in mobile view
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (


    <div className="relative w-full max-w-[1334px] mx-auto h-auto min-h-[774px] bg-white-600 flex flex-col justify-center items-center  overflow-hidden">



      {/* Header section */}
      <div className="w-full max-w-[554px] h-auto text-center mb-10 md:mb-16">
        <h1 className="font-Roboto font-normal text-[28px] md:text-[35px] leading-[100%] tracking-[0%] text-[#1C4A81] mb-4">
          Featured Opportunities
        </h1>
        <p className="font-poppins font-light text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-black">
          Check out the curated opportunities handpicked for you from top organizations.
        </p>
      </div>

      {/* Slider section */}
      <div className="w-full max-w-[90%] mx-auto ">
        <Slider {...settings}>
          {opportunities.map((opportunity, index) => (
            <div key={index} className="px-2 md:px-4">
              <OpportunityCard {...opportunity} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Explore All button */}
      <div className="mt-8 md:mt-12 w-full max-w-[256px] h-[24px] text-[18px] md:text-[20px] font-[400] leading-[100%] tracking-[0%] font-[Poppins] text-[#164A98] cursor-pointer flex items-center justify-center">
        <span>Explore All Opportunities</span>
        <KeyboardArrowRightIcon className="text-black-600" fontSize="medium" />
      </div>
    </div>
  );
};

export default FeaturedOpportunities;