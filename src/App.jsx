import Home from "./pages/home/Home";
import Jobs from "../src/pages/jobs.jsx"
const App = () => {
  return( 
    <div>
    <div class=" bg-[linear-gradient(to_bottom,_#144D9E_0%,_#61B7E6_15%,_#FFFFFF_50%,_#FFFFFF_100%)] lg:px-25 lg:py-8 sm:px-10 sm:py-6 px-8 py-4 ">
      <Home />
    </div>
    <div className="bg-gradient-to-b from-white to-purple-100 h-[60vh] p-10 rounded-lg w-full  "> 
    <Jobs/>
    </div>
    
    </div>
  
  );
};
export default App;