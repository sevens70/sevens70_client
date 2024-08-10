import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperCartGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  useEffect(() => {
    if (mainSwiper && thumbsSwiper) {
      // Safe to apply thumbs synchronization now
      mainSwiper.thumbs.swiper = thumbsSwiper;
      mainSwiper.thumbs.init();
      mainSwiper.thumbs.update();
    }
  }, [mainSwiper, thumbsSwiper]);

  return (
    <div className="flex gap-3 gallery-container">
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper cardImgArea gallery-thumbs"
      >
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            alt="nature"
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setMainSwiper}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 gallery-main"
      >
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            alt="nature"
          />
        </SwiperSlide>
        <SwiperSlide className="cardImg">
          <img
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            alt="nature"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
