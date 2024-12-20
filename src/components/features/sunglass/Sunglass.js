"use client";
import React from "react";
import SunglassBanner from "./SunglassBanner";
import Headline from "./Headline";
import SliderPage from "./SliderPage";
import CardReviews from "./CardReviews";
import OrderForm from "./OrderForm";
import DeliverySection from "./DeliverySection";
import FooterSection from "./FooterSection";
export default function Sunglass() {
  return (
    <div>
      <div className="mx-auto bg-white ">
        {/* <div className="py-5 flex justify-center">
          {" "}
          <img
            priority="true"
            src="/sunglass/logo.png"
            alt="logo"
            className="max-w-[250px] w-full h-full"
          />
        </div> */}
        <SunglassBanner />
        <Headline />
        {/* <DeliverySection /> */}
        {/* <SliderPage /> */}
        <CardReviews />
        <OrderForm />
        {/* <FooterSection /> */}
        {/* ); */}
      </div>
    </div>
  );
}
