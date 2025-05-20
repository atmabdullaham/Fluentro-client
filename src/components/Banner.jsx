// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import imageOne from "../assets/image1.png";
import imageTwo from "../assets/image2.png";
import imageThree from "../assets/image3.png";
import Slide from "./Slide";

const Banner = () => {
  return (
    <div className="bg-base-200 ">
      <div className="container px-6 py-10 mx-auto lg:w-10/12 pb-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide
              image={imageOne}
              text="Start Learning. Stay Curious. Succeed Online"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={imageTwo}
              text="Confused About Learning Online? Let Us Guide You!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={imageThree} text="From Questions to Confidence " />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
