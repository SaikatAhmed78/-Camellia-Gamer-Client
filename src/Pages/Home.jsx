import Banner from "../Components/Banner";
import ExtraSectionOne from "../Components/ExtraSectionOne";
import ExtraSectionTwo from "../Components/ExtraSectionTwo";
import HighestRated from "../Components/HighestRated";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <HighestRated></HighestRated>
            <ExtraSectionOne></ExtraSectionOne>
            <ExtraSectionTwo></ExtraSectionTwo>
        </div>
    );
};

export default Home;