"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useCallback } from "react";
import Cart from "../../../components/pages/cart";
import Loader from "../../../components/common/Loader";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import {
  fetchProductByIdAsync,
  selectProductById,
} from "../../../components/features/product/productSlice";

export default function Page() {
  const { id } = useParams();
  const singleProduct = useAppSelector(selectProductById);
  // const { singleProduct, getSingleProduct } = useApi();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductByIdAsync(id));
  }, [dispatch, id]);

  return (
    <div
      className="mx-auto"
      style={{ height: "auto", backgroundColor: "#fff" }}
    >
      {singleProduct ? <Cart singleProduct={singleProduct} /> : <Loader />}
    </div>
  );
}