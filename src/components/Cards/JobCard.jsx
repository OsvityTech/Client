import React from "react";
import Time from "../../assets/timeicon.svg"; 
import Users from "../../assets/usersicon.svg"; 

const JobCard = ({ job }) => {
  return (
    <div className="w-full border-[0.5px] border-gray-300 border-l-[1.3px] border-r-[1.3px] rounded-2xl p-6 shadow-md bg-white max-w-full sm:max-w-full md:max-w-[360px] min-h-[200px] flex flex-col justify-between mx-auto">

      <div>
        <div className="flex flex-col items-center gap-2 mb-5">
        <h2 className="font-bold text-[26px] mt-2">{job.title}</h2>

          <img src={job.logo} alt={job.company} className="w-25 h-25 object-contain" />
          <div>
            <p className="text-gray-500 text-sm flex items-center justify-center">
              {job.category}
              <span className="w-[2px] h-4 bg-gray-500 mx-2"></span>
              {job.type}
            </p>
            {/* <h2 className="font-bold text-lg mt-2">{job.title}</h2> */}
            <p className="text-gray-500 flex items-center text-sm mt-2">
              <img src={Users} alt="Registered Users" className="w-4 h-4" />
              <span className="ml-2">{job.registered} Registered</span>
            </p>
            <p className="text-gray-500 text-sm flex items-center mt-2">
              <img src={Time} alt="Days Left" className="w-4 h-4" />
              <span className="ml-2">{job.daysLeft} days left</span>
            </p>
          </div>
        </div>
      </div>
      <button className="mt-2 px-4 py-2 text-black w-full sm:w-[200px] mx-auto border border-gray-300 bg-gradient-to-r from-gray-200 to-white-400 rounded-full transition-all duration-100 hover:from-blue-900 hover:to-blue-200 hover:text-white active:scale-95 focus:from-blue-900 focus:to-blue-200 focus:text-white shadow-md">
  View More
</button>
    </div>
  );
};

export default JobCard;
