"use client";
import {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect, useState } from "react";

export default ({
  children,
  spaceBetween = 0,
  slidesPerView = 1,
  navigation = true,
  autoPlayEnabled = false,
  pagination = false,
  modules = [Navigation, Autoplay, EffectFade, Pagination],
  ...rest
}) => {
  const paginationRef = useRef(null);
  const [paginationConfig, setPaginationConfig] = useState(false);

  useEffect(() => {
    if (pagination && paginationRef.current) {
      setPaginationConfig({
        clickable: true,
        el: paginationRef.current,
        dynamicBullets: false,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
      });
    }
  }, [pagination, paginationRef.current]);

  return (
    <div className="">
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        effect="fade"
        loop={true}
        autoplay={autoPlayEnabled ? { delay: 3000 } : false}
        navigation={navigation}
        pagination={paginationConfig}
        modules={modules}
        {...rest}
      >
        {children}
      </Swiper>
      <div className="swiper-custom-pagination" ref={paginationRef}></div>
    </div>
  );
};
