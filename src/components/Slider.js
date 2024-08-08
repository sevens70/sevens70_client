"use client";
// Import Swiper React components
import {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper } from "swiper/react";
// Import Swiper styles
import { MdOutlineNavigateNext } from "react-icons/md";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GrFormPrevious } from "react-icons/gr";

export default ({
  children,
  spaceBetween = 0,
  slidesPerView = 1,
  navigation = true,
  autoPlayEnabled = false, // Renamed from Autoplay
  // pagination = {
  //   clickable: true,
  //   el: ".swiper-custom-pagination",
  //   dynamicBullets: false,
  //   bulletClass: "swiper-pagination-bullet",
  //   bulletActiveClass: "swiper-pagination-bullet-active",
  // },
  pagination = false,
  modules = [Navigation, Autoplay, EffectFade, Pagination],
  ...rest
}) => {
  console.log("spaceBetween", spaceBetween, slidesPerView, rest, pagination);
  const paginationConfig = pagination
    ? {
        clickable: true,
        el: ".swiper-custom-pagination", // Custom pagination container
        dynamicBullets: false,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      }
    : false;
  return (
    <div className="">
      {" "}
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        effect="fade"
        loop={true}
        autoplay={autoPlayEnabled ? { delay: 3000 } : false} // Use renamed prop
        navigation={navigation}
        pagination={paginationConfig}
        modules={modules} // Use the modules prop directly
        {...rest}
      >
        {children}
      </Swiper>
    </div>
  );
};
