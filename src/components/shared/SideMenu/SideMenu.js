"use client"
import { useState } from 'react';
import { BiSolidRightArrow } from "react-icons/bi";


const SideMenu = () => {
    const [isRedDivVisible, setIsRedDivVisible] = useState(false);

    const toggleRedDivVisibility = () => {
        setIsRedDivVisible(!isRedDivVisible);
    };

    return (
        <div>
            <div className="flex justify-center">
                {isRedDivVisible && (
                    <div className="bg-red-800 w-52 h-screen">
                        dcsfefe
                    </div>
                )}
                <BiSolidRightArrow
                    className="text-white bg-blue-800 h-24 cursor-pointer"
                    onClick={toggleRedDivVisibility}
                />
            </div>
        </div>
    );
};

export default SideMenu;