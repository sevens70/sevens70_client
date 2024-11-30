"use client";
import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import CartGallery from "./cartGallery";
import CartInfo from "./cartInformation";
import Link from "next/link";
import { useAppSelector } from "../../../lib/hooks";
import {
  selectProductById,
  selectProductListStatus,
} from "../../features/product/productSlice";
import Loader from "../../common/Loader";
function Cart() {
  const singleProduct = useAppSelector(selectProductById);
  const status = useAppSelector(selectProductListStatus);
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
      {status === "loading..." ? (
        <Loader />
      ) : (
        <>
          {" "}
          <CartGallery singleProduct={singleProduct} />
          <CartInfo singleProduct={singleProduct} />
        </>
      )}
    </section>
  );
}

export default Cart;
