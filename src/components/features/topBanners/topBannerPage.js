"use client";
import Slider from "../../../components/Slider";
import { SwiperSlide } from "swiper/react";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useAppSelector } from "../../../lib/hooks";
import Loader from "../../common/Loader";
import { allTopBanner } from "./topBannersSlice";

function TopBanner() {
  const banners = useAppSelector(allTopBanner) || [];
  return (
    <div className="pb-0 relative">
      <Slider
        className="overflow-hidden"
        id="home-banner-slider"
        slidesPerView={1}
        spaceBetween={30}
        autoplay={false}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        style={{
          "--swiper-navigation-size": "18px",
          "--swiper-theme-color": "black-dark-900",
        }}
      >
        {banners === "loading" && <Loader />}
        {Array.isArray(banners) &&
          banners?.map((item, key) => (
            <SwiperSlide key={key} className="h-full">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                <img
                  src={item.bannerImage}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        {Array.isArray(banners) && banners?.length === 0 && (
          <div className="w-full h-[300px] bg-grey-300 md:h-[400px] lg:h-[500px] overflow-hidden"></div>
        )}
      </Slider>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="swiper-custom-pagination"></div>
      </div>
    </div>
  );
}

export default TopBanner;
