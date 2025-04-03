import React from "react";
import Navbar from "../../components/Navbar";
import OpportunitySection from "../../components/Sections/HomeSections/OpportunitySection";
import MentorSection from "../../components/Sections/HomeSections/MentorSection";
import StayUpdateSection from "../../components/Sections/HomeSections/StayUpdateSection";
import FooterSection from "../../components/Sections/HomeSections/FooterSection";
import HeroSection from "../../components/Sections/HomeSections/HeroSection";
import JobsSection from "../../components/Sections/HomeSections/JobsSection";
import TrustUsSection from "../../components/Sections/HomeSections/TrustUsSection";
import FeaturedOpportunitiesSlider from "../../components/Sliders/FeaturedOpportunitiesSlider";
import CompetitionSection from "../../components/Sections/HomeSections/CompetitionSection";
import InternshipSection from "../../components/Sections/HomeSections/InternshipSection";
import AiMockSection from "../../components/Sections/HomeSections/AiMockSection";
import PracticeSection from "../../components/Sections/HomeSections/PracticeSection";
import JoinUsSection from "../../components/Sections/HomeSections/JoinUsSection";

const Home = () => {
  return (
<<<<<<< HEAD
    <div >
      <div class=" bg-[linear-gradient(to_bottom,_#144D9E_0%,_#61B7E6_15%,_#FFFFFF_50%,_#FFFFFF_100%)] lg:px-15 lg:py-8 sm:px-10 sm:py-6 px-8 py-4 ">
=======
    <div className="bg-[#FFFFFF] flex flex-col gap-10 ">
      <div class="bg-[linear-gradient(to_bottom,_#144D9E_0%,_#61B7E6_15%,_#FFFFFF_50%,_#FFFFFF_100%)] lg:px-16 lg:pt-8 sm:px-10 sm:pt-6 px-8 pt-4 ">
>>>>>>> 6f15cd6a1326ca9f0976a1f4977707fab51f342b
        <Navbar />
        <HeroSection />
      </div>
      <div className="px-8 flex flex-col gap-5 sm:px-10 lg:px-16">
        <OpportunitySection />
        <MentorSection />
      </div>

      <TrustUsSection />
      <FeaturedOpportunitiesSlider />
      <CompetitionSection />
      <InternshipSection />
      <JobsSection />
      <AiMockSection />
      <PracticeSection />
      <JoinUsSection />
      <div className="px-8 flex flex-col gap-5 sm:px-10 lg:px-16">
        <StayUpdateSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Home;
