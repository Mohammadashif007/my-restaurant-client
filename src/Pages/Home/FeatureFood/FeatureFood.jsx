
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import image1 from "../../../assets/home/slide1.jpg";
import image2 from "../../../assets/home/slide2.jpg";
import image3 from "../../../assets/home/slide3.jpg";
import image4 from "../../../assets/home/slide4.jpg";
import image5 from "../../../assets/home/slide5.jpg";

const FeatureFood = () => {
    return (
        <div className="my-10">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                    <p className="text-center text-2xl -mt-10 text-white">Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                    <p className="text-center text-2xl -mt-10 text-white">Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="" />
                    <p className="text-center text-2xl -mt-10 text-white">Soup</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="" />
                    <p className="text-center text-2xl -mt-10 text-white">Dessert</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} alt="" />
                    <p className="text-center text-2xl -mt-10 text-white">Salad</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FeatureFood;
