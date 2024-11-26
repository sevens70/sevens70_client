"use client";
import React from "react";
import SunglassBanner from "./SunglassBanner";
import Headline from "./Headline";
import SliderPage from "./SliderPage";
import CardReviews from "./CardReviews";
import OrderForm from "./OrderForm";
import FooterSection from "./FooterSection";
export default function Sunglass() {
  return (
    <div>
      <div className="mx-auto bg-white ">
        <SunglassBanner />
        <Headline />
        <SliderPage />
        <CardReviews />
        <OrderForm />
        <FooterSection />
        {/* ); */}
      </div>
    </div>
  );
}
