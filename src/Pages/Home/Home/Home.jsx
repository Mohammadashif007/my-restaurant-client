import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import FeatureFood from "../FeatureFood/FeatureFood";
import PopularItem from "../PopularItem/PopularItem";
import Testimonials from "../Testimonials/Testimonials";
import PopularCategory from "../PopularCategory/PopularCategory";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant App | Home</title>
            </Helmet>
            <Banner></Banner>
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
            <FeatureFood></FeatureFood>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
            <PopularCategory></PopularCategory>
            <PopularItem></PopularItem>
            <SectionTitle heading={"TESTIMONIALS"} subHeading={"What Our Clients Say"}></SectionTitle>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;