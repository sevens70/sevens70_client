"use client";
import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import LeftSidebar from './LeftSidebar'
import RightSidebar from "./RightSidebar";
function ShopList() {
  return (
    <section className="">
      <div className=" w-full bg-secondary-500  flex flex-col justify-center items-center h-[200px]">
        <h3 className="text-xmd capitalize">Shop List</h3>
        <Breadcrumbs>
          <a href="#" className="opacity-60 text-primaryRed text-sm">
            Home
          </a>
          <a href="#">Shop List</a>
        </Breadcrumbs>
      </div>
      <div className="my-10 w-11/12 md:w-10/12 mx-auto flex flex-col justify-center items-center">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div
            className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-3 bg-red"
          >
            <LeftSidebar/>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-9">
            {" "}
             <RightSidebar/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopList;
