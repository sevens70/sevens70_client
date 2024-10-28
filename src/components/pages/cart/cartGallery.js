"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";
import { CiGrid2H } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button, Radio } from "@material-tailwind/react";
import SwiperCartGallery from "./swiperCartGallery";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { getCarrency } from "../../../lib/features/currencySlice";
import { addToCartAsync, selectItems } from "../../features/cart/cartSlice";
function CartGallery({ singleProduct }) {
  const currencyData = useAppSelector(getCarrency);
  const dispatch = useAppDispatch();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const items = useAppSelector(selectItems);
  const [count, setCount] = useState(1);
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#F87643"
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
  const handleIncrease = () => {
    if (count < 4) {
      setCount((prevCount) => prevCount + 1);
    } else {
      toast.error("No more than 4 products at a time");
    }
  };

  const handleDecrease = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  console.log(
    "items & product",
    items,
    singleProduct
    // items?.findIndex((item) => item.product?.id === singleProduct.id)
  );

  const handleAddToCart = () => {
    if (items?.findIndex((item) => item.product.id === singleProduct.id) < 0) {
      console.log({ items });
      const newItem = {
        product: singleProduct.id,
        quantity: count,
      };
      if (selectedColor) {
        newItem.color = selectedColor;
      }
      if (selectedSize) {
        newItem.size = selectedSize;
      }
      console.log("items & product newItem", newItem);
      dispatch(addToCartAsync({ item: newItem, toast }));
    } else {
      toast.error("Item Already added");
    }
  };

  return (
    <div className="my-10 w-11/12 md:w-10/12 mx-auto flex flex-col justify-center items-center">
      <div className="grid grid-cols-12 gap-5 w-full">
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 cartGallery_main">
          <div className="">
            <SwiperCartGallery singleProduct={singleProduct} />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
          <div>
            <p className="text-grey-200 text-sm mb-1">
              {singleProduct?.categories}
            </p>
            <h4>{singleProduct?.title}</h4>

            <div className="flex flex-wrap items-center gap-1 my-2">
              {Array?.from({ length: singleProduct?.rating }).map(
                (_, index) => (
                  <StarIcon key={index} />
                )
              )}
              <p className="text-xsm text-grey-200 ml-3">
                ({singleProduct?.rating})
              </p>
              <p className="text-xsm text-successGreen ml-5 flex justify-center items-center gap-2">
                <FaCheck className="fill-successGreen" />
                {singleProduct.stock < 0 ? "Out of Stock" : "In Stock"}
                In Stock
              </p>
            </div>
            <h6 className="text-dark-900 flex justify-start items-center gap-3">
              {currencyData?.symbol}
              {`${singleProduct?.discountPrice}.00`}
              <h6 className="font-medium text-priceColor line-through">
                {currencyData?.symbol}
                {`${singleProduct?.price}.00`}
              </h6>
            </h6>
            <p className="text-dark-700 text-sm mt-2 capitalize">
              color: {selectedColor}
            </p>
            <div className="flex w-max flex-wrap gap-0">
              {singleProduct?.colors?.map((item, idx) => (
                <Radio
                  key={idx}
                  // name="color"
                  // color="gray"
                  checked={selectedColor === item.id}
                  onChange={() => handleColorChange(item.id)}
                  className={`h-8 w-8 text-primaryRed border-none ${item.class} ${item.selectedClass}`}

                  // style={{
                  //   backgroundColor: item.class,
                  //   border: "1px solid yellow",
                  // }}
                />
              ))}
            </div>
            <p className="text-dark-900 text-sm">Size:</p>
            <div className="flex flex-wrap gap-3 md:gap-5">
              {singleProduct?.sizes?.map((item, idx) => (
                <Radio
                  key={item.id}
                  name="size"
                  // color="purple"
                  checked={selectedSize === item.id}
                  onChange={() => handleSizeChange(item.id)}
                  label={
                    <p className="text-xsm text-dark-900 uppercase">
                      {item.id}
                    </p>
                  }
                />
              ))}
            </div>
            <div className="flex flex-wrap justify-start items-center gap-3">
              <div
                size="md"
                className="font-jost font-normal text-sm bg-transparent font-normal capitalize text-dark-900  border-[1px] border-grey-600 h-[50px] rounded-none mt-5 mb-2 flex items-center gap-3"
              >
                <Button
                  size="md"
                  className="border-none !shadow-none bg-transparent text-grey-200 text-xsm"
                  disabled={count <= 1}
                  onClick={handleDecrease}
                >
                  {" "}
                  <FaMinus />
                </Button>{" "}
                {count}
                <Button
                  size="md"
                  className="border-none !shadow-none bg-transparent text-grey-200 text-xsm"
                  onClick={handleIncrease}
                >
                  <FaPlus />
                </Button>
              </div>
              <Button
                size="md"
                className="font-jost text-sm bg-dark-900 font-normal capitalize text-white  border-[1px] border-grey-600 hover:border-none hover:bg-primaryRed hover:text-white h-[50px] rounded-none mt-5 mb-2 flex items-center gap-2"
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
              <Button
                size="md"
                className="font-jost text-sm bg-transparent  font-normal capitalize text-white  border-[1px] border-grey-600 hover:border-none hover:bg-primaryRed hover:text-white h-[50px] rounded-none mt-5 mb-2 flex items-center gap-2"
              >
                <FaRegHeart />
              </Button>
              <Button
                size="md"
                className="font-jost text-sm bg-transparent  font-normal capitalize text-white  border-[1px] border-grey-600 hover:border-none hover:bg-primaryRed hover:text-white h-[50px] rounded-none mt-5 mb-2 flex items-center gap-2"
              >
                <CiGrid2H />
              </Button>
            </div>
            <div className="mt-7">
              {" "}
              <p className="flex gap-3 text-grey-200 text-xsm mb-3">
                MKS : <p className="text-dark-900">{singleProduct?.model}</p>
              </p>
              <p className="flex gap-3 text-grey-200 text-xsm mb-3">
                Category :{" "}
                <p className="text-dark-900">{singleProduct?.category}</p>
              </p>
              <p className="flex gap-3 text-grey-200 text-xsm mb-3">
                Tags :{" "}
                <p className="text-dark-900">
                  {singleProduct?.tags.map((tag) => tag.name).join(", ")}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartGallery;
