"use client";
import React from "react";
import { Card, CardHeader, CardBody, Avatar } from "@material-tailwind/react";

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
const products = [
  {
    name: "Best Online Fashion Dress",
    text: "I always find something stylish and affordable on this web fashion site",
    img: "./clients/c1.png",
    userName: "Robert Smiths",
    location: "Customer from USA",
    ratings: 5,
  },
  {
    name: "Best Online Fashion Dress",
    text: "I always find something stylish and affordable on this web fashion site",
    img: "./clients/c2.png",
    userName: "Robert Smiths",
    location: "Customer from USA",
    ratings: 3,
  },
  {
    name: "Best Online Fashion Dress",
    text: "I always find something stylish and affordable on this web fashion site",
    img: "./clients/c3.png",
    userName: "Robert Smiths",
    location: "Customer from USA",
    ratings: 4,
  },
];
function Client() {
  return (
    <section className="w-11/12 mt-20 md:w-10/12 mx-auto">
      <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
        <div>
          <p className="text-base text-center text-grey-700">Feedback</p>
          <h3 className="mt-2">Happy Clients</h3>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-7">
        {products?.map(
          ({ name, text, userName, img, location, ratings }, idx) => (
            <div
              key={idx}
              className="group col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4"
            >
              <Card className="p-5 shadow-sm">
                <CardHeader floated={false} className="shadow-none !m-0">
                  <div className="flex items-center gap-0">
                    {Array.from({ length: ratings }).map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                  <h6 className="text-base text-left mt-2">{name}</h6>
                  <p className="text-xsm text-grey-700 mt-1">{text}</p>
                </CardHeader>
                <CardBody className="mx-0 flex items-start gap-3 mt-5 p-0">
                  <Avatar size="sm" variant="circular" src={img} />
                  <div className="flex w-full flex-col gap-0.5">
                    <p className="text-sm font-medium">{userName}</p>
                    <p className="text-xsm text-grey-700 ">{location}</p>
                  </div>
                </CardBody>
              </Card>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Client;
