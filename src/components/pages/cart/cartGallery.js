"use client";
import React from "react";
// import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import { FaCheck } from "react-icons/fa6";
import { CiGrid2H } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button, Radio } from "@material-tailwind/react";
function CartGallery() {
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
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="my-10 w-11/12 md:w-10/12 mx-auto flex flex-col justify-center items-center">
      <div className="grid grid-cols-12 gap-10 w-full">
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 bg-red">
          <div>
            {" "}
            <ImageGallery items={images} />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 bg-red">
          <div>
            <p className="text-grey-200 text-sm mb-2">Womans</p>
            <h4>Different color Short Top</h4>

            <div className="flex flex-wrap items-center gap-1 my-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} />
              ))}
              <p className="text-xsm text-grey-200 ml-3">(8 Reviews)</p>
              <p className="text-xsm text-successGreen ml-5 flex justify-center items-center gap-2">
                <FaCheck className="fill-successGreen" />
                In Stock
              </p>
            </div>
            <h6 className="text-dark-900 flex justify-start items-center gap-3">
              $89.00
              <h6 className="font-medium text-priceColor line-through">
                $104.00
              </h6>
            </h6>
            <p className="text-dark-700 text-sm mt-2">color: Yellow</p>
            <div className="flex w-max flex-wrap gap-0">
              <Radio
                name="color"
                color="purple"
                className="h-8 w-8 text-primaryRed bg-primaryRed"
              />
              <Radio
                name="color"
                color="gray"
                defaultChecked
                className="h-8 w-8 text-primaryRed bg-grey-700"
              />
              <Radio
                name="color"
                color="red"
                className="h-8 w-8 text-primaryRed bg-white"
              />
              <Radio
                name="color"
                color="amber"
                className="h-8 w-8 text-primaryRed bg-priceColor"
              />
            </div>
            {/* ================= */}
            <p className="text-dark-900 text-sm">Size</p>
            <div className="flex w-max gap-5">
              <Radio
                name="color"
                color="purple"
                label={<p className="text-xsm text-dark-900">S</p>}
              />
              <Radio
                name="color"
                color="gray"
                defaultChecked
                label={<p className="text-xsm text-dark-900">L</p>}
              />
              <Radio
                name="color"
                color="red"
                label={<p className="text-xsm text-dark-900">M</p>}
              />
              <Radio
                name="color"
                color="amber"
                label={<p className="text-xsm text-dark-900">S</p>}
              />
            </div>
            {/* =============== */}
            <div className="flex flex-wrap justify-start items-center gap-3">
              <div
                size="md"
                className="font-jost font-normal text-sm bg-transparent font-normal capitalize text-dark-900  border-[1px] border-grey-600 h-[50px] rounded-none mt-5 mb-2 flex items-center gap-3"
              >
                <Button
                  size="md"
                  className="border-none !shadow-none bg-transparent text-grey-200 text-xsm"
                >
                  {" "}
                  -{" "}
                </Button>{" "}
                1{" "}
                <Button
                  size="md"
                  className="border-none !shadow-none bg-transparent text-grey-200 text-xsm"
                >
                  +
                </Button>
              </div>
              <Button
                size="md"
                className="font-jost text-sm bg-dark-900 font-normal capitalize text-white  border-[1px] border-grey-600 hover:border-none hover:bg-primaryRed hover:text-white h-[50px] rounded-none mt-5 mb-2 flex items-center gap-2"
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
                {/* <FaLongArrowAltRight className="fill-white" /> */}
              </Button>
            </div>
            {/* =================== */}
            <div className="mt-7">
              {" "}
              <p className="flex gap-3 text-grey-200 text-xsm mb-3">
                MKS : <p className="text-dark-900">J-8521</p>
              </p>
              <p className="flex gap-3 text-grey-200 text-xsm mb-3">
                Category : <p className="text-dark-900">Handbag</p>
              </p>
              <p className="flex gap-3 text-grey-200 text-xsm mb-3">
                Tags : <p className="text-dark-900">Bag, Lades bag, Fashion</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartGallery;
