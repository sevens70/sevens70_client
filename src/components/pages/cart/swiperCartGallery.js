"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// const slides = [
//   "https://picsum.photos/1920/1080",
//   "https://picsum.photos/1920/1081",
//   "https://picsum.photos/1920/1082",
//   "https://picsum.photos/1920/1083",
//   "https://picsum.photos/1920/1084",
// ];

export default function SwiperCartGallery({ singleProduct }) {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);
  return (
    <div className="cart_swiper-area" style={{ width: "100%", height: "100%" }}>
      <section className="slider">
        <div className="slider__flex">
          <div className="slider__col">
            <div className="slider__thumbs">
              <Swiper
                onSwiper={setImagesNavSlider}
                direction="vertical"
                spaceBetween={24}
                slidesPerView={3}
                loop={true}
                navigation={{
                  nextEl: ".slider__next",
                  prevEl: ".slider__prev",
                }}
                className="swiper-container1"
                breakpoints={{
                  0: {
                    direction: "horizontal",
                  },
                  768: {
                    direction: "vertical",
                  },
                }}
                modules={[Navigation, Thumbs]}
              >
                {singleProduct.images?.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="slider__image">
                        <img src={slide} alt="" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* <div className="slider__next">Next</div> */}
          </div>

          <div className="slider__images">
            <Swiper
              thumbs={{
                swiper:
                  imagesNavSlider && !imagesNavSlider.destroyed
                    ? imagesNavSlider
                    : null,
              }}
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={32}
              loop={true}
              // mousewheel={true}
              navigation={{
                nextEl: ".slider__next",
                prevEl: ".slider__prev",
              }}
              breakpoints={{
                0: {
                  direction: "horizontal",
                },
                768: {
                  direction: "horizontal",
                },
              }}
              className="swiper-container2"
              modules={[Navigation, Thumbs, Mousewheel]}
            >
              {singleProduct?.images?.map((slide, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="slider__image">
                      <img src={slide} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
              <div className="slider__prev absolute top-1/2 left-3 bg-primaryRed z-[1000]">
                <MdKeyboardArrowLeft className="fill-white" />
              </div>
              <div className="slider__next absolute top-1/2 right-3 bg-primaryRed z-[1000]">
                <MdKeyboardArrowRight className="fill-white" />
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
