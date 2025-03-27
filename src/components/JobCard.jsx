import React from "react";
import Time from "../assets/timeicon.svg"; 
import Users from "../assets/usersicon.svg"; 

const JobCard = ({ job }) => {
  return (
    <div className="border-[0.5px] border-l-[1.3px] border-r-[1.3px] border-blue-900 rounded-2xl p-6 shadow-md bg-white w-full max-w-[380px] min-h-[250px] flex flex-col justify-between mx-auto">
      <div>
        <div className="flex items-center gap-4 mb-5">
          <img src={job.logo} alt={job.company} className="w-30 h-30" />
          <div>
            <p className="text-gray-500 text-md flex items-center">
              {job.category}
              <span className="w-[2px] h-4 bg-gray-500 mx-2"></span>
              {job.type}
            </p>
            <h2 className="font-bold text-xl mt-2">{job.title}</h2>
            <p className="text-gray-500 flex items-center text-md mt-2">
              <img src={Users} alt="Registered Users" className="w-4 h-4" />
              <span className="ml-2">{job.registered} Registered</span>
            </p>
            <p className="text-gray-500 text-md flex items-center mt-2 text-md">
              <img src={Time} alt="Days Left" className="w-4 h-4" />
              <span className="ml-2">{job.daysLeft} days left</span>
            </p>
          </div>
        </div>
      </div>
      {/* <button className="mt-2 px-4 py-2 text-sm rounded-full w-[200px] mx-auto border-1 border-gray-300 bg-gray-200 transition-all duration-300 hover:from-blue-700 hover:to-blue-400 shadow-md"> */}
      <button className="mt-2 px-4 py-2 text-black w-[200px] mx-auto border-1 border-gray-300 bg-gradient-to-r from-gray-200 to-white-400 rounded-full transition-all duration-100 hover:from-blue-900 hover:to-blue-200 hover:text-white shadow-md">
  View More
</button>

    </div>
  );
};

export default JobCard;





