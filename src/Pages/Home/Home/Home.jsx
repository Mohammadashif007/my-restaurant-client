import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import FeatureFood from "../FeatureFood/FeatureFood";
import FeatureItems from "../FeatureItems/FeatureItems";
import PopularItem from "../PopularItem/PopularItem";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
            <FeatureFood></FeatureFood>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
            <FeatureItems></FeatureItems>
            <PopularItem></PopularItem>
            <SectionTitle heading={"TESTIMONIALS"} subHeading={"What Our Clients Say"}></SectionTitle>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;