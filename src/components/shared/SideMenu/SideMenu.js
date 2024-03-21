"use client"
import { useState } from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
import { TiUser } from "react-icons/ti";
import { BiSolidBell } from "react-icons/bi";


const SideMenu = () => {
    const [isSideMenuDivVisible, setIsSideMenuDivVisible] = useState(false);

    const toggleSideMenuDivVisibility = () => {
        setIsSideMenuDivVisible(!isSideMenuDivVisible);
    };

    return (
        <div>
            <div className="flex justify-center">
                {isSideMenuDivVisible && (
                    <div className="bg-blue-900 w-52 h-screen">
                        <div className='flex justify-between p-5 border-b text-white items-center text-2xl'>
                            <div className='flex justify-start items-center gap-2'>
                                <TiUser />
                                <p className='text-sm'>Hello, User</p>

                            </div>

                            <BiSolidBell />

                        </div>
                        <p className='text-sm text-white py-5 pl-5'>Discussion Forum</p>
                        <p className='text-sm text-white pb-5 pl-5'>Market Stories</p>
                        <p className='text-sm text-white pb-5 pl-5'>Sentiment</p>
                        <p className='text-sm text-white pb-5 pl-5'>Market</p>
                        <p className='text-sm text-white pb-5 pl-5'>Sector</p>
                        <p className='text-sm text-white pb-5 pl-5 '>Watchlist</p>
                        <p className='text-sm text-white pb-5 pl-5'>Events</p>
                        <p className='text-sm text-white pb-5 pl-5'>News/Interview</p>
                    </div>
                )}
                <BiSolidRightArrow
                    className="text-white bg-blue-900 h-24 cursor-pointer"
                    onClick={toggleSideMenuDivVisibility}
                />
            </div>
        </div>
    );
};

export default SideMenu;