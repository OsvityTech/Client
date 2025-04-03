import React from "react";
import { CgMail } from "react-icons/cg";

export default function StayUpdate() {
    return (
        <div className="px-10 py-20 xl:px-25 bg-[#FFFFFF] ">
            <div className="bg-gradient-to-b from-blue-50 to-white  h-auto sm:h-[280px] mx-auto rounded-3xl  shadow-[0px_10px_30px_rgba(57,29,232,0.15)] flex flex-col items-center justify-center px-8 py-6 sm:py-0  ">
                {/* Heading */}
                <h2 className="text-center text-[25px] sm:text-4xl font-medium text-[#164A98] sm:text-black">
                    Stay Updated
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base text-center mt-3 sm:mt-4 px-4 sm:px-16 text-gray-700 max-w-[670px]">
                    We’ll send you updates on the latest opportunities to showcase your
                    talent and get hired and rewarded regularly.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center sm:gap-4 w-full max-w-[670px] mx-auto px-2 justify-center mt-5 sm:mt-7">

                    {/* Subscribe Button */}
                    {/* Subscribe Button */}
                    <button className="flex items-center rounded-full w-[319px] h-[40px] sm:w-[384px] sm:h-12 text-gray-700 bg-white justify-start md:w-3/5  border border-gray-300 sm:text-[16px] text-[14px] pl-2 ">
                        <CgMail className="w-6 h-6 mr-4" />
                        Subscribe to our Newsletter
                    </button>

                    {/* Share Story Button */}
                    <button className="w-full sm:w-2/5 sm:h-12 sm:text-white text-center px-6 py-3 rounded-full 
  sm:shadow-md sm:bg-[#61B7E6] text-[#164A98]  sm:border sm:border-[#3385FF] shadow-lg ">
                        Share your story now
                    </button>

                </div>

            </div>
        </div>
    );
}
