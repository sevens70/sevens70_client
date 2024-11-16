"use client";
import { Button } from "@material-tailwind/react";
import React from "react";
import Slider from "../../Slider";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useAppSelector } from "../../../lib/hooks";
import { selectAllBanner } from "../../features/banners/bannersSlice";
import { useRouter } from "next/navigation";

function Collection() {
  const banners = useAppSelector(selectAllBanner) || [];
  const router = useRouter();
  return (
    <section className="w-11/12 mt-20 md:w-10/12 mx-auto">
      {/* <div className="grid grid-cols-12 gap-4"> */}
      <Slider
        className="overflow-hidden"
        id="home-banner-slider"
        autoPlayEnabled={true}
        pagination={true}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={true}
        modules={[Autoplay, Navigation, Pagination]}
        navigation={false}
        style={{
          "--swiper-navigation-size": "18px",
          "--swiper-theme-color": "black-dark-900",
        }}
      >
        {" "}
        {Array.isArray(banners) &&
          banners.map((item, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <div
                key={idx}
                className="bg-light-200 rounded-xl"
                style={{
                  backgroundImage: `url(${item?.bannerImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="px-5 py-0 h-auto flex flex-col-reverse md:flex-row gap:3">
                  <div className="min-h-[400px] basis-1/2 flex flex-col justify-center items-start py-5">
                    {/* <h6 className="text-primaryRed mb-1">Get {item?.offer}</h6> */}
                    <h6 className="text-primaryRed mb-1"> {item?.offer}</h6>
                    <h2
                      className="capitalize font-medium text-4xl  md:text-5xl lg:text-6xl lg:leading-[70px]"
                      //   style={{ lg:lineHeight: "60px" }}
                    >
                      {item.title}
                      {/* <span className="text-primaryRed">2024</span> */}
                    </h2>
                    <p className="text-dark-900 text-[20px] leading-6 mt-3">
                      {item?.subtitle}
                    </p>
                    <Button
                      onClick={() => router.push("/shop")}
                      size="md"
                      className="font-jost text-sm bg-primaryRed capitalize text-white rounded mt-5 flex items-center gap-2"
                    >
                      Shop Now <FaLongArrowAltRight className="fill-white" />
                    </Button>
                  </div>
                  <div className="flex flex-grow items-end justify-center">
                    <img
                      className="object-cover object-center"
                      src={item?.bannerImage}
                      alt="img"
                      style={{ minHeight: "300px" }}
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

export default Collection;
