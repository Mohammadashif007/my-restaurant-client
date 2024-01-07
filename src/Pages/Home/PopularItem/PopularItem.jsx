import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const PopularItem = () => {
    return (
        <div
            className="hero h-[650px] "
            style={{
                backgroundImage:
                    `url(${featuredImg})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <SectionTitle
                        subHeading={"Check it out"}
                        heading={"FROM OUR MENU"}
                    ></SectionTitle>
                    <div className="flex gap-5 items-center">
                        <div className="text-end">
                            <img className="w-5/6" src={featuredImg} alt="" />
                        </div>
                        <div className="text-start">
                            <h2 className="text-2xl">March 20, 2023</h2>
                            <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularItem;
