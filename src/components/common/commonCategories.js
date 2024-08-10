"use client";
import React from "react";
// import img1 from "cate1.png";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { GoDotFill } from "react-icons/go";
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 2,
  },
  639: {
    slidesPerView: 3,
  },
  865: {
    slidesPerView: 4,
  },
  1000: {
    slidesPerView: 5,
  },
  1500: {
    slidesPerView: 6,
  },
  1700: {
    slidesPerView: 6,
  },
};
function CommonCategories() {
  const category = [
    {
      name: "New Arrival",
      qunatity: "20+ Item",
      img: "./category/cate1.png",
    },
    {
      name: "Woman",
      qunatity: "20+ Item",
      img: "./category/cate2.png",
    },
    {
      name: "Man",
      qunatity: "20+ Item",
      img: "./category/cate3.png",
    },
    {
      name: "Kids",
      qunatity: "20+ Item",
      img: "./category/cate4.png",
    },
    {
      name: "Winter Collection",
      qunatity: "20+ Item",
      img: "./category/cate5.png",
    },
    {
      name: "footwear",
      qunatity: "20+ Item",
      img: "./category/cate6.png",
    },
    {
      name: "footwear",
      qunatity: "20+ Item",
      img: "./category/cate6.png",
    },
  ];
  return (
    <div>
      <Slider
        className="overflow-hidden"
        id="category-slider"
        autoPlayEnabled={false}
        pagination={true}
        slidesPerView={6}
        spaceBetween={30}
        autoplay={false}
        breakpoints={breakpoints}
        loading="lazy"
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        style={{
          "--swiper-navigation-size": "18px",
          "--swiper-theme-color": "black-dark-900",
        }}
      >
        {" "}
        {category?.map(({ name, qunatity, img }, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <div
              key={idx}
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
            >
              <Link
                className="cursor-pointer"
                href={{
                  pathname: "/shop",
                  query: {
                    category: `${name}`,
                  },
                }}
              >
                {" "}
                <Card className="h-[300px] shadow-sm">
                  <CardHeader
                    floated={false}
                    className="h-4/5 !m-0 !rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none"
                  >
                    <img
                      src={img}
                      alt="profile-picture"
                      className="object-cover object-center w-full h-full"
                      loading="lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                  </CardHeader>
                  <CardBody className="text-center p-2">
                    <h6>{name}</h6>
                    <p className="flex justify-center items-center text-sm text-grey-600">
                      <GoDotFill className="fill-primaryRed" />
                      {qunatity}
                    </p>
                  </CardBody>
                </Card>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="swiper-custom-pagination"></div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default CommonCategories;
