"use client";
import React from "react";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { GoDotFill } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from "../../Slider";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 1,
  },
  639: {
    slidesPerView: 2,
  },
  865: {
    slidesPerView: 2,
  },
  1000: {
    slidesPerView: 2,
  },
  1500: {
    slidesPerView: 3,
  },
  1700: {
    slidesPerView: 3,
  },
};

const articles = [
  {
    name: "The Best Amazon Prime Day Fashion Deals",
    text: "Elevate on shopping experience and enjoy the convenience having your favorite items delivere",
    img: "./articles/a1.png",
    author: "Osars Sam",
    time: "5 days ago",
  },
  {
    name: "Optimizing Your eCommerce for Website SEO",
    text: "Elevate on shopping experience and enjoy the convenience having your favorite items delivere",
    img: "./articles/a2.png",
    author: "Osars Sam",
    time: "5 days ago",
  },
  {
    name: "The Best Amazon Prime Day Fashion Deals",
    text: "Elevate on shopping experience and enjoy the convenience having your favorite items delivere",
    img: "./articles/a3.png",
    author: "Osars Sam",
    time: "5 days ago",
  },
  {
    name: "The Best Amazon Prime Day Fashion Deals",
    text: "Elevate on shopping experience and enjoy the convenience having your favorite items delivere",
    img: "./articles/a3.png",
    author: "Osars Sam",
    time: "5 days ago",
  },
  {
    name: "The Best Amazon Prime Day Fashion Deals",
    text: "Elevate on shopping experience and enjoy the convenience having your favorite items delivere",
    img: "./articles/a3.png",
    author: "Osars Sam",
    time: "5 days ago",
  },
];
function BlogNews() {
  return (
    <section className="w-11/12 mt-20 pb-0 relative md:w-10/12 mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-5 mb-6">
        <div>
          <h6 className="font-normal text-grey-700">Latest Articles</h6>
          <h3
            className="text-xmd text-dark-700 mt-2"
            style={{ lineHeight: "46px" }}
          >
            Explore News & Blog
          </h3>
        </div>
        <Button
          size="sm"
          className="font-jost text-sm bg-transparent font-normal capitalize text-dark-700 border-[1px] border-grey-600 rounded-none"
        >
          See More
        </Button>
      </div>
      {/* <div className="grid grid-cols-12 gap-4"> */}
      <Slider
        className="overflow-hidden"
        id="home-banner-slider"
        autoPlayEnabled={false}
        pagination={false}
        slidesPerView={6}
        spaceBetween={30}
        autoplay={false}
        breakpoints={breakpoints}
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        style={{
          "--swiper-navigation-size": "18px",
          "--swiper-theme-color": "black-dark-900",
        }}
      >
        {" "}
        {articles.map(({ name, text, img, author, time }, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <div
              key={idx}
              className="group col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4"
            >
              <Card className="shadow-sm">
                <CardHeader
                  floated={false}
                  className="basis-3/5 !rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none !m-0"
                >
                  <img
                    src={img}
                    alt="profile-picture"
                    className="object-cover object-center w-full h-full "
                    height={300}
                    width={300}
                  />
                </CardHeader>
                <CardBody className="flex-grow text-left p-2 mt-1">
                  <div className="flex justify-start items-center gap-1">
                    <span className="font-normal text-grey-600 text-sm">
                      By
                    </span>
                    <p className="font-medium text-sm text-grey-700">
                      {author}
                    </p>
                    <p className="flex justify-center items-center text-dark-600 gap-1 text-sm ml-1">
                      <GoDotFill className="fill-primaryRed" />
                      {time}
                    </p>
                  </div>
                  <h6 className="text-left text-dark-900">{name}</h6>
                  <p className="text-sm text-grey-700 mt-1">{text}</p>
                  <Button
                    size="md"
                    className="font-jost text-sm bg-transparent font-normal capitalize text-dark-700  border-[1px] border-grey-600 hover:border-none hover:bg-primaryRed hover:text-white h-[35px] rounded-none mt-5 mb-2 flex items-center gap-2"
                  >
                    Read More{" "}
                    <FaLongArrowAltRight className="fill-text-dark-700" />
                  </Button>
                </CardBody>
              </Card>
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

export default BlogNews;
