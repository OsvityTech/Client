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
import HeroSection from "../../components/HeroSection";
import MentorSection from "../../components/Sections/MentorSection";

const Home = () => {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <div className='bg-[#FFFFFF]'>
      <MentorSection />
      </div>
    </div>
    
  );
};

export default Home;

