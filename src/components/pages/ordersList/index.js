"use client";
import React from "react";
import { useAppSelector } from "../../../lib/hooks";
import { Avatar, Button, h6 } from "@material-tailwind/react";
import Link from "next/link";
import OrdersPage from "../../../components/features/order/OrdersPage";
function OrdersList() {
  // const { items } = useAppSelector((state) => state.orders);
  return (
    <div className="my-20 w-11/12 md:w-10/12 mx-auto flex flex-col justify-start items-start">
      <div className="flex items-center gap-2">
        <h5 className="my-3 uppercase">My Orders</h5>{" "}
        <p class="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>
      <div className="divide-y divide-gray-200"></div>
      <div className="my-4 w-full flex items-center justify-between">
        <h6 variant="h5" color="blue-gray" className="">
          Latest orders
        </h6>
        <Link
          as="a"
          href="#"
          variant="small"
          color="blue"
          className="font-bold text-sm"
        >
          View all
        </Link>
      </div>
      <OrdersPage />
    </div>
  );
}

export default OrdersList;
