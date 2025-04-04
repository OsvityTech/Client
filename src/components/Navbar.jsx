import React, { useState } from "react";
import Conference from "../assets/conference.svg";
import Courses from "../assets/courses.svg";
import Culturalevents from "../assets/culturalevents.svg";
import Scloarships from "../assets/scloarship.svg";
import Workshops from "../assets/workshops.svg";
import Osvity from "../assets/logo_osvity.svg";
import Business from "../assets/business.svg"; 
import Arrow from "../assets/arrow.svg";
import { Menu, X, ChevronDown } from "lucide-react"; // Icons for menu and dropdown

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false); // Controls the "More" dropdown

  return (
    //  <nav className="fixed top-0 z-50 flex justify-between items-center h-18 bg-white rounded-2xl px-6 lg:px-12 shadow-md relative">
    <nav className="fixed top-3 left-0 right-0 z-50 mx-auto w-[90%] max-w-screen-xl flex justify-between items-center h-18 bg-white rounded-3xl px-6 lg:px-12 shadow-md">
 

      {/* Left Side - Logo */}
      <img src={Osvity} alt="Logo" className="h-[80%] sm:h-[100%]" />

      {/* Center - Navigation Links */}
      <div className="hidden lg:flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-blue-600">Internships</a>
        <a href="#" className="hover:text-blue-600">Jobs</a>
        <a href="#" className="hover:text-blue-600">Competition</a>
        <a href="#" className="hover:text-blue-600">Mentorship</a>
        <a href="#" className="hover:text-blue-600">Practice</a>

        {/* "More" Dropdown */}
        <div className="relative">
          <button 
            className="flex items-center gap-1 hover:text-blue-600 cursor-pointer"
            onClick={() => setMoreOpen(!moreOpen)}
          >
            More <ChevronDown size={16} />
          </button>

          {/* Dropdown Menu */}
          {moreOpen && (
            <div className="absolute  top-8 left-0 bg-white shadow-lg rounded-md p-3 w-45 space-y-2">
              <a href="#" className="flex  items-center gap-2 hover:text-blue-600"><img src={Courses} alt="Courses" className="h-5 w-5" /> Courses</a>
              <a href="#" className="flex  items-center gap-2 hover:text-blue-600"><img src={Scloarships} alt="Schlorships" className="h-5 w-5" /> Scholarship</a>
              <a href="#" className="flex  items-center gap-2 hover:text-blue-600"><img src={Culturalevents} alt="Cultural Events" className="h-5 w-5" /> Cultural Events</a>
              <a href="#" className="flex  items-center gap-2 hover:text-blue-600"><img src={Workshops} alt="Workshop" className="h-5 w-5" /> Workshops</a>
              <a href="#" className="flex  items-center gap-2 hover:text-blue-600"><img src={Conference} alt="Conference" className="h-5 w-5" /> Conference
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
      {/* Right Side - Register Button */}
      <button className="lg:flex text-gray-800 bg-white-100  px-2 py-2 rounded-full flex items-center gap-2 hover:bg-blue-200 text-sm">
        Register Now
        <img src={Arrow} alt="Arrow" className="h-5 rounded-full" />
      </button>
      <div className="flex items-center gap-2 flex-row lg:hidden">
      {/* Buisness Logo */}
      < img src={Business} alt="Business" className="h-6 sm:hidden" />
      {/* Mobile Menu Button */}
      <button className="" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-b-lg p-5 flex flex-col space-y-4 lg:hidden z-2">
          <a href="#" className="hover:text-blue-600">Internships</a>
          <a href="#" className="hover:text-blue-600">Jobs</a>
          <a href="#" className="hover:text-blue-600">Competition</a>
          <a href="#" className="hover:text-blue-600">Mentorship</a>
          <a href="#" className="hover:text-blue-600">Practice</a>

          {/* "More" Dropdown (Shown inline for mobile) */}
          <div className="relative">
            <button 
              className="flex items-center gap-1 hover:text-blue-600"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              More <ChevronDown size={18} />
            </button>

            {moreOpen && (
              <div className="mt-2 space-y-2">
                <a href="#" className="block hover:text-blue-600">Workshops</a>
                <a href="#" className="block hover:text-blue-600">Certifications</a>
                <a href="#" className="block hover:text-blue-600">Events</a>
              </div>
            )}
          </div>

          
        </div>
      )}
    </nav>
  );
}
