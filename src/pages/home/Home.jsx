import React from "react";
import Navbar from "../../components/Navbar";
import OpportunitySection from "../../components/Sections/OpportunitySection";
import MentorSection from "../../components/Sections/MentorSection";
import StayUpdateSection from "../../components/Sections/StayUpdateSection";
import FooterSection from "../../components/Sections/FooterSection";
import HeroSection from "../../components/Sections/HeroSection";
import JobsSection from "../../components/Sections/JobsSection";
import TrustUsSection from "../../components/Sections/TrustUsSection";
import FeaturedOpportunitiesSlider from "../../components/Sliders/FeaturedOpportunitiesSlider";
import CompetitionSection from "../../components/Sections/CompetitionSection";
import InternshipSection from "../../components/Sections/InternshipSection";
import AiMockSection from "../../components/Sections/AiMockSection";
import PracticeSection from "../../components/Sections/PracticeSection";

const Home = () => {
  return (
    <div >
      <div class=" bg-[linear-gradient(to_bottom,_#144D9E_0%,_#61B7E6_15%,_#FFFFFF_50%,_#FFFFFF_100%)] lg:px-15 lg:py-8 sm:px-10 sm:py-6 px-8 py-4 ">
        <Navbar />
        <HeroSection />
      </div>
      <OpportunitySection />
      <div className="bg-[#FFFFFF]">
        <MentorSection />
      </div>
      <TrustUsSection/>
      <FeaturedOpportunitiesSlider/>
      <CompetitionSection/>
      <InternshipSection/>
      <div className="p-10 w-full  ">
        <JobsSection />
      </div>
      <AiMockSection/>
      <PracticeSection/>
      <StayUpdateSection />
      <FooterSection />
    </div>
  );
};

export default Home;


