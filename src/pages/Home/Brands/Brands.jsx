import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import amazon from "../../../assets/images/brands/amazon.png";
import amazon_vector from "../../../assets/images/brands/amazon_vector.png";
import casio from "../../../assets/images/brands/casio.png";
import moonstar from "../../../assets/images/brands/moonstar.png";
import randstad from "../../../assets/images/brands/randstad.png";
import star from "../../../assets/images/brands/star.png";
import start_people from "../../../assets/images/brands/start_people.png";

const brandLogos = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
];

const Brands = () => {
  return (
    <div className="px-5 md:px-10 py-20 bg-base-200/10 rounded-2xl">
      <h2 className="text-4xl font-bold text-center md:mb-10 mb-8">
        We've helped thousands of sales teams
      </h2>

      <Swiper
        slidesPerView={6}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide logo={logo} key={index}>
            <img src={logo} alt="" className="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
