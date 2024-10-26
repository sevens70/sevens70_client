"use client";
import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import CartGallery from "./cartGallery";
import CartInfo from "./cartInformation";
import CommonCategories from "../../common/commonCategories";
import { useSearchParams } from "next/navigation";
import { useApi } from "../../../lib/utils/useApi";
import Loader from "../../common/Loader";
import Link from "next/link";
import { useAppSelector } from "../../../lib/hooks";
import { selectProductById } from "../../features/product/productSlice";
function Cart() {
  // const searchParams = useSearchParams();
  const singleProduct = useAppSelector(selectProductById);
  console.log("id & selectProductById", singleProduct.id);
  return (
    <section className="">
      <div className=" w-full bg-secondary-500  flex flex-col justify-center items-center h-[200px]">
        <h3 className="text-xmd capitalize">Shop List</h3>
        <Breadcrumbs>
          <Link href="/" className="opacity-60 text-primaryRed text-sm">
            Home
          </Link>
          {/* <a href="#">{searchParams.get("category")}</a> */}
          <a href="#">{singleProduct?.title}</a>
        </Breadcrumbs>
      </div>
      <CartGallery singleProduct={singleProduct} />
      <CartInfo />
      {singleProduct ? (
        <section className="w-11/12 mt-15 pb-10 relative md:w-10/12 mx-auto">
          <h3 className="text-left text-xmd my-10 capitalize">
            People Also bought
          </h3>
          <CommonCategories />
        </section>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default Cart;
