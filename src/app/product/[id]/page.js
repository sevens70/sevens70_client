"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useCallback } from "react";
import Cart from "../../../components/pages/cart";
import { useAppDispatch } from "../../../lib/hooks";
import { fetchProductByIdAsync } from "../../../components/features/product/productSlice";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
export default function Page() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductByIdAsync(id));
  }, [dispatch, id]);

  return (
    <DefaultLayout>
      {" "}
      <div
        className="mx-auto"
        style={{ height: "auto", backgroundColor: "#fff" }}
      >
        <Cart />
      </div>
    </DefaultLayout>
  );
}
