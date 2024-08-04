"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { FcRating } from "react-icons/fc";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
function TrendingProducts() {
  const products = [
    {
      name: "Ribbed modal T-shirt",
      text: "Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric",
      img: "./trending/tr1.png",
      discount: "10% off",
      price: "$45.00",
      disc_price: "$45.00",
      rating: "5.0",
      tag: "shirt",
    },
    {
      name: "Loose Fit Hoodie",
      text: "Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric",
      price: "$45.00",
      discount: "10% off",
      disc_price: "$45.00",
      rating: "5.0",
      tag: "shirt",
      img: "./trending/tr2.png",
    },
    // {
    //   name: "Ribbed Tank Top",
    //   price: "$45.00",
    //   disc_price: "$45.00",
    //   discount: "10% off",
    //   rating: "5.0",
    //   tag: "shirt",
    //   img: "./category/cate3.png",
    // },
    // {
    //   name: "V-neck linen T-shirt                 ",
    //   price: "$45.00",
    //   disc_price: "$45.00",
    //   discount: "10% off",
    //   rating: "5.0",
    //   tag: "shirt",
    //   img: "./category/cate4.png",
    // },
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
  return (
    <section className="w-11/12 mt-20 md:w-10/12 mx-auto">
      <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
        <div>
          <p className="text-base text-center text-grey-700">Our Products</p>
          <h3 className="mt-2">Trending New Product</h3>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {products?.map(
          (
            { name, disc_price, price, img, discount, rating, tag, text },
            idx
          ) => (
            <div
              key={idx}
              className="group col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6"
            >
              <Card className="flex-row shadow-sm">
                <CardHeader
                  floated={false}
                  className="basis-4/6 !rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none !m-0 relative"
                >
                  <img
                    src={img}
                    alt="profile-picture"
                    className="max-h-[250px] object-cover object-center w-full h-full"
                    width={300}
                    height={300}
                  />
                  <Button
                    size="sm"
                    className="!py-1 !px-2 bg-white capitalize text-primaryRed absolute top-3 left-2"
                  >
                    {discount}
                  </Button>
                  <div className="hidden group-hover:flex flex-col items-end gap-4 absolute right-2 top-3">
                    <IconButton color="white" size="sm">
                      <GiSelfLove stroke="1" className="h-5 w-5 font-normal" />
                    </IconButton>

                    {/* <Badge content="5"> */}
                    <IconButton color="white" size="sm">
                      <FaCartShopping className="h-5 w-5" />
                    </IconButton>
                    {/* </Badge> */}
                    <IconButton color="white" size="sm">
                      <FaRegUser className="h-5 w-5" />
                    </IconButton>
                  </div>
                </CardHeader>
                <CardBody className="flex-grow items-center text-left p-3 mt-2">
                  <p className="text-xsm text-grey-600 ">{tag}</p>
                  <h6 className="text-base text-left mt-1">{name}</h6>
                  <p className="flex gap-3 justify-start items-center font-medium text-dark-700 text-base mt-1">
                    {disc_price}
                    <span className="text-xsm font-normal ext-grey-600">
                      {price}
                    </span>
                  </p>
                  <p className="mt-2 flex justify-start items-center gap-1 text-xsm font-medium text-dark-700">
                    <FcRating className="fill-primaryRed" />
                    {rating}
                  </p>
                  <p className="text-xsm text-grey-700 mt-2">{text}</p>
                  <Button
                    size="sm"
                    className="flex items-center gap-2 mt-3 mb-2 bg-transparent font-normal capitalize text-dark-700  border-[1px] border-grey-600 hover:border-none hover:bg-primaryRed hover:text-white h-[35px] rounded-none"
                  >
                    <FaCartShopping className="fill-dark-700 hover:fill-white group-hover:fill-dark-700" />
                    Add To Cart
                  </Button>
                </CardBody>
              </Card>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default TrendingProducts;
