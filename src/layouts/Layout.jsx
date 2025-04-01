import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/Sections/HomeSections/FooterSection";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col min-h-screen">
      <div className="bg-[linear-gradient(to_bottom,_#144D9E_0%,_#61B7E6_15%,_#FFFFFF_50%,_#FFFFFF_100%)] lg:px-16 lg:pt-8 sm:px-10 sm:pt-6 px-8 pt-4">
        <Navbar />
      </div>
      
      <main className="flex-1 px-8 flex flex-col gap-5 sm:px-10 lg:px-16">
        <Outlet />
      </main>

      <FooterSection />
    </div>
  );
};

export default Layout;
