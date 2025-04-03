import React from 'react';
import OsvityLogo from '../../../assets/OsvityLogo.svg';
import { FaTiktok, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoTelegram } from 'react-icons/bi';

export default function FooterSection() {
    return (
        <div className='bg-blue-100 w-full flex flex-col px-14 lg:h-[705px] '>
            <div className='mt-12 '>
                <img src={OsvityLogo} className='w-[156px] h-[136px] lg:w-[206.5px] lg:h-[136.5px] sm:w-[140px] sm:h-[112px]' alt='Osvity Logo' />
            </div>
            <div className='flex flex-col lg:flex-row gap-6 w-full '>
                <div className='flex flex-col p-4 sm:flex-row justify-between align-middle lg:flex-row w-full gap-[30px]'>
                    <div className='w-full'>
                        <p className='text-[16px] font-normal'>Built with love in India for the world</p>
                        <h3 className='text-[#282828] text-[16px] font-bold pt-6'>Stay Connected</h3>
                        <p className='text-[16px] pt-6'><strong>Phone:</strong> +91-8374028800</p>
                        <p className='text-[16px] pt-2'><strong>Email:</strong> Info@osvitytech.com</p>
                    </div>

                    <div className='w-full'>
                        <ul className='text-sm space-y-2'>
                            <li className='font-bold text-[20px]'>Products</li>
                            <li className='text-[16px]'>Hiring</li>
                            <li className='text-[16px]'>Engagement</li>
                            <li className='text-[16px]'>Assessment</li>
                            <li className='text-[16px]'>Proctoring</li>
                            <li className='text-[16px]'>Coding Interview</li>
                        </ul>
                    </div>
                    <div className='w-full'>
                        <ul className='text-sm space-y-2'>
                            <li className='font-bold text-[20px]'>About Us</li>
                            <li className='text-[16px]'>Company Milestone</li>
                            <li className='text-[16px]'>Web Mail</li>
                            <li className='text-[16px]'>Board of Directors</li>
                            <li className='text-[16px]'>Senior Management</li>
                        </ul>
                    </div>
                    <div className='w-full '>
                        <ul className='text-sm space-y-2'>
                            <li className='font-bold text-[20px]'>Learn</li>
                            <li className='text-[16px]'>Courses</li>
                            <li className='text-[16px]'>Articles</li>
                            <li className='text-[16px]'>Blog Series</li>
                            <li className='text-[16px]'>Workshops</li>
                        </ul>
                    </div>
                    <div className='w-full lg:w-1/4'>
                        <ul className='text-sm space-y-2'>
                            <li className='font-bold text-[20px]'>Apply</li>
                            <li className='text-[16px]'>Internships</li>
                            <li className='text-[16px]'>Jobs</li>
                            <li className='text-[16px]'>Scholarships</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center py-4 mt-[80px] sm:mb-[24px] w-full'>
                <div className='text-[16px] text-gray-700 text-center md:text-left'>
                    ©2024 All rights reserved
                </div>

                <div className='flex gap-4 text-xl mt-4 md:mt-0'>
                    <AiFillInstagram className='hover:text-pink-600 cursor-pointer w-[26px] h-[26px] text-gray-700' />
                    <BiLogoTelegram className='hover:text-blue-500 cursor-pointer w-[26px] h-[26px] text-gray-700' />
                    <FaTiktok className='hover:text-black cursor-pointer w-[24px] h-[24px] text-gray-700' />
                    <FaYoutube className='hover:text-red-600 cursor-pointer w-[26px] h-[26px] text-gray-700' />
                </div>
            </div>
        </div>
    );
}
