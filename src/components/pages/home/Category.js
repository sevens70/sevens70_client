"use client";
import React from "react";
// import img1 from "cate1.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { GoDotFill } from "react-icons/go";
import Slider from "../../Slider";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Category() {
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
    <section className="w-11/12 mt-15 pb-10 relative md:w-10/12 mx-auto">
      <h3 className="text-center text-xmd my-10">Popular Category</h3>
      <Slider
        className="overflow-hidden"
        id="category-slider"
        autoPlayEnabled={false}
        // pagination={{ type: "bullets", clickable: true }}
        // pagination={{
        //   clickable: true,
        //   type: "bullets",
        //   // el: ".swiper-custom-pagination", //it's not work
        //   bulletClass: "bg-amber-400",
        //   bulletActiveClass: "bg-green-400",
        // }}
        pagination={true}
        slidesPerView={6}
        spaceBetween={30}
        autoplay={false}
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
              <Card className="h-[300px] shadow-sm">
                <CardHeader
                  floated={false}
                  className="h-4/5 !m-0 !rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none"
                >
                  <img
                    src={img}
                    alt="profile-picture"
                    className="object-cover object-center w-full h-full"
                  />
                </CardHeader>
                <CardBody className="text-center p-2">
                  <h6>{name}</h6>
                  <p className="flex justify-center items-center text-sm text-grey-600">
                    <GoDotFill className="fill-primaryRed" />
                    {qunatity}
                  </p>
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

export default Category;
