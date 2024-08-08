"use client";
import React from "react";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { GoDotFill } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";

const brand = [
  {
    img: "./brand/b1.png",
  },
  {
    img: "./brand/b2.png",
  },
  {
    img: "./brand/b3.png",
  },
  {
    img: "./brand/b4.png",
  },
  {
    img: "./brand/b5.png",
  },
  {
    img: "./brand/b6.png",
  },
];
function Brand() {
  return (
    <section className="w-11/12 mt-16 md:w-10/12 mx-auto">
      <div className="divide-y divide-dashed border border-1"></div>

      <div className="grid grid-cols-12 gap-4 my-12">
        {brand.map(({ img }, idx) => (
          <div
            key={idx}
            className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2"
          >
            <Card className="shadow-none">
              <CardHeader className="!rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none !m-0">
                <img
                  src={img}
                  alt="profile-picture"
                  className="object-cover object-center w-full h-full max-w-[100px]"
                  height={100}
                  width={100}
                />
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brand;
