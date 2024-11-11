"use client";

import { Breadcrumbs, Button } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { Card, IconButton } from "@material-tailwind/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { getCarrency } from "../../lib/features/currencySlice";
import toast from "react-hot-toast";
import {
  deleteItemFromCartAsync,
  resetCartAsync,
  selectItems,
  updateCartAsync,
} from "../features/cart/cartSlice";

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
  {
    head: "Quantity",
  },
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

export default function AddToCart() {
  const pathname = usePathname();
  const router = useRouter();
  const currencyData = useAppSelector(getCarrency);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectItems);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[300px] py-3 text-center content-center">
        <h6
          className="font-jost capitalize text-dark-500 my-3"
          style={{ marginTop: "20px" }}
        >
          Your Shopping is Empty
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
  const handleRemove = (id) => {
    dispatch(deleteItemFromCartAsync(id));
  };

  const handleDecreaseQuantity = (id, quantity) => {
    let modifyQuantity = +quantity - 1;
    dispatch(updateCartAsync({ id: id, quantity: modifyQuantity }));
    toast.success("Item quantity is decreased");
  };
  const handleIncreaseQuantity = (id, quantity) => {
    let modifyQuantity = +quantity + 1;
    dispatch(updateCartAsync({ id: id, quantity: modifyQuantity }));
    toast.success("Item quantity is increased");
  };
  let deliveryCharge = 60;
  const totalAmount =
    cartItems?.reduce(
      (accumulator, item) =>
        item.product.discountPrice * item.quantity + accumulator,
      0
    ) + deliveryCharge;

  return (
    <div>
      <section className="">
        <div className=" w-full bg-secondary-500  flex flex-col justify-center items-center h-[200px]">
          <h3 className="text-xmd capitalize">Shopping Cart</h3>
          <Breadcrumbs>
            <Link href="/" className="opacity-60 text-primaryRed text-sm">
              Home
            </Link>
            <a href="#" className="capitalize">
              {pathname.replace("/", "")}
            </a>
          </Breadcrumbs>
        </div>
        <div className="my-20 w-11/12 md:w-10/12 mx-auto flex flex-col justify-center items-center">
          <Card className="h-full w-full overflow-auto pb-5">
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
                {cartItems?.map(
                  ({ id, quantity, product, size, color }, index) => {
                    console.log("product 01100", product);
                    const isLast = index === cartItems.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-gray-300";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <div className="flex items-center gap-1">
                            <img
                              src={product?.thumbnail}
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
                          <Link href={`/product/${product.id}`}>
                            {" "}
                            <p className="font-normal text-grey-600 font-jost capitalize">
                              {product?.title}
                            </p>
                          </Link>
                        </td>
                        <td className={classes}>
                          <p className="font-xsm text-grey-600 font-jost capitalize">
                            {product?.category}
                          </p>
                        </td>
                        <td className={classes}>
                          <p className="font-normal text-gray-600">
                            <div
                              size="sm"
                              className="font-jost font-normal text-sm bg-transparent font-normal capitalize text-dark-900  border-[1px] border-grey-600 max-w-[120px] rounded flex items-center gap-3 bg-[#F1F1F1]"
                            >
                              <Button
                                size="sm"
                                className="border-none !shadow-none bg-transparent text-grey-200 text-xsm py-2 pl-3 pr-0 rounded-r-none bg-white"
                                disabled={quantity < 2}
                                onClick={() => {
                                  handleDecreaseQuantity(id, quantity);
                                }}
                              >
                                {" "}
                                <FaMinus />
                              </Button>{" "}
                              <div className="px-2 w-[50px] text-center">
                                {" "}
                                {quantity}
                              </div>
                              <Button
                                size="sm"
                                className="border-none !shadow-none bg-transparent text-grey-200 text-xsm py-2 pl-0 pr-3 rounded-l-none  bg-white"
                                onClick={() => {
                                  const matchingItem = cartItems?.find(
                                    (item) => item.id === id
                                  );
                                  if (matchingItem?.quantity >= 4) {
                                    toast.error(
                                      "Quantity of products must be 4 or less"
                                    );
                                  } else {
                                    handleIncreaseQuantity(id, quantity);
                                  }
                                }}
                              >
                                <FaPlus />
                              </Button>
                            </div>
                          </p>
                        </td>
                        <td className={classes}>
                          <p
                            variant="small"
                            className="font-normal text-gray-600"
                          >
                            {/* {currencyData?.symbol} */}৳{" "}
                            {`${product?.discountPrice}.00`}
                          </p>
                        </td>
                        <td className={classes}>
                          <p
                            variant="small"
                            className="font-normal text-gray-600"
                          >
                            {/* {currencyData?.symbol} */}৳{" "}
                            {product?.discountPrice * quantity}
                          </p>
                        </td>
                        <td className={classes}>
                          <IconButton
                            onClick={() => handleRemove(id)}
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
              <div>
                <h6 className="font-jost flex justify-end my-2 mr-7">
                  Total:{" "}
                  <span className="ml-7 !text-light-500">
                    {/* {currencyData?.symbol} */}৳ {totalAmount}
                  </span>
                </h6>
              </div>
              <div>
                <h6 className="font-jost flex justify-end my-2 mr-7">
                  Delivery Charge:{" "}
                  <span className="ml-7 !text-light-500">
                    {`60${currencyData?.symbol} for inside Dhaka`}
                  </span>
                </h6>
              </div>

              <div className="flex justify-between">
                {" "}
                <Button
                  color="dark"
                  onClick={() => dispatch(resetCartAsync())}
                  className="mt-10 bg-primaryRed"
                >
                  Clear Cart
                </Button>
                <Button
                  color="dark"
                  onClick={() => router.push("/placeOrder")}
                  className="mt-10 bg-dark-500 flex items-center gap-2"
                >
                  Checkout <FaLongArrowAltRight className="fill-white" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
