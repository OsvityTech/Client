import Home from "./pages/home/Home";
import JobCarousel from "./components/JobCarousel";
const App = () => {
  return( 
    <div>
    <div className="bg-gradient-to-b from-white to-purple-100 md:px-12 md:py-8 sm:px-10 sm:py-6 px-6 py-4 ">
      <Home />
    </div>
    <div className="bg-gradient-to-b from-white to-purple-100 h-[60vh] p-10 rounded-lg w-full  ">
    <JobCarousel/>
    </div>
    
    </div>
  
  );
};
export default App;