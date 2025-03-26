import React from 'react'
import OsvityLogo from '../assets/OsvityLogo.svg'
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";

export default function FooterPage() {
    return (
        <div className='bg-blue-100 w-full flex flex-col lg:h-[705px]  '>
            {/* osvity logo*/}
            <div className='mt-12 ml-3 items-start lg:mt-[86px]'>
                <img src={OsvityLogo} className='w-[206px] h-[136px] lg:w-[306.5px] lg:h-[236.5px] sm:w-[140px] sm:h-[112px]' />
            </div>

            {/* div list */}
            <div className=' flex flex-col lg:flex-row  gap-6 '>
                <div className='flex flex-col sm:flex-row lg:flex-row  justify-start gap-[30px] '>
                    {/* first div */}
                    <div className=' ml-[52px] w-[330px] h-[161px]   '>
                        <p className='text-[16px] font-normal'>Built with  favorite in India for the world</p>
                        <h3 className='text-[#282828] text-[16px] font-bold pt-6'>Stay Connect</h3>
                        <p className="text-[16px] pt-6">
                            <strong>Phone:</strong> +91-8374028800
                        </p>
                        <p className="text-[16px] pt-2">
                            <strong >Email:</strong> Info@osvitytech.com
                        </p>
                    </div>

                    {/* second div */}
                    <div className='w-33 h-[215px] ml-[55px] justify-center'>
                        <ul className="text-sm space-y-2">
                            <li className="font-bold text-[20px] ">Products</li>
                            <li className='text-[16px] ' >Hiring</li>
                            <li className='text-[16px]' >Engagement</li>
                            <li className='text-[16px]' >Assessment</li>
                            <li className='text-[16px]' >Proctoring</li>
                            <li className='text-[16px]' >Coding Interview</li>
                        </ul>
                    </div>
                    {/* third div */}
                    <div className='w-36 h-[178px]  ml-[55px] '>

                        <ul className="text-sm space-y-2 ">
                            <li className="font-bold text-[20px]">About us</li>
                            <li className='text-[16px]'>Company milestone</li>
                            <li className='text-[16px]'>Web mail</li>
                            <li className='text-[16px]'>Board of Directors</li>
                            <li className='text-[16px]'>Senior Management</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row lg:flex-row  justify-start gap-[30px]
                '>
                    {/* fourth div */}
                    <div className=' w-[113px] h-[158px] ml-[57px] sm:ml-[57px] '>
                        <ul className="text-sm space-y-2">
                            <li className="font-bold text-[20px]">Learn</li>
                            <li className='text-[16px]' >Courses</li>
                            <li className='text-[16px]' >Articles</li>
                            <li className='text-[16px]' >Blog Series</li>
                            <li className='text-[16px]' >Workshops</li>
                        </ul>
                    </div>

                    {/* five div */}
                    <div className='w-[190px] h-[126px] ml-[63px] sm:ml-68 lg:ml-[56px]'>
                        <ul className="text-sm space-y-2">
                            <li className="font-bold text-[20px] ">Apply</li>
                            <li className='text-[16px]' >Internships</li>
                            <li className='text-[16px]' >Jobs</li>
                            <li className='text-[16px]' >Scholarships</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 mt-[80px] sm:mb-[24px] mx-11.5 ">
                <div className="text-[16px] text-white text-center md:text-left">
                    ©2024 All rights reserved
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4 text-xl mt-4 md:mt-0 ">
                    <AiFillInstagram className="hover:text-pink-600 cursor-pointer w-[26px] h-[26px] text-white" />
                    <BiLogoTelegram className="hover:text-blue-500 cursor-pointer  w-[26px] h-[26px]  text-white" />
                    <FaTiktok className="hover:text-black cursor-pointer  w-[24px] h-[24px]  text-white" />
                    <FaYoutube className="hover:text-red-600 cursor-pointer  w-[26px] h-[26px]  text-white" />
                </div>
            </div>

        </div>
    )
}