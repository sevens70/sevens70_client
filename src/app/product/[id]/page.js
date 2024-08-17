"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useCallback } from "react";
import Cart from "../../../components/pages/cart";
import Loader from "../../../components/common/Loader";
import { useApi } from "../../../lib/utils/useApi";

export default function Page() {
  const { id } = useParams();
  const { singleProduct, getSingleProduct } = useApi();

  const fetchProduct = useCallback(async () => {
    await getSingleProduct(Number(id));
  }, [id, getSingleProduct]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  console.log("id", id);

  return (
    <div
      className="mx-auto"
      style={{ height: "auto", backgroundColor: "#fff" }}
    >
      {/* {singleProduct ? <Cart singleProduct={singleProduct} /> : <Loader />} */}
      <p>Dynamic route is found</p>
    </div>
  );
}
