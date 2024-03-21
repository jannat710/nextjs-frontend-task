import Image from "next/image";
import { FaRegCommentAlt, FaRegEye, FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";


const Disscussion = () => {
    return (
        <div>
            <h1 className="text-2xl pl-5 text-red-600 font-bold bg-gray-100 my-2">Disscussion Form</h1>
            {/* 1st div */}
            <div className="p-2 border-b-4 border-r-4 border-t rounded-md border-gray-300 px-5 mb-10">
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
                            <h1 className="text-lg font-semibold py-2">lorem Ipsum</h1>
                            <button className="bg-blue-700 text-sm px-2 text-white rounded-full ">Sector 2</button>
                        </div>
                        <p className="text-justify text-sm py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod commodo lectus, id ullamcorper orci ultrices vel. Ut nec enim vitae turpis consequat bibendum id id velit.</p>
                        <div className="flex justify-between text-sm font-semibold">
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
                    <div className="w-24 text-right"><p className="text-blue-700 font-semibold text-sm">2 min ago</p></div>
                </div>
            </div>
            {/* 2nd div */}
            <div className="p-2 border-b-4 border-r-4 border-t rounded-md border-gray-300 px-5 mb-10">
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
                            <h1 className="text-lg font-semibold py-2">lorem Ipsum</h1>
                            <button className="bg-blue-700 text-sm px-2 text-white rounded-full ">Sector 2</button>
                        </div>
                        <p className="text-justify text-sm py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod commodo lectus, id ullamcorper orci ultrices vel. Ut nec enim vitae turpis consequat bibendum id id velit.</p>
                        <div className="flex justify-between text-sm font-semibold">
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
                    <div className="w-24 text-right"><p className="text-blue-700 font-semibold text-sm">2 min ago</p></div>
                </div>
            </div>
            {/* 3rd div */}
            <div className="p-2 border-b-4 border-r-4 border-t rounded-md border-gray-300 px-5 mb-10">
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
                            <h1 className="text-lg font-semibold py-2">lorem Ipsum</h1>
                            <button className="bg-blue-700 text-sm px-2 text-white rounded-full ">Sector 2</button>
                        </div>
                        <p className="text-justify text-sm py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod commodo lectus, id ullamcorper orci ultrices vel. Ut nec enim vitae turpis consequat bibendum id id velit.</p>
                        <div className="flex justify-between text-sm font-semibold">
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
                    <div className="w-24 text-right"><p className="text-blue-700 font-semibold text-sm">2 min ago</p></div>
                </div>
            </div>
            {/* 4th div */}
            <div className="p-2 border-b-4 border-r-4 border-t rounded-md border-gray-300 px-5 mb-10">
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
                            <h1 className="text-lg font-semibold py-2">lorem Ipsum</h1>
                            <button className="bg-blue-700 text-sm px-2 text-white rounded-full ">Sector 2</button>
                        </div>
                        <p className="text-justify text-sm py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod commodo lectus, id ullamcorper orci ultrices vel. Ut nec enim vitae turpis consequat bibendum id id velit.</p>
                        <div className="flex justify-between text-sm font-semibold">
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
                    <div className="w-24 text-right"><p className="text-blue-700 font-semibold text-sm">2 min ago</p></div>
                </div>
            </div>
        </div>
    );
};

export default Disscussion;