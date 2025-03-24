import React from "react";
import Time from "../assets/timeicon.svg"; 
import Users from "../assets/usersicon.svg"; 

const JobCard = ({ job }) => {
  return (
    <div className="border rounded-xl h-55 p-4 w-90 shadow-md bg-white">
      <div className="flex items-center gap-2  mb-5">
        <img src={job.logo} alt={job.company} className="w-20 h-20 mb-9" />
        <div>
        <p className="text-gray-500 text-sm mt-2 flex items-center">
  {job.category}
  <span className="w-[2px] h-4 bg-gray-500 mx-2"></span>
  {job.type}
</p>

          {/* <p className="text-gray-500 text-sm mt-2">{job.category} | {job.type}</p> */}
          <h2 className="font-bold text-lg mt-2 ">{job.title}</h2>
      <p className="text-gray-500 text-sm flex items-center  text-lg mt-2">
        <img src={Users} alt="Registered Users" className="w-4 h-4" />
        <span className="ml-2">{job.registered} Registered</span> 
      </p>

      {/* Days Left */}
      <p className="text-gray-500 text-sm flex items-center mt-2 text-lg">
        <img src={Time} alt="Days Left" className="w-4 h-4" />
        <span className="ml-2">{job.daysLeft} days left</span>
      </p>
        </div>
      </div>

    

      <button className="mt-3 bg-gray-200 w-full py-2 rounded-full" >
        View More
      </button>
    </div>
  );
};

export default JobCard;
