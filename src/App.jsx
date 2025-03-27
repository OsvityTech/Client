<<<<<<< HEAD
// // <<<<<<< HEAD
// import Home from "./pages/home/Home";
// import Jobs from "../src/pages/jobs.jsx"
// const App = () => {
//   return( 
//     <div>
//     <div class=" bg-[linear-gradient(to_bottom,_#144D9E_0%,_#61B7E6_15%,_#FFFFFF_30%,_#FFFFFF_100%)] lg:px-25 lg:py-8 sm:px-10   sm:py-6 px-8 py-4 ">
//       <Home />
// =======


// function App() {
//   return (
//     <div className='w-screen'>
//       <Home/> 
// {/* >>>>>>> a49ee01169ec8c3052589b51aa707b03264c1c95 */}
//     </div>
//     <div className="bg-gradient-to-b from-white to-purple-100 h-[60vh] p-10 rounded-lg w-full  "> 
//     <Jobs/>
//     </div>
    
//     </div>
  
//   );
// };
// export default App;



import Home from "./pages/home/Home";
import Jobs from "../src/pages/jobs.jsx"
import FooterPage from "../src/components/Sections/FooterSection.jsx"
import StayUpdate from "../src/components/Sections/StayUpdateSection.jsx";
import MentorSection from "../src/components/Sections/MentorSection.jsx";
import OpportunitySection from "../src/components/Sections/OpportunitySection.jsx"

const App = () => {
  return( 
    <div>
    <div class=" bg-[linear-gradient(to_bottom,_#144D9E_0%,_#61B7E6_15%,_#FFFFFF_50%,_#FFFFFF_100%)] lg:px-30 lg:py-8 sm:px-10 sm:py-6 px-8 py-4 ">
      <Home />
    </div>
    <div className="bg-gradient-to-b from-white to-purple-100 h-[60vh] p-10 rounded-lg w-full  "> 
    <Jobs/>
=======
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <Home />
>>>>>>> d05a8d3e1cd0416f1774333ac8ecc749a189026a
    </div>
    <OpportunitySection />
    <div className='bg-[#FFFFFF]'>
      <MentorSection />
      </div>
    <StayUpdate />
    <FooterPage />
    </div>
    
  );
};
<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> d05a8d3e1cd0416f1774333ac8ecc749a189026a
