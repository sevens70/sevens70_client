"use client";
import { Button } from "@material-tailwind/react";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const shop = [
  {
    tag: "Get 67% off !",
    title: "Stylish dress collection",
    text: "Crafted to convey a sense of discovery and exclusivity, enticing readers to explore indulge in the latest trends and offerings",
    img: "./collection/collection.png",
  },
  //   {
  //     tag: "Big Sale",
  //     title: "Hot Summer Sale Collections",
  //     text: "25% Discount This Week",
  //     img: "./shop/s2.png",
  //   },
];
function Collection() {
  return (
    <section className="w-11/12 mt-20 md:w-10/12 mx-auto">
      <div className="grid grid-cols-12 gap-4">
        {shop.map(({ tag, title, text, img }, idx) => (
          <div
            key={idx}
            className="bg-light-200 rounded-xl col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12"
          >
            <div className="px-5 py-0 h-auto flex flex-col-reverse md:flex-row gap:3">
              <div className="basis-1/2 flex flex-col justify-center items-start py-5">
                <h6 className="text-primaryRed mb-1">{tag}</h6>
                <h2
                  className="capitalize font-medium text-4xl  md:text-5xl lg:text-6xl lg:leading-[70px]"
                  //   style={{ lg:lineHeight: "60px" }}
                >
                  {title} <span className="text-primaryRed">2024</span>
                </h2>
                <p className="text-dark-900 text-[20px] leading-6 mt-3">{text}</p>
                <Button
                  size="md"
                  className="font-jost text-sm bg-primaryRed capitalize text-white rounded mt-5 flex items-center gap-2"
                >
                  Shop Now <FaLongArrowAltRight className="fill-white" />
                </Button>
              </div>
              <div className="flex flex-grow items-end justify-center">
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

export default Collection;
