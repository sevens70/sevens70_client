"use client";
import { Button } from "@material-tailwind/react";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import Slider from "../../Slider";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const shop = [
  {
    tag: "New Arrivals",
    title: "Natural Luxury Summer Denim Jacket",
    text: "25% Discount This Week",
    img: "/shop/s1.png",
  },
  {
    tag: "Big Sale",
    title: "Hot Summer Sale Collections",
    text: "25% Discount This Week",
    img: "/shop/s2.png",
  },
  {
    tag: "Big Sale",
    title: "Hot Summer Sale Collections",
    text: "25% Discount This Week",
    img: "/shop/s2.png",
  },
];
const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 1,
  },
  639: {
    slidesPerView: 1,
  },
  865: {
    slidesPerView: 1,
  },
  1000: {
    slidesPerView: 2,
  },
  1500: {
    slidesPerView: 2,
  },
  1700: {
    slidesPerView: 2,
  },
};
function Shop() {
  return (
    <section className="w-11/12 mt-10 md:w-10/12 mx-auto">
      <Slider
        className="overflow-hidden"
        id="shop-slider"
        pagination={false}
        slidesPerView={2}
        spaceBetween={10}
        autoPlayEnabled={false}
        autoplay={true}
        breakpoints={breakpoints}
        modules={[Autoplay, Navigation, Pagination]}
        navigation={false}
        style={{
          "--swiper-navigation-size": "18px",
          "--swiper-theme-color": "black-dark-900",
        }}
      >
        {" "}
        {shop.map(({ tag, title, text, img }, idx) => (
          <SwiperSlide key={idx} className="h-full">
            {" "}
            <div key={idx} className="bg-light-200 rounded-xl">
              <div className="px-5 py-0 h-auto flex flex-col-reverse md:flex-row gap:3">
                <div className="basis-4/5 flex flex-col justify-center items-start py-3">
                  <p className="text-primaryRed text-xsm mb-1">{tag}</p>
                  <h5 className="font-medium text-md">{title}</h5>
                  <p className="text-dark-300 text-xsm mt-3">{text}</p>
                  <Button
                    size="md"
                    className="font-jost capitalize text-sm font-normal bg-white text-dark-700 rounded mt-5 flex items-center gap-2"
                  >
                    Shop Now{" "}
                    <FaLongArrowAltRight className="fill-text-dark-700" />
                  </Button>
                </div>
                <div className="flex-grow flex justify-center">
                  <img
                    className="h-[300px] w-[300px]"
                    src={img}
                    alt="img"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="swiper-custom-pagination"></div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Shop;
