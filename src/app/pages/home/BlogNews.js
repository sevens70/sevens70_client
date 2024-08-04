"use client";
import React from "react";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { GoDotFill } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";

const articles = [
  {
    name: "The Best Amazon Prime Day Fashion Deals",
    text: "Elevate on shopping experience and enjoy the convenience having your favorite items delivere",
    img: "./articles/a1.png",
    author: "Osars Sam",
    time: "5 days ago",
  },
  {
    name: "Optimizing Your eCommerce for Website SEO",
    text: "Elevate on shopping experience and enjoy the convenience having your favorite items delivere",
    img: "./articles/a2.png",
    author: "Osars Sam",
    time: "5 days ago",
  },
  {
    name: "The Best Amazon Prime Day Fashion Deals",
    text: "Elevate on shopping experience and enjoy the convenience having your favorite items delivere",
    img: "./articles/a3.png",
    author: "Osars Sam",
    time: "5 days ago",
  },
  //   {
  //     name: "V-neck linen T-shirt                 ",
  //     price: "$45.00",
  //     disc_price: "$45.00",
  //     discount: "10% off",
  //     rating: "5.0",
  //     tag: "shirt",
  //     img: "./category/cate4.png",
  //   },
  // {
  //   name: "Classic White Shirt ",
  //   price: "$45.00",
  //  discount: "10% off",
  //   disc_price: "$45.00",
  //   rating: "5.0",
  //   tag: "shirt",
  //   img: "./category/cate5.png",
  // },
];
function BlogNews() {
  return (
    <section className="w-11/12 mt-20 md:w-10/12 mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
        <div>
          <p className="text-base text-grey-700">Latest Articles</p>
          <h3 className=" mt-2">Explore News & Blog</h3>
        </div>
        <Button
          size="sm"
          className="bg-transparent font-normal capitalize text-dark-700 border-[1px] border-grey-600 h-[35px] rounded-none"
        >
          Add To Cart
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {articles.map(({ name, text, img, author, time }, idx) => (
          <div
            key={idx}
            className="group col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4"
          >
            <Card className="shadow-sm">
              <CardHeader
                floated={false}
                className="basis-3/5 !rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none !m-0"
              >
                <img
                  src={img}
                  alt="profile-picture"
                  className="object-cover object-center w-full h-full "
                  height={300}
                  width={300}
                />
              </CardHeader>
              <CardBody className="flex-grow text-left p-2 mt-1">
                <div className="flex justify-start items-center gap-1">
                  <span className="font-normal text-grey-600 text-sm">By</span>
                  <p className="font-medium text-sm text-grey-700">{author}</p>
                  <p className="flex justify-center items-center text-dark-600 gap-1 text-sm ml-1">
                    <GoDotFill className="fill-primaryRed" />
                    {time}
                  </p>
                </div>
                <h6 className="text-base text-left">{name}</h6>
                <p className="text-xsm text-grey-700 mt-1">{text}</p>
                <Button
                  size="md"
                  className="bg-transparent font-normal capitalize text-dark-700  border-[1px] border-grey-600 hover:border-none hover:bg-primaryRed hover:text-white h-[35px] rounded-none mt-5 mb-2 flex items-center gap-2"
                >
                  Read More{" "}
                  <FaLongArrowAltRight className="fill-text-dark-700" />
                </Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogNews;
