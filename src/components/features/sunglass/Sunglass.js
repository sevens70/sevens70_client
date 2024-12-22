"use client";
import React, { useState } from "react";
import SunglassBanner from "./SunglassBanner";
import Headline from "./Headline";
// import SliderPage from "./SliderPage";
import CardReviews from "./CardReviews";
import OrderForm from "./OrderForm";
// import DeliverySection from "./DeliverySection";
// import FooterSection from "./FooterSection";
export default function Sunglass() {
  const [selectedProducts, setSelectedProducts] = useState([]);
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
        <Headline
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
        {/* <DeliverySection /> */}
        {/* <SliderPage /> */}
        <CardReviews />
        <OrderForm
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
        {/* <FooterSection /> */}
        {/* ); */}
      </div>
    </div>
  );
}
