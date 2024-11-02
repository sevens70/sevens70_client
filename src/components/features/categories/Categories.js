"use client";
import React from "react";
// import img1 from "cate1.png";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { GoDotFill } from "react-icons/go";
// import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
// import selectAllProducts from "../../"
import {
  selectAllProducts,
  selectProductListStatus,
} from "../product/productSlice";
import Slider from "../../Slider";
import { useAppSelector } from "../../../lib/hooks";
import Loader from "../../common/Loader";
// import Loader from "../../common/Loader";
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
function Categories() {
  const allProducts = useAppSelector(selectAllProducts);
  const status = useAppSelector(selectProductListStatus);
  console.log("allProducts 11", allProducts, status);
  return (
    <div>
      {status === "loading" && <Loader />}
      {status === "failed" && <p>Failed to fetch. Try again later.</p>}
      {status === "success" && (
        <>
          {" "}
          <Slider
            className="overflow-hidden"
            id="category-slider"
            autoPlayEnabled={false}
            pagination={true}
            slidesPerView={6}
            spaceBetween={30}
            autoplay={true}
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
            {allProducts?.map(({ id, category, stock, thumbnail }) => (
              <SwiperSlide key={id} className="h-full">
                <div
                  key={id}
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
                >
                  <Link
                    className="cursor-pointer"
                    href={{
                      pathname: "/shop",
                      query: {
                        category: `${category}`,
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
                          src={thumbnail}
                          alt="category"
                          className="object-cover object-center w-full h-full"
                          loading="lazy"
                        />
                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                      </CardHeader>
                      <CardBody className="text-center p-2">
                        <h6>{category}</h6>
                        <p className="flex justify-center items-center text-sm text-grey-600">
                          <GoDotFill className="fill-primaryRed" />
                          {`${stock}+ Item`}
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
        </>
      )}
    </div>
  );
}

export default Categories;
