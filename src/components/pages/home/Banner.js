"use client";
import Slider from "../../../components/Slider";
import { SwiperSlide } from "swiper/react";
import { Button } from "@material-tailwind/react";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const slidersInfo = [
  {
    img: "/bannerImg.png",
    title: `Style Haven Unveiled Your Exclusive Dress Fashion`,
    offer: "50% Off",
    tag: "Summer Super Sale",
    subtitle:
      "Crafted to convey a sense of discovery and exclusivity, enticing readers to explore indulge in the latest trends and offerings. The term suggests a grand reveal , adding",
    route: "/",
  },
  {
    img: "/bannerImg.png",
    title: "Industrial Contractor",
    offer: "50% OFF",
    tag: "Summer Super Sale",
    subtitle:
      "With a reputation for delivering innovative solutions and unmatched expertise, our industrial contractor seamlessly transforms visions into reality, setting new standards of excellence in every project.",
    route: "/",
  },
  {
    img: "/bannerImg.png",
    title: "All Construction Services",
    offer: "50% OFF",
    tag: "Summer Super Sale",
    subtitle:
      "From construction groundbreaking to construction cleaning services, our construction services company brings your vision to life with precision and expertise.",
    route: "/",
  },
];
function Banner() {
  return (
    <div className="pb-0 relative">
      <Slider
        className="overflow-hidden"
        id="home-banner-slider"
        slidesPerView={1}
        spaceBetween={30}
        autoplay={true}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        style={{
          "--swiper-navigation-size": "18px",
          "--swiper-theme-color": "black-dark-900",
        }}
      >
        {slidersInfo.map((item, key) => (
          <SwiperSlide key={key} className="h-full">
            <div className="">
              <section className="md:pt-10 w-full bg-pageBg relative ">
                <div
                  className="absolute top-0 left-0 bannerLeft-bg px-5"
                  style={{
                    background: `linear-gradient(to top, rgba(255,0,0,0) 10%, rgba(255,0,0,0.1) 90%)`,
                    height: "285px",
                    width: "502px",
                    borderTopLeftRadius: "700px",
                    borderTopRightRadius: "736px",
                    transform: "rotate(122deg)",
                  }}
                ></div>

                <div className="w-11/12 md:w-10/12 mx-auto">
                  {" "}
                  <div className="flex flex-col-reverse md:flex-row 2xl:gap-16 lg:gap:12 relative">
                    <div className="basis-3/5 my-5 flex flex-col justify-center items-start">
                      <Button className="font-jost rounded-full bg-light-100 !h-[48px] mb-5 flex items-center text-md font-medium text-dark-500 uppercase">
                        <img
                          src={"./discount.png"}
                          alt={"discount"}
                          className="h-5 w-5 mr-2 rounded-full object-cover"
                        />
                        {item.offer}
                        <span className="ml-2 md:hidden hidden lg:block font-normal normal-case capitalize">
                          {" "}
                          {item.tag}
                        </span>
                      </Button>
                      <h2 className="font-medium text-4xl  md:text-5xl lg:text-6xl lg:leading-[70px] ">
                        {item.title}
                      </h2>
                      <p className="text-dark-300 text-[20px] mt-3">
                        Crafted to convey a sense of discovery and exclusivity,
                        enticing readers to explore indulge in the latest trends
                        and offerings. The term suggests a grand reveal ,
                        adding.
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
                       flex-grow flex justify-center"
                      style={{
                        background: `linear-gradient(to top, rgba(255,0,0,0) 10%, rgba(255,0,0,0.1) 90%)`,
                        borderTopLeftRadius: "1000px",
                        borderTopRightRadius: "1000px",
                      }}
                    >
                      {" "}
                      <img
                        priority="true"
                        src={item.img}
                        alt="banner"
                        // className="object-cover object-center bg-dark-500 "
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="swiper-custom-pagination"></div>
      </div>
    </div>
  );
}

export default Banner;
