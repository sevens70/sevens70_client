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
      {/* <div className="w-full divide-y divide-gray-200">
        {items.map(({ name, disc_price, prd_category, image }, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-between pb-3 pt-3 last:pb-0"
          >
            <div className="flex items-center gap-3">
              <img
                className="h-[150px] max-w-[170px] rounded-lg object-cover object-center"
                // src={image}
                src={"/category/cate1.png"}
                alt="__img"
              />
              <div>
                <h6 className="text-sm text-dark-700">{name}</h6>
                <h6 className="text-sm text-dark-700">{prd_category}</h6>
                <h6 className="text-sm">
                  Date: <span className="text-grey-200">12-12-2024</span>
                </h6>
                <h6 className="text-sm">
                  Payment:{" "}
                  <span className="text-grey-200">Cash on Delivery</span>
                </h6>
              </div>
            </div>
            <h6 className="text-sm text-grey-200"> ${disc_price}</h6>
            <div>
              {" "}
              <Button
                // onClick={handleFormSubmit}
                size="sm"
                className="font-jost font-medium text-sm capitalize bg-primaryRed rounded mt-5 flex items-center gap-2"
              >
                Track Order
              </Button>
            </div>
          </div>
        ))}
      </div> */}
      <OrdersPage />
    </div>
  );
}

export default OrdersList;
