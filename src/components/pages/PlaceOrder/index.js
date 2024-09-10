"use client";
import React, { useEffect, useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Button } from "@material-tailwind/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { addToOrders } from "../../../lib/features/ordersSlice";
import { clearCart, getCartTotal } from "../../../lib/features/cartSlice";
export default function PlaceOrder() {
  const router = useRouter();
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  let submitFormRef = null;
  const [formValue, setformValue] = useState([]);
  const handleFormSubmit = async () => {
    if (submitFormRef) {
      await submitFormRef();
      // const isValid = await submitFormRef();
      // if (isValid) {
      //   router.push("/orders");
      // }
    }
  };
  useEffect(() => {
    if (formValue?.length > 0) {
      dispatch(addToOrders(items));
      dispatch(clearCart([]));
      dispatch(getCartTotal());
      router.push("/orders");
    }
  }, [formValue]);

  return (
    <div>
      {" "}
      <div className="my-20 w-11/12 md:w-10/12 mx-auto flex flex-col justify-center items-center">
        <div className="grid grid-cols-12 gap-12 w-full">
          <div className="col-span-12 sm:col-span-12 md:col-span-6">
            <div className="flex items-center gap-2">
              <h5 className="my-3 uppercase">Delivery Inoformation</h5>{" "}
              <p class="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>
            <LeftSide
              setSubmitForm={(submitForm) => (submitFormRef = submitForm)}
              setformValue={setformValue}
            />
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-6">
            <div className="flex items-center gap-2">
              <h5 className="my-3 uppercase">Cart Total</h5>{" "}
              <p class="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
            </div>
            <RightSide />
            <div className="flex justify-end mt-3">
              <Button
                onClick={handleFormSubmit}
                size="md"
                className="font-jost font-medium text-sm capitalize bg-primaryRed rounded mt-5 flex items-center gap-2"
              >
                Place Order
                <FaLongArrowAltRight className="fill-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
