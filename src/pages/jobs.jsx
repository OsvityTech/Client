import React from "react";
import JobCarousel from "../components/JobCarousel.jsx";

const Jobs = () => {
  return (
    <div className="text-center">
    <h1 className="text-3xl font-bold">Jobs</h1> 
     <p className="text-gray-600 mb-10">Find the Jobs that fits your career aspirations.</p>
      <JobCarousel />
    </div>
  );
};

export default Jobs; 



// import React from "react";
// import JobCarousel from "../Component/JobCarousel.jsx";
// import 

// const Jobs = () => {
//   return (
//     <div className="relative text-center">
//       {/* View More button at the top right */}
//       <button className="absolute top-8 right-10 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-blue-700 transition">
//         View More
//       </button>

//       <h1 className="text-3xl font-bold">Jobs</h1>
//       <p className="text-gray-600 mb-10">Find the Jobs that fits your career aspirations.</p>

//       <JobCarousel />
//     </div>
//   );
// };

// export default Jobs;
