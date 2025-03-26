import React from "react";
import MentorSection from "../../components/Sections/MentorSection";
import OpportunitySection from "../../components/Sections/OpportunitySection";
import StayUpdate from "../../components/Sections/StayUpdateSection";
import FooterPage from "../../components/Sections/FooterSection";

const Home = () => {
  return (
    <div className="bg-[#FFFFFF] w-full">
      <OpportunitySection />
      <MentorSection />
      <StayUpdate />
      <FooterPage />
    </div>
  );
};

export default Home;
