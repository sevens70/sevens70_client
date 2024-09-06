"use client";

import { Breadcrumbs, Button } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { Card, IconButton } from "@material-tailwind/react";

import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { getCarrency } from "../../../lib/features/currencySlice";

import {
  remove,
  getFavourites,
  clearFavList,
} from "../../../lib/features/favouriteSlice";

const TABLE_HEAD = [
  {
    head: "Image",
  },
  {
    head: "Name",
  },
  {
    head: "Category",
  },
  // {
  //   head: "Quantity",
  // },
  {
    head: "price",
  },
  {
    head: "Total",
  },
  {
    head: "",
  },
];

export default function Favourite() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const router = useRouter();
  const currencyData = useAppSelector(getCarrency);
  const { items } = useAppSelector((state) => state.favourites);
  console.log("items", items);
  const dispatch = useAppDispatch();

  if (items?.length === 0) {
    return (
      <div className="min-h-[300px] py-3 text-center content-center">
        <h6
          className="font-jost capitalize text-dark-500 my-3"
          style={{ marginTop: "20px" }}
        >
          Your Favourite list is Empty
        </h6>
        <Button
          className="mx-2 mt-3 capitalize text-base bg-primaryRed text-white font-jost"
          onClick={() => router.push("/")}
        >
          Get To Product
        </Button>
      </div>
    );
  }

  return (
    <div>
      <section className="">
        <div className=" w-full bg-secondary-500  flex flex-col justify-center items-center h-[200px]">
          <h3 className="text-xmd capitalize">Favourite Product</h3>
          <Breadcrumbs>
            <Link href="/" className="opacity-60 text-primaryRed text-sm">
              Home
            </Link>
            <a href="#" className="capitalize">
              {pathname.replace("/", "")}
            </a>
          </Breadcrumbs>
        </div>
        <div className="my-10 w-11/12 md:w-10/12 mx-auto flex flex-col justify-center items-center">
          <Card className="h-full w-full overflow-auto">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map(({ head }) => (
                    <th key={head} className="border-b border-gray-300 p-4">
                      <div className="flex items-center gap-1">
                        <h6 className="font-medium font-jost text-dark-600">
                          {head}
                        </h6>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map(
                  ({ id, name, img, category, amount, price }, index) => {
                    const isLast = index === items.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-gray-300";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <div className="flex items-center gap-1">
                            <img
                              src={img}
                              className="img-fluid"
                              alt=""
                              style={{
                                objectFit: "cover",
                                width: "5rem",
                                height: "5rem",
                                borderRadius: "50%",
                              }}
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <p className="font-normal text-grey-600 font-jost">
                            {name}
                          </p>
                        </td>
                        <td className={classes}>
                          <p className="font-xsm text-grey-600 font-jost">
                            {category}
                          </p>
                        </td>

                        <td className={classes}>
                          <p
                            variant="small"
                            className="font-normal text-gray-600"
                          >
                            {currencyData?.symbol}
                            {price}
                          </p>
                        </td>
                        <td className={classes}>
                          <p
                            variant="small"
                            className="font-normal text-gray-600"
                          >
                            Total
                          </p>
                        </td>
                        <td className={classes}>
                          <IconButton
                            onClick={() => dispatch(remove(id))}
                            className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
                          >
                            <MdDelete className="fill-white" />
                          </IconButton>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
            {/* ==== */}
            <div className="my-3 mx-3">
              {/* <div>
                <h6 className="font-jost flex justify-end my-2 mr-7">
                  Total:{" "}
                  <span className="ml-7 !text-light-500">
                    {currencyData?.symbol}
                    {totalAmount}
                  </span>
                </h6>
              </div> */}
              {/* <div>
                <h6 className="font-jost flex justify-end my-2 mr-7">
                  Delivery Charge:{" "}
                  <span className="ml-7 !text-light-500">
                    (Will be Added soon)
                  </span>
                </h6>
              </div> */}

              <div className="flex justify-between">
                {" "}
                <Button
                  color="dark"
                  onClick={() => dispatch(clearFavList())}
                  className="mt-10 bg-primaryRed"
                >
                  Clear Favourite List
                </Button>
                {/* <Button
                  color="dark"
                  //   onClick={() => dispatch(clearCart())}
                  className="mt-10 bg-primaryRed"
                >
                  Checkout
                </Button> */}
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
