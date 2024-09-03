"use client";
import React, { useEffect } from "react";
import { clearCart, getCartTotal } from "../../lib/features/cartSlice";
import { Button } from "@material-tailwind/react";
import CartItem from "./cartItem";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { useRouter } from "next/navigation";
import { getCarrency } from "../../lib/features/currencySlice";

const CartList = () => {
  const router = useRouter();
  const currencyData = useAppSelector(getCarrency);
  const { totalAmount, items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  if (items.length === 0) {
    return (
      <>
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
      </>
    );
  }

  return (
    <div className="max-h-[500px] w-[500px]">
      <h6 className="font-jost capitalize text-dark-500 my-3">
        Your Shooping Cart
      </h6>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <div>
        <hr />
        <div>
          <h6 className="font-jost flex justify-evenly my-2">
            Total{" "}
            <span>
              {currencyData?.symbol}
              {totalAmount}
            </span>
          </h6>
        </div>

        <Button
          color="dark"
          onClick={() => dispatch(clearCart())}
          className="mt-10 bg-primaryRed"
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default CartList;
