// "use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  //   EffectFade,
  //   Grid,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderWithContent = ({ products }) => {
  return (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left px-4 py-10 bg-dark text-white">
      {/* Content Section */}
      <div className="w-full md:w-3/5 px-4 md:px-8 lg:pl-[200px]">
        <h1 className="text-left mt-8 text-white font-bold text-xl sm:text-3xl lg:text-4xl mb-6">
          সুরক্ষার প্রতিশ্রুতি,
          <br />
          <span className="text-white text-2xl sm:text-4xl mt-4">
            স্টাইলের আত্মবিশ্বাস।
          </span>
        </h1>
        <p className="text-white text-left text-sm sm:text-base mb-4">
          আপনার সন্তানের চোখ থাকবে UV রশ্মি থেকে ১০০% সুরক্ষিত, আর মজবুত ও
          আরামদায়ক ফ্রেমের সঙ্গে তারা উপভোগ করবে ফ্যাশনের সেরা অভিজ্ঞতা।
        </p>
      </div>

      {/* Slider Section */}
      <div className="w-full md:w-2/5 relative">
        <Swiper
          slidesPerView={2}
          spaceBetween={12}
          navigation={true} // if it is false side button will be enabled
          loading="lazy"
          autoplay={{ delay: 3000 }}
          //   autoplay={false}
          //   pagination={{ clickable: false }}
          pagination={false}
          modules={[Autoplay, Navigation, Pagination]}
          className="overflow-hidden"
        >
          {products?.map(({ image }, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex justify-center items-center">
                <img
                  src={image}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-auto max-h-[250px] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="swiper-custom-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default SliderWithContent;
