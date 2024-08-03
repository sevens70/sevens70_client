"use client";
import { Button } from "@material-tailwind/react";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function Banner() {
  return (
    <section className="md:pt-10 w-full bg-pageBg relative ">
      <div
        className="absolute top-0 left-0"      
        style={{
          background: "linear-gradient(180deg, #DA3F3F -3528%, #F7E9E9 100%)",
          height: "300px",
          width: "300px",
          borderRadius: "0% 10% 48% 0%",
        }}
      ></div>
      <div className="w-11/12 md:w-10/12 mx-auto">
        {" "}
        <div className=" flex flex-col-reverse md:flex-row lg:gap-16 md:gap:8 gap:4 relative">
          <div className="basis-3/5 flex flex-col justify-center items-start">
            <Button className="rounded-full bg-light-100 !h-[48px] mb-5 flex items-center text-sm text-dark-500">
              <img
                src={"./discount.png"}
                alt={"discount"}
                className="h-5 w-5 mr-2 rounded-full object-cover"
              />
              50% OFF{" "}
              <span className="ml-2 font-normal normal-case">
                {" "}
                Summer Super Sale
              </span>
            </Button>
            <h2
              className="font-medium text-2xl  md:text-3xl lg:text-5xl"
              style={{ lineHeight: "60px" }}
              // data-aos="fade-right"
            >
              Style Haven Unveiled Your Exclusive Dress Fashion
            </h2>
            <p className="text-dark-300 text-sm mt-3">
              Crafted to convey a sense of discovery and exclusivity, enticing
              readers to explore indulge in the latest trends and offerings. The
              term suggests a grand reveal , adding.
            </p>
            <Button
              size="md"
              className="bg-primaryRed rounded mt-3 flex items-center gap-2"
            >
              Shop Now <FaLongArrowAltRight className="fill-white" />
            </Button>
          </div>
          <div
            className="bannerImg-area pt-8
              !rounded-tl-48 !rounded-tr-48
                flex-grow flex justify-center"
            style={{
              background:
                "linear-gradient(180deg, #DA3F3F -3528%, #F7E9E9 100%)",
            }}
          >
            {" "}
            <img
              priority="true"
              src="./bannerImg.png"
              alt=""
              // className="object-cover object-center bg-dark-500 "
              width={300}
              height={300}
              // className="max-w-[150px] w-full h-full"
              // width={300}
              // height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
