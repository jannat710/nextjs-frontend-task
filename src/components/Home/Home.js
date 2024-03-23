import SideMenu from "../shared/SideMenu/SideMenu";
import Disscussion from "./Discussion/Disscussion";
import Navbar from "./Navbar/Navbar";
import Stories from "./Stories/Stories";


const Home = () => {
    return (
        <div>

            <div className="flex overflow-hidden">
                <SideMenu></SideMenu>
                <div>
                    <Navbar></Navbar>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-32">
                        <Disscussion></Disscussion>
                        <Stories></Stories>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;