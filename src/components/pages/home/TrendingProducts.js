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
import Slider from "../../Slider";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { getCarrency } from "../../../lib/features/currencySlice";
import { addToCart, getCart } from "../../../lib/features/cartSlice";
import { addToFav } from "../../../lib/features/favouriteSlice";
import toast from "react-hot-toast";
const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 1,
  },
  639: {
    slidesPerView: 1,
  },
  865: {
    slidesPerView: 1,
  },
  1000: {
    slidesPerView: 2,
  },
  1500: {
    slidesPerView: 2,
  },
  1700: {
    slidesPerView: 2,
  },
};
const products = [
  {
    id: 201,
    name: "Ribbed modal T-shirt",
    text: "Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric",
    img: "/trending/tr1.png",
    discount: "10% off",
    price: "45.00",
    disc_price: "35.00",
    rating: "5.0",
    tags: "Bags, Lades bag, Fashion",
    reviews: 8,
    rating: "5.0",
    tag: "shirt",
    categories: ["women cloth"],
    category: "Man",
    prd_category: "Dress",
    colors: ["light brown"],
    brand: "Abs Fashion",
    size: ["XXL"],
    stock: "In Stock",
    createdAt: "10/12/2023",
  },
  {
    id: 202,
    name: "Loose Fit Hoodie",
    text: "Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric",
    discount: "10% off",
    img: "/trending/tr2.png",
    price: "50.00",
    disc_price: "40.00",
    rating: "5.0",
    tags: "Bags, Lades bag, Fashion",
    reviews: 8,
    rating: "5.0",
    tag: "shirt",
    categories: ["women cloth"],
    category: "Man",
    prd_category: "Dress",
    colors: ["light brown"],
    brand: "Abs Fashion",
    size: ["XL"],
    stock: "In Stock",
    createdAt: "10/12/2023",
  },
  {
    id: 203,
    name: "Trending new hoddie",
    text: "Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric",
    discount: "10% off",
    img: "/trending/tr2.png",
    price: "60.00",
    disc_price: "30.00",
    rating: "5.0",
    tags: "Bags, Lades bag, Fashion",
    reviews: 8,
    rating: "5.0",
    tag: "shirt",
    categories: ["women cloth"],
    category: "Man",
    prd_category: "Dress",
    colors: ["light brown"],
    brand: "Abs Fashion",
    size: ["L"],
    stock: "In Stock",
    createdAt: "10/12/2023",
  },
];
function TrendingProducts() {
  const currencyData = useAppSelector(getCarrency);
  const { items: favItems } = useAppSelector((state) => state.favourites);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cart = useAppSelector(getCart);
  return (
    <section className="w-11/12 mt-20 pb-10 relative md:w-10/12 mx-auto">
      <div className="flex flex-wrap md:justify-center justify-start items-center gap-3 mb-10">
        <div>
          <h6 className="md:text-center text-left font-normal text-grey-700">
            Our Products
          </h6>
          <h3
            className="mt-2 text-xmd text-dark-700"
            style={{ lineHeight: "46px" }}
          >
            Trending New Product
          </h3>
        </div>
      </div>
      {/* <div className="grid grid-cols-12 gap-4"> */}
      <Slider
        className="overflow-hidden"
        id="trending-product-slider"
        autoPlayEnabled={true}
        pagination={false}
        slidesPerView={2}
        spaceBetween={20}
        autoplay={true}
        breakpoints={breakpoints}
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        style={{
          "--swiper-navigation-size": "18px",
          "--swiper-theme-color": "black-dark-900",
        }}
      >
        {" "}
        {products?.map((item, idx) => {
          const {
            id,
            name,
            disc_price,
            price,
            img,
            discount,
            rating,
            tag,
            text,
          } = item;
          const isFavorite = favItems?.some((fav) => fav.id === id);
          return (
            <SwiperSlide key={idx} className="h-full">
              <div key={idx} className="group">
                <Card className="md:flex-row flex-col shadow-sm">
                  <CardHeader
                    floated={false}
                    className="min-w-[200px] basis-4/6 !rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none !m-0 relative"
                  >
                    <img
                      src={img}
                      alt="profile-picture"
                      // className="max-h-[350px] object-cover object-center w-full h-full"
                      // width={300}
                      // height={300}
                      className="max-h-[350px] object-cover object-center w-full h-full"
                      width={300}
                      height={300}
                    />
                    <Button
                      size="sm"
                      className="font-jost text-sm font-medium !py-1 !px-2 bg-white capitalize text-primaryRed absolute top-3 left-2"
                    >
                      {discount}
                    </Button>
                    <div className="hidden group-hover:flex flex-col items-end gap-4 absolute right-2 top-3">
                      <IconButton
                        onClick={() => {
                          const matchingItem = favItems?.find(
                            (fav) => fav.id === id
                          );
                          if (matchingItem) {
                            dispatch(addToFav(item));
                            toast.success("Removed item from Favourite list.");
                          } else {
                            dispatch(addToFav(item));
                            toast.success("Item added to the Favourite list.");
                          }
                          // router.push(`/product/${id}`);
                        }}
                        color="white"
                        size="sm"
                      >
                        {isFavorite ? (
                          <GiSelfLove
                            className="h-5 w-5 font-normal !fill-primaryRed"
                            // style={{ fill: "red" }}
                          />
                        ) : (
                          <GiSelfLove className="h-5 w-5 font-normal" />
                        )}
                      </IconButton>

                      {/* <Badge content="5"> */}
                      <IconButton
                        onClick={() => {
                          const matchingItem = cart?.find(
                            (prd) => prd.id === item?.id
                          );
                          if (matchingItem) {
                            toast.success("Already Added in Cart.");
                          } else {
                            dispatch(addToCart(item));
                            toast.success("Successfully Added in Cart.");
                          }
                        }}
                        color="white"
                        size="sm"
                      >
                        <FaCartShopping className="h-5 w-5" />
                      </IconButton>
                      {/* </Badge> */}
                      <IconButton
                        onClick={() => router.push(`/orders`)}
                        color="white"
                        size="sm"
                      >
                        <FaRegUser className="h-5 w-5" />
                      </IconButton>
                    </div>
                  </CardHeader>
                  <CardBody className="flex-grow items-center text-left p-3 mt-2">
                    <p className="text-sm text-grey-600 ">{tag}</p>
                    <h6 className="text-left text-dark-700 mt-1">{name}</h6>
                    <h6 className="flex gap-3 justify-start items-center font-medium text-dark-700 mt-1">
                      {/* {currencyData?.symbol} */}৳ {disc_price}
                      <span className="font-[400] line-through text-grey-600">
                        {/* {currencyData?.symbol} */}৳ {price}
                      </span>
                    </h6>
                    <h6 className="mt-2 flex justify-start items-center gap-1 text-dark-700">
                      <FcRating className="fill-primaryRed" />
                      {rating}
                    </h6>
                    <p className="text-sm text-grey-700 mt-2">{text}</p>
                    <Button
                      size="sm"
                      className="font-jost text-sm flex items-center gap-2 mt-3 mb-2 bg-transparent font-normal capitalize text-dark-700  border-[1px] border-grey-600 hover:border-none hover:bg-primaryRed hover:text-white h-[40px] rounded-none"
                      onClick={() => {
                        router.push(`/product/${id}`);
                      }}
                    >
                      <FaCartShopping className="fill-dark-700 hover:fill-white group-hover:fill-dark-700" />
                      Add To Cart
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </SwiperSlide>
          );
        })}
      </Slider>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="swiper-custom-pagination"></div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default TrendingProducts;
