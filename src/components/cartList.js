import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartTotal } from "../lib/features/cartSlice";
import CartItem from "./CartItem";
import { Button } from "@material-tailwind/react";

const CartContainer = () => {
  const { totalAmount, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
        {/* <Button className="mx-2" onClick={() => router.push("/")}>
          Get To Product
        </Button> */}
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
            Total <span>${totalAmount}</span>
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

export default CartContainer;
