import Disscussion from "./Discussion/Disscussion";
import Stories from "./Stories/Stories";


const Home = () => {
    return (
        <div className="flex justify-between">
            <Disscussion></Disscussion>
            <Stories></Stories>
        </div>
    );
};

export default Home;