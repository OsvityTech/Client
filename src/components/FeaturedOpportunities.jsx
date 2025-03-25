import React from "react";
import OpportunityImg5 from "../assets/OpportunityImg5.png";
import Codenova from "../assets/Codenova.png";
import Medicalcoding from "../assets/Medicalcoding.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import OpportunityCard from "./OpportunityCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





const opportunities = [
  { title: "Coding Ninja’s 2025", image: OpportunityImg5, author: "Mindeniousss" },
  { title: "Code Nova for Kids", image: Codenova, author: "Mindeniousss" },
  { title: "Medical coding jobs", image: Medicalcoding, author: "Mindeniousss" },
  { title: "Flipkart Runway S6", image: OpportunityImg5, author: "Mindeniousss" },
  { title: "Sales Internship", image: OpportunityImg5, author: "Mindeniousss" },
  { title: "Smart India Hackathon", image: OpportunityImg5, author: "Mindeniousss" },
  { title: "Sales Internship", image: OpportunityImg5, author: "Mindeniousss" },
  { title: "TCS Code Vita 2025", image: OpportunityImg5, author: "Mindeniousss" },
  { title: "Coders Hackathon", image: OpportunityImg5, author: "Mindeniousss" },
];


const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  draggable: true,
  swipe: true,
  touchThreshold: 10,
  pauseOnHover: false,
};



const FeaturedOpportunities = () => {
  return (
    <div className="relative w-[1534px] h-[774px] top-[3399] left-[1px] bg-white-600 flex justify-center items-center mt-[3399px]">
      <div className="absolute w-[554px] h-[80px] top-[67px] left-[445px] ">
        <h1
          className="absolute w-[411px] h-[42px] top-[37px] left-[123px] font-Roboto font-normal text-[35px] leading-[100%] tracking-[0%] text-[#1C4A81]"
        >
          Featured Opportunities
        </h1>


        <p className="absolute w-[554px] h-[21px] top-[96px] left-[37px] font-poppins font-light text-[16px] leading-[100%] tracking-[0%] text-black">
          Check out the curated opportunities handpicked for you from top organizations.
        </p>
      </div>
      <div className="w-[80%] mx-auto ">
        <Slider {...settings}>
          {opportunities.map((opportunity, index) => (
            <div key={index} className="px-4">
              <OpportunityCard {...opportunity} />
            </div>
          ))}
        </Slider>
      </div>




      <div className="absolute top-[717px] left-[620px] w-[256px] h-[24px] text-[20px] font-[400] leading-[100%] tracking-[0%] font-[Poppins] text-[#164A98] cursor-pointer flex items-center justify-center">
        <span>Explore All Opportunities</span>
        <KeyboardArrowRightIcon className="text-black-600" fontSize="medium" />
      </div>






    </div>
  );
};

export default FeaturedOpportunities;
