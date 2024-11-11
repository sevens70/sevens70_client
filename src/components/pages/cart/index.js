"use client";
import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import CartGallery from "./cartGallery";
import CartInfo from "./cartInformation";
import Link from "next/link";
import { useAppSelector } from "../../../lib/hooks";
import { selectProductById } from "../../features/product/productSlice";
function Cart() {
  const singleProduct = useAppSelector(selectProductById);
  return (
    <section className="">
      <div className=" w-full bg-secondary-500  flex flex-col justify-center items-center h-[200px]">
        <h3 className="text-xmd capitalize">Shop List</h3>
        <Breadcrumbs>
          <Link href="/" className="opacity-60 text-primaryRed text-sm">
            Home
          </Link>
          <a href="#">{singleProduct?.title}</a>
        </Breadcrumbs>
      </div>
      <CartGallery singleProduct={singleProduct} />
      <CartInfo singleProduct={singleProduct} />
    </section>
  );
}

export default Cart;
