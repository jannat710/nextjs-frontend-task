"use client"
import { useState } from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
import { TiUser } from "react-icons/ti";
import { BiSolidBell, BiSolidCommentDetail } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { TiArrowSortedDown } from "react-icons/ti";



const SideMenu = () => {
    const [isSideMenuDivVisible, setIsSideMenuDivVisible] = useState(false);
    const toggleSideMenuDivVisibility = () => {
        setIsSideMenuDivVisible(!isSideMenuDivVisible);
    };

    return (
        <div>
            <div className="flex justify-center fixed md:static lg:static">
                {isSideMenuDivVisible && (
                    <div className="bg-blue-900 w-52 h-screen">
                        <div className='flex justify-between p-5 border-b text-white items-center text-2xl'>
                            <div className='flex justify-start items-center gap-2'>
                                <TiUser />
                                <p className='text-lg'>Hello, User</p>

                            </div>

                            <BiSolidBell />

                        </div>
                        <div className='flex justify-start items-center pl-5 gap-2 mt-1 py-2 bg-blue-950'>
                            <BiSolidCommentDetail className='text-xl text-white' />
                            <p className='text-base text-white'>Discussion Forum</p>
                            <TiArrowSortedDown  className='text-white'/>

                        </div>
                        <div className='flex justify-start items-center pl-5 gap-2 py-5'>
                            <HiCurrencyDollar className='text-xl text-white' />
                            <p className='text-base text-white'>Market Stories</p>
                        </div>
                        <p className='text-base text-white pb-5 pl-5'>Sentiment</p>
                        <p className='text-base text-white pb-5 pl-5'>Market</p>
                        <p className='text-base text-white pb-5 pl-5'>Sector</p>
                        <p className='text-base text-white pb-5 pl-5 '>Watchlist</p>
                        <p className='text-base text-white pb-5 pl-5'>Events</p>
                        <p className='text-base text-white pb-5 pl-5'>News/Interview</p>
                    </div>
                )}
                <div className='bg-gray-300 h-screen flex items-center justify-center'>
                    <BiSolidRightArrow
                        className="text-white bg-blue-900 h-32  cursor-pointer"
                        onClick={toggleSideMenuDivVisibility}
                    />
                </div>
            </div>
        </div>
    );
};

export default SideMenu;