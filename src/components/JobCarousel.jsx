import React, { useState } from "react";
import JobCard from "./JobCard.jsx";
import { ChevronRight } from "lucide-react";
import jobs from "../Data/jobs.js";

const JobCarousel = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative flex items-center justify-center mt-6">
      <div className="flex gap-27 overflow-hidden w-full max-w-6xl items-stretch">
        {jobs.concat(jobs).slice(index, index + 3).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <button
        onClick={() => setIndex((prev) => (prev + 1) % jobs.length)}
        className="absolute right-19 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default JobCarousel;
