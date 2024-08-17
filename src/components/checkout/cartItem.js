"use client";
import React from "react";
import { useAppDispatch } from "../lib/hooks";
import { MdDelete } from "react-icons/md";
import { remove } from "../lib/features/cartSlice";
import { IconButton } from "@material-tailwind/react";
const CartItem = ({ ...item }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-evenly items-center gap-3 mb-3">
      <img
        src={item?.img}
        className="img-fluid"
        alt=""
        style={{
          objectFit: "cover",
          width: "5rem",
          height: "5rem",
          borderRadius: "50%",
        }}
      />
      <h5 className="font-jost" style={{ color: "#617d98" }}>
        ${item?.price}
      </h5>
      <p className="font-jost">{item?.amount}</p>
      <IconButton
        onClick={() => dispatch(remove(item?.id))}
        className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
      >
        <MdDelete className="fill-white" />
      </IconButton>
    </div>
  );
};

export default CartItem;
