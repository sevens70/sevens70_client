"use client";
import React from "react";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import Slider from "../../Slider";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { allBrand } from "../../features/product/productSlice";
import { useAppSelector } from "../../../lib/hooks";
import Link from "next/link";
const breakpoints = {
  0: {
    slidesPerView: 3,
  },
  400: {
    slidesPerView: 4,
  },
  639: {
    slidesPerView: 4,
  },
  865: {
    slidesPerView: 5,
  },
  1000: {
    slidesPerView: 6,
  },
  1500: {
    slidesPerView: 6,
  },
  1700: {
    slidesPerView: 6,
  },
};
function Brand() {
  const allBrandData = useAppSelector(allBrand);
  return (
    <section className="w-11/12 pb-10  relative md:w-10/12 mx-auto">
      <div className="divide-y divide-dashed border border-1 my-12 "></div>

      {/* <div className="grid grid-cols-12 gap-4 my-12"> */}
      <Slider
        className="overflow-hidden"
        id="home-banner-slider"
        autoPlayEnabled={false}
        pagination={false}
        slidesPerView={6}
        spaceBetween={30}
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
        {allBrandData?.map(({ image, name }, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <div
              key={idx}
              className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2"
            >
              <Card className="shadow-none">
                <CardHeader className="!rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none !m-0">
                  <Link
                    className="cursor-pointer"
                    href={{
                      pathname: "/shop",
                      query: {
                        brand: `${name.toLowerCase()}`,
                      },
                    }}
                  >
                    {" "}
                    <img
                      src={image}
                      alt="profile-picture"
                      className="object-cover object-center w-full h-full max-w-[100px]"
                      height={100}
                      width={100}
                    />
                  </Link>
                </CardHeader>
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

export default Brand;
