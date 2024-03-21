import Disscussion from "./Discussion/Disscussion";
import Stories from "./Stories/Stories";


const Home = () => {
    return (
        <div className="flex justify-between gap-20">
            <Disscussion></Disscussion>
            <Stories></Stories>
        </div>
    );
};

export default Home;