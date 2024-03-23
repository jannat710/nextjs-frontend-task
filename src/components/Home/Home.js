"use client"
import { useState } from "react";
import SideMenu from "../shared/SideMenu/SideMenu";
import Disscussion from "./Discussion/Disscussion";
import Stories from "./Stories/Stories";

const Home = () => {
    const [activeDiscussion, setActiveDiscussion] = useState(false);
    const [activeStories, setActiveStories] = useState(false);

    const handleActiveDiscussion = () => {
        setActiveDiscussion(true);
        setActiveStories(false);
    };

    const handleActiveStories = () => {
        setActiveStories(true);
        setActiveDiscussion(false);
    };

    return (
        <div>
            <div className="flex overflow-hidden">
                <SideMenu />
                <div>
                    <div className="navbar flex md:justify-between w-full mx-auto">
                        <div className="">
                            <button onClick={handleActiveDiscussion} className={`btn rounded-none text-base md:text-2xl font-bold ${activeDiscussion ? 'bg-blue-950 text-white border-b-red-800 border-b-4' : 'bg-blue-900 text-white'} my-2 uppercase`}>Discussion Forum</button>
                        </div>
                        <div className="">
                            <button onClick={handleActiveStories} className={`btn rounded-none text-base md:text-2xl font-bold ${activeStories ? 'bg-blue-950 text-white border-b-red-800 border-b-4' : 'bg-blue-900 text-white'} my-2 uppercase`}>Market Stories</button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-32 lg:gap-52">
                        <div className={activeStories ? 'hidden' : ''}>
                            <Disscussion />
                        </div>
                        <div className={activeDiscussion ? 'hidden' : ''}>
                            <Stories />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
