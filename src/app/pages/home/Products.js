"use client";
import React from "react";
// import img1 from "cate1.png";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { GoDotFill } from "react-icons/go";

function Products() {
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
      <div className="flex justify-between items-center">
        <div>
          <p className="text-base text-grey-700">Our Products</p>
          <h3 className="mb-6 mt-2">Our Top Products</h3>
        </div>
        <div>
          <div className="flex w-max gap-4">
            <Button
              className="bg-primaryRed text-white font-normal rounded-none capitalize border  border-light-50"
              size="sm"
            >
              All
            </Button>
            <Button
              size="sm"
              className="bg-transparent font-normal rounded-none capitalize text-dark-700 border  border-light-50"
            >
              Woman
            </Button>
            <Button
              size="sm"
              className="bg-transparent font-normal rounded-none capitalize  text-dark-700 border  border-light-50"
            >
              Man
            </Button>
            <Button
              size="sm"
              className="bg-transparent font-normal rounded-none capitalize  text-dark-700 border  border-light-50"
            >
              Accessories
            </Button>
          </div>
        </div>
      </div>
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

export default Products;
