"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import Slider from "../../Slider";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useAppSelector } from "../../../lib/hooks";
import { selectRatingItems } from "../../features/ratings/ratingsSlice";
import Avatar from "react-avatar";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 1,
  },
  639: {
    slidesPerView: 2,
  },
  865: {
    slidesPerView: 2,
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

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="yellow"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Client() {
  const clientData = useAppSelector(selectRatingItems);
  console.log("1234 clientData", clientData);
  return (
    <section className="w-11/12 mt-10 pb-10 relative md:w-10/12 mx-auto">
      <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
        <div>
          <h6 className="text-center text-grey-700">Feedback</h6>
          <h3 className="text-xmd mt-2">Happy Clients</h3>
        </div>
      </div>
      {/* <div className="grid grid-cols-12 gap-4 mt-7"> */}
      <Slider
        className="overflow-hidden"
        id="client-slider"
        autoPlayEnabled={false}
        pagination={true}
        slidesPerView={6}
        spaceBetween={30}
        autoplay={false}
        breakpoints={breakpoints}
        modules={[Autoplay, Navigation, Pagination]}
        navigation={false}
        style={{
          "--swiper-navigation-size": "18px",
          "--swiper-theme-color": "black-dark-900",
        }}
      >
        {" "}
        {clientData?.map(({ product, rating, comment, user }, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <div key={idx} className="group">
              <Card className="p-5 shadow-sm">
                <CardHeader floated={false} className="shadow-none !m-0">
                  <div className="flex items-center gap-0">
                    {Array.from({ length: rating }).map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                  <h6 className="text-left text-dark-900 mt-2">
                    {product?.title}
                  </h6>
                  <p className="text-sm text-grey-700 mt-1">{comment}</p>
                </CardHeader>
                <CardBody className="mx-0 flex items-start gap-3 mt-5 p-0">
                  {/* <Avatar size="md" variant="circular" src={img} /> */}
                  {/* <AvatarComponent name="Anamul Haque" /> */}
                  <div className="custom__avatar-area">
                    {" "}
                    <Avatar
                      className="custom__avatar !bg-[#fafafa] text-black"
                      size="60"
                      round={true}
                      name={user?.name}
                    />
                  </div>

                  <div className="flex w-full flex-col gap-0.5">
                    <p className="text-sm text-dark-900 font-medium">
                      {user?.name}
                    </p>
                    <p className="text-xsm text-grey-700 ">Buyer</p>
                  </div>
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

export default Client;
