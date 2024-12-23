// ImageSlider.js
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 2,
  },
  639: {
    slidesPerView: 2,
  },
  865: {
    slidesPerView: 3,
  },
  1000: {
    slidesPerView: 3,
  },
  1500: {
    slidesPerView: 3,
  },
  1700: {
    slidesPerView: 3,
  },
};
const ImagesSlider = ({
  products,
  selectedProducts,
  setSelectedProducts,
  // handleProductClick,
}) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={12}
        navigation={true} // if it is false side button will be enabled
        loading="lazy"
        autoplay={{ delay: 3000 }}
        //   pagination={{ clickable: false }}
        pagination={false}
        breakpoints={breakpoints}
        modules={[Autoplay, Navigation, Pagination]}
        className="overflow-hidden"
      >
        {products?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center items-center">
              <img
                onClick={() => {
                  if (selectedProducts.find((p) => p.id === item.id)) {
                    setSelectedProducts(
                      selectedProducts.filter((p) => p.id !== item.id)
                    );
                  } else {
                    setSelectedProducts([...selectedProducts, item]);
                  }
                }}
                src={item?.image}
                alt={`Slide ${idx + 1}`}
                className="w-full h-auto max-h-[250px] object-contain cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="swiper-custom-pagination"></div>
      </div>
    </div>
  );
};

export default ImagesSlider;
