"use client";
import { Button } from "@material-tailwind/react";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const shop = [
  {
    tag: "New Arrivals",
    title: "Natural Luxury Summer Denim Jacket",
    text: "25% Discount This Week",
    img: "./shop/s1.png",
  },
  {
    tag: "Big Sale",
    title: "Hot Summer Sale Collections",
    text: "25% Discount This Week",
    img: "./shop/s2.png",
  },
];
function Shop() {
  return (
    <section className="w-11/12 mt-20 md:w-10/12 mx-auto">
      <div className="grid grid-cols-12 gap-4">
        {shop.map(({ tag, title, text, img }, idx) => (
          <div
            key={idx}
            className="bg-light-200 rounded-xl col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6"
          >
            <div className="px-5 py-0 h-auto flex flex-col-reverse md:flex-row gap:3">
              <div className="flex flex-col justify-center items-start">
                <p className="text-primaryRed text-sm mb-1">{tag}</p>
                <h5
                  className="font-medium"
                  //   style={{ lineHeight: "60px" }}
                >
                  {title}
                </h5>
                <p className="text-dark-300 text-sm mt-3">{text}</p>
                <Button
                  size="md"
                  className="bg-white text-dark-700 rounded mt-5 flex items-center gap-2"
                >
                  Shop Now{" "}
                  <FaLongArrowAltRight className="fill-text-dark-700" />
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="object-cover object-center"
                  src={img}
                  alt="img"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;
