"use client";
import React from "react";
// import img1 from "cate1.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { GoDotFill } from "react-icons/go";

function Category() {
  const category = [
    {
      name: "New Arrival",
      qunatity: "20+ Item",
      img: "./category/cate1.png",
    },
    {
      name: "Woman",
      qunatity: "20+ Item",
      img: "./category/cate2.png",
    },
    {
      name: "Man",
      qunatity: "20+ Item",
      img: "./category/cate3.png",
    },
    {
      name: "Kids",
      qunatity: "20+ Item",
      img: "./category/cate4.png",
    },
    {
      name: "Winter Collection",
      qunatity: "20+ Item",
      img: "./category/cate5.png",
    },
    {
      name: "footwear",
      qunatity: "20+ Item",
      img: "./category/cate6.png",
    },
  ];
  return (
    <section className="w-11/12 mt-10 md:w-10/12 mx-auto">
      <h3 className="text-center mb-6">Popular Category</h3>
      <div className="grid grid-cols-12 gap-4">
        {category?.map(({ name, qunatity, img }, idx) => (
          <div
            key={idx}
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
          >
            <Card className="h-[280px]">
              <CardHeader floated={false} className="h-4/5 !m-0">
                <img
                  src={img}
                  alt="profile-picture"
                  className="object-cover object-center w-full h-full"
                />
              </CardHeader>
              <CardBody className="text-center p-2">
                <h6 className="text-base">{name}</h6>
                <p className="flex justify-center items-center text-xsm">
                  <GoDotFill className="fill-primaryRed" />
                  {qunatity}
                </p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
