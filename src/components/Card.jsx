import { HiUserGroup } from "react-icons/hi";
import { FaFileImport, FaFilePrescription } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

export default function QuizCard() {
  return (
//     <div className="bg-pink-400 h-screen">
//    <div className="max-w-md lg:max-w-md sm:max-w-[800px] ml-2.5 bg-[#FFFFFF] flex flex-col  sm:flex-col  sm:items-center lg:items-start">
//                    <div className="max-w-md sm:w-[447px] ">
//                        <h2 className="text-[25px] font-bold pt-0 sm:text-[32px] bg-amber-200 " style={{ color: "#1C4A81" }} >
//                            Pick The Right Opportunity!
//                        </h2>
//                    </div>
   
//                    <div className=" pt-[13px] ">
//                        <p className="text-gray-600 mt-2 text-[14px] sm:text-[14px] lg:text-[16px] w-[333px] sm:text-center justify-center lg:text-start">
//                            Discover opportunities that align with your skills and passions!
//                        </p>
//                    </div>
   
   
//                    <div className=" space-y-3 flex flex-col sm:w-[700px] sm:flex-row lg:max-w-md lg:flex-col  justify-between mt-[34px]">
   
//                        <div className="flex items-center space-x-3 sm:w-[217px] sm:h-[50px]">
   
//                            <div className="w-[53px] h-[50px] bg-pink-200 flex justify-center items-center rounded-full">
//                                <HiUserGroup style={{ color: "#FF3093" }} className="w-[25px] h-[17px]" />
//                            </div>
//                            <span className="text-[14px] font-semibold" style={{ color: "#164481" }}>
//                                Skill-Based Matches
//                            </span>
//                        </div>
   
//                        <div className="flex items-center space-x-3 sm:w-[202px] sm:h-[50px]">
//                            <div className="w-[53px] h-[50px] bg-blue-200 flex justify-center items-center rounded-full">
//                                <FaFileImport style={{ color: "#0A50C7" }} className="w-[17px] h-[17px] sm:w-[18px] sm:h-[18px]" />
//                            </div>
//                            <span className="text-blue-900 font-semibold" style={{ color: "#164481" }}>
//                                Growth & Rewards
//                            </span>
//                        </div>
   
//                        <div className="flex items-center space-x-3 sm:w-[217px] sm:h-[50px] ">
//                            <div className="w-[53px] h-[50px] bg-green-200 flex justify-center items-center rounded-full">
//                                <FaFilePrescription style={{ color: "#0C9066" }} className="w-5 h-5 sm:w-[15px] sm:h-5" />
//                            </div>
//                            <span className="text-blue-900 font-semibold" style={{ color: "#164481" }}>
//                                Passion-Driven
//                            </span>
//                        </div>
   
//                    </div>
   
//                    <button
//                        style={{ backgroundColor: "#144D9E" }}
//                        className="mt-[38px] text-white rounded-full flex w-[161px] h-[41px]"
//                    >
//                        <p className="px-[27px] py-2">Explore all</p>
//                        <div
//                            className="w-[32px] h-[32px] rounded-full mt-[4px] mr-[2px] flex justify-center items-center"
//                            style={{ backgroundColor: "#639AF8", color: "#FFFFFF" }}
//                        >
//                            <LuArrowUpRight style={{ color: "#FFFFFF" }} className="h-5 w-4" />
//                        </div>
//                    </button>
//                </div>
//     </div>
<div className="w-full h-64 rounded-2xl shadow-md bg-custom-gradient flex flex-col items-center justify-center px-6 text-center">
  <h1 className="text-2xl font-bold text-gray-900">Stay Updated</h1>
  <p className="text-sm text-gray-600 mt-2 max-w-md">
    We'll send you updates on the latest opportunities to showcase your talent
    and get hired and rewarded regularly.
  </p>

  <div className="mt-4 flex items-center space-x-3">
    <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 border">
      <span className="text-gray-400">📩</span>
      <input type="text" placeholder="Subscribe to our Newsletter" className="ml-2 outline-none text-gray-700"/>
    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md">
      Share your story now
    </button>
  </div>
</div>



  );
}







// import quize1 from "../assets/quize1.png";