import React, { useEffect } from "react";
// import { Button } from "@material-tailwind/react";
import {
  allSunglassBanner,
  fetchSunglassBannerAsync,
  sunglassBannerStatus,
} from "./sunglassBannerSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import Loader from "../../common/Loader";
import Link from "next/link";
import { moveToOrderForm } from "../../../lib/utils/utils";
// import { selectWebsiteInfo } from "../websiteInfo/websiteInfoSlice";
export default function SunglassBanner() {
  const banners = useAppSelector(allSunglassBanner);
  //  const websiteInfo = useAppSelector(selectWebsiteInfo)
  const status = useAppSelector(sunglassBannerStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSunglassBannerAsync());
  }, [dispatch]);
  console.log("banners 123", banners);
  if (status === "loading") {
    return <Loader />;
  }
  return (
    <section className="relative min-h-[800px] bg-gradient-to-r from-black to-[#FBBF1A] text-white flex flex-col items-center justify-start px-4">
      {/* Logo and Menu */}
      <div className="w-full px-0  sm:px-10 py-10 flex items-start justify-between">
        {/* <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center"> */}
        <div className="bg-transparent flex items-center justify-center">
          {/* <span className="text-white text-md font-bold">LOGO</span> */}
          <Link href="/">
            <img
              src="/white_logo.png"
              alt="logo"
              className="max-w-[150px] w-full h-full"
            />
          </Link>
        </div>
        {/* <div className="">
          <div className="w-12 h-12 rounded flex items-center justify-center bg-white text-blue-500">
            <span className="text-lg">☰</span>
          </div>
        </div> */}
      </div>

      {/* Heading */}
      <h1 className="text-center mt-[30px] text-white font-bold text-xl sm:text-3xl lg:text-4xl mb-8 max-w-4xl">
        {banners[0]?.title}
      </h1>

      {/* Video Placeholder */}
      <div className="w-full max-w-4xl h-60 bg-gray-300 rounded-lg flex items-center justify-center">
        {/* <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer">
          <span className="text-blue-500 text-3xl font-bold">▶</span>
        </div> */}
        <img
          priority="true"
          // src="/sunglass/promised01.png"
          src={banners[0]?.image}
          alt="banner"
          className="w-full h-full rounded rounded-l-md"
          // width={500}
          // height={800}
        />
      </div>

      {/* Subheading */}
      <p className="text-center text-white text-sm  lg:tmax-w-4xl  mt-6 max-w-lg">
        {banners[0]?.subtitle}
      </p>

      {/* Call to Action Button */}
      {/* <button className="mt-10 px-6 py-3 bg-purple-600 text-white font-bold rounded-full">
        CALL TO ACTION
      </button> */}
      <button
        onClick={moveToOrderForm}
        className="mt-10 px-4 py-3 bg-[#FBBF1A] text-sm text-dark font-medium rounded rounded-lg"
      >
        আমি এখনই অর্ডার করতে চাই
      </button>
      {/* Down Arrow */}
      <div className="absolute bottom-0 text-center z-10">
        <div className="w-14 h-8 bg-gradient-to-r from-black-500 to-[#FBBF1A] rounded-bl-full rounded-br-full flex items-center justify-center cursor-pointer">
          <span className="text-white text-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Bottom Red Strip */}
      <div className="absolute bottom-0 text-center w-full h-8 bg-[#FBBF1A] flex justify-center">
        {" "}
        <div className="w-16 h-14 bg-[#FBBF1A] rounded-full flex items-center justify-center cursor-pointer">
          {/* <span className="text-white text-md">⌄</span> */}
        </div>
      </div>
    </section>
  );
}
