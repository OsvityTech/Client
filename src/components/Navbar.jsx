import React from "react";
import Logo from "../assets/logo.svg"

import Osvity from "../assets/logo_osvity.svg"
import Arrow from "../assets/arrow.svg"
export default function Navbar() {
    return (
      <nav className=" flex justify-between items-center h-15 bg-white rounded-2xl p-0 md:p-2">
        <img src={Osvity} alt="Logo" className="h-15" />
        <div className="hidden md:flex space-x-6 gap-6 text-gray-700">
          <a href="#" className="hover:text-blue-600">Internships</a>
          <a href="#" className="hover:text-blue-600">Jobs</a>
          <a href="#" className="hover:text-blue-600">Competition</a>
          <a href="#" className="hover:text-blue-600">Mentorship</a>
          <a href="#" className="hover:text-blue-600">Practice</a>
          <a href="#" className="hover:text-blue-600">More</a>
        </div>
        <button className=" text-#252641 rounded-full flex items-center">
          Register Now
          <img src={Arrow} alt="Arrow" className="h-6  rounded-full" />
        </button>
      </nav>
    );
  }
  