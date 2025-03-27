// <<<<<<< HEAD
// // <<<<<<< HEAD
// import Navbar from "../../components/Navbar"; ....
// import HeroSection from "../../components/HeroSection";....
// import React from 'react'
// import MentorSection from '../../components/Sections/MentorSection'

// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
// {/* ======= */}


// const Home = () => {
//   return (
//     <div className='bg-[#FFFFFF]'>
//       <MentorSection/>
// {/* >>>>>>> bb7045cc00820876b164183dd570921f5eb82fa0 */}
//     </div>
//   );
// };
// export default Home;



import React from "react";
import Navbar from "../../components/Navbar";
<<<<<<< HEAD
import HeroSection from "../../components/HeroSection";
=======
import OpportunitySection from "../../components/Sections/OpportunitySection";
import MentorSection from "../../components/Sections/MentorSection";
import StayUpdateSection from "../../components/Sections/StayUpdateSection";
import FooterSection from "../../components/Sections/FooterSection";
import HeroSection from "../../components/Sections/HeroSection";
import JobsSection from "../../components/Sections/JobsSection";
import TrustUsSection from "../../components/Sections/TrustUsSection";
>>>>>>> d05a8d3e1cd0416f1774333ac8ecc749a189026a

const Home = () => {
  return (
    <div >
<<<<<<< HEAD
      <Navbar />
      <HeroSection />
=======
      <div class=" bg-[linear-gradient(to_bottom,_#144D9E_0%,_#61B7E6_15%,_#FFFFFF_50%,_#FFFFFF_100%)] lg:px-30 lg:py-8 sm:px-10 sm:py-6 px-8 py-4 ">
        <Navbar />
        <HeroSection />
      </div>
      <OpportunitySection />
      <div className="bg-[#FFFFFF]">
        <MentorSection />
      </div>
      <TrustUsSection/>
      <div className="p-10 w-full  ">
        <JobsSection />
      </div>
      <StayUpdateSection />
      <FooterSection />
>>>>>>> d05a8d3e1cd0416f1774333ac8ecc749a189026a
    </div>
    
  );
};

export default Home;


