import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Business from "../../../assets/business.svg";
import Image from "../../../assets/osvity_logo.svg";
import HeroCard from "../../Cards/HeroCard";
import HeroSearch from "../../Buttons/HeroSearch";

const HeroSection = () => {
  const fullText = ", Mentor & Organization"; 
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => setShowText(true), 600);
    }, 11200); 

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3 },
    }),
  };

  return (
    <section className="flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:items-start text-center sm:text-left mt-6 rounded-xl">
      <div className=" flex-1 mb-6 lg:mb-0 w-full">
        <button className="hidden mt-20  lg:flex items-center space-x-2 bg-gradient-to-b from-[#FCFDFF] to-[#F0F5FF] p-[1px] rounded-full px-4 py-2 border">
          < img src={Business} alt="Business" className="h-6 " />
          <p className="text-sm text-[#002B6B]">For Business</p>
        </button>

        <h1 className="text-2xl lg:text-5xl font-poppins lg:mt-8  sm:h-20 mt-15 h-auto w-full text-left ">
          <span className="block text-left  ">This application for</span>

          <span className="block text-[#61B7E6] lg:text-4xl mt-4 w-full font-semibold text-left text-xl ">
            Student 
            <AnimatePresence mode="wait">
              {showText && (
                <motion.span
                  key={fullText}
                  className="ml-2 text:xl lg:text-4xl" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 2 }}
                  exit={{ opacity: 0 }}
                >
                  {fullText.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                      className="text:xl lg:text-4xl"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </h1>
        <HeroSearch/>
        <HeroCard />
      </div>

      <div className="my-20">
        <img src={Image} alt="Student" className="lg:h-120 sm:h-110 h-100" />
      </div>
    </section>
  );
};

export default HeroSection;
