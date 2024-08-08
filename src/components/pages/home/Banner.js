"use client";
import Slider from "../../../components/Slider";
import { SwiperSlide } from "swiper/react";
import { Button } from "@material-tailwind/react";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const slidersInfo = [
  {
    // bg: "/assets/images/slider-bg-one.webp",
    img: "./bannerImg.png",
    title: `Style Haven Unveiled Your Exclusive Dress Fashion`,
    subtitle:
      "Crafted to convey a sense of discovery and exclusivity, enticing readers to explore indulge in the latest trends and offerings. The term suggests a grand reveal , adding",
    route: "/",
  },
  {
    // bg: "/assets/images/slider-bg-two.webp",
    img: "./bannerImg.png",
    title: "Industrial Contractor",
    subtitle:
      "With a reputation for delivering innovative solutions and unmatched expertise, our industrial contractor seamlessly transforms visions into reality, setting new standards of excellence in every project.",
    route: "/",
  },
  {
    // bg: "/assets/images/slider-bg-three.webp",
    img: "./bannerImg.png",
    title: "All Construction Services",
    subtitle:
      "From construction groundbreaking to construction cleaning services, our construction services company brings your vision to life with precision and expertise.",
    route: "/",
  },
];
function Banner() {
  return (
    <Slider
      className="overflow-hidden"
      id="home-banner-slider"
      spaceBetween={30}
      style={{
        "--swiper-navigation-size": "18px",
        "--swiper-theme-color": "black-dark-900",
        // "--swiper-navigation-top-offset": "50%",
        // "--swiper-navigation-sides-offset": "10px",
      }}
    >
      {slidersInfo.map((item, key) => (
        <SwiperSlide key={key} className="h-full">
          <div className="">
            <section className="md:pt-10 w-full bg-pageBg relative ">
              <div
                className="absolute top-0 left-0"
                style={{
                  background:
                    "linear-gradient(180deg, #DA3F3F -3528%, #F7E9E9 100%)",
                  height: "300px",
                  width: "300px",
                  borderRadius: "0% 10% 48% 0%",
                }}
              ></div>

              <div className="w-11/12 md:w-10/12 mx-auto">
                {" "}
                <div className=" flex flex-col-reverse md:flex-row lg:gap-16 md:gap:8 gap:4 relative">
                  <div className="basis-3/5 mt-3 flex flex-col justify-center items-start">
                    <Button className="font-jost rounded-full bg-light-100 !h-[48px] mb-5 flex items-center text-md font-medium text-dark-500">
                      <img
                        src={"./discount.png"}
                        alt={"discount"}
                        className="h-5 w-5 mr-2 rounded-full object-cover"
                      />
                      50% OFF{" "}
                      <span className="ml-2 md:hidden hidden lg:block font-normal normal-case">
                        {" "}
                        Summer Super Sale
                      </span>
                    </Button>
                    <h2 className="font-medium text-4xl  md:text-5xl lg:text-6xl lg:leading-[70px] ">
                      {item.title}
                    </h2>
                    <p className="text-dark-300 text-[20px] mt-3">
                      Crafted to convey a sense of discovery and exclusivity,
                      enticing readers to explore indulge in the latest trends
                      and offerings. The term suggests a grand reveal , adding.
                    </p>
                    <Button
                      size="md"
                      className="font-jost font-medium text-sm capitalize bg-primaryRed rounded mt-5 flex items-center gap-2"
                    >
                      Shop Now <FaLongArrowAltRight className="fill-white" />
                    </Button>
                  </div>
                  <div
                    className="pt-8
      !rounded-tl-48 !rounded-tr-48
        flex-grow flex justify-center"
                    style={{
                      background:
                        "linear-gradient(180deg, #DA3F3F -3528%, #F7E9E9 100%)",
                    }}
                  >
                    {" "}
                    <img
                      priority="true"
                      src={item.img}
                      alt=""
                      // className="object-cover object-center bg-dark-500 "
                      width={300}
                      height={300}
                      // className="max-w-[150px] w-full h-full"
                      // width={300}
                      // height={300}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
}

export default Banner;
