import Image from "next/image";
import {  FaRegCommentAlt, FaRegEye, FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";


const Disscussion = () => {
    return (
        <div>
            <h1 className="text-2xl text-red-600 font-bold bg-gray-300 my-2">Disscussion Form</h1>
            <div className="border p-2">
            <div className="flex gap-5">
                <Image
                    alt="profile"
                    height={500}
                    width={500}
                    className="h-8 w-8 rounded-full"
                    src='https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
                />
                <div>
                    <div className="flex items-center gap-5">
                    <h1>lorem Ipsum</h1>
                    <button className="bg-blue-800 text-white rounded-full px-2">Sector 2</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel felis eu justo luctus venenatis.</p>
                    <div className="flex justify-between">
                        <div className="flex gap-2 justify-center items-center">
                            <FaRegHeart />
                            <p>2k</p>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                            <FaRegEye />
                            <p>2k</p>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                        <FaRegCommentAlt />
                            <p>2k Comments</p>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                        <IoShareSocialOutline />
                            <p>Share</p>
                        </div>
                    </div>
                </div>
                <p className="text-blue-800 font-semibold">2 min ago</p>
            </div>
        </div>
        </div>
    );
};

export default Disscussion;