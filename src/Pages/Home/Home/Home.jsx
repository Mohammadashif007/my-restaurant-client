import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import FeatureFood from "../FeatureFood/FeatureFood";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
            <FeatureFood></FeatureFood>
        </div>
    );
};

export default Home;