import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slide from "./Slide";
import slide1 from "../../assets/images/slide-1.png";
import slide2 from "../../assets/images/slide-2.jpg";
import slide3 from "../../assets/images/slide-3.jpg";
import "./Slider.css";


const slides = [
  { id: 1, path: slide1 },
  { id: 2, path: slide2 },
  { id: 3, path: slide3 },
];

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        spaceBetween={30}
        slidesPerView={1}
        speed={500}
        autoplay={{ delay: 2000 }}
        centeredSlides={true}
        pagination={{ clickable: true, type: "bullets" }}
        className="mySwiper relative"
        modules={[Pagination, Autoplay]}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id} className="swiper-slide ">
              <Slide key={slide.id} path={slide.path} />
              <p className="absolute right-0 top-16 text-3xl font-bold">
                0{slide.id}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <p className="absolute bottom-1/4 right-0 text-3xl font-bold">
        0{slides.length}
      </p>
    </>
  );
};

export default SwiperSlider;
