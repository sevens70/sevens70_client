"use client";
import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import CartGallery from "./cartGallery";
import CartInfo from "./cartInformation";
function Cart() {
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
      <CartGallery />
      <CartInfo />
    </section>
  );
}

export default Cart;
