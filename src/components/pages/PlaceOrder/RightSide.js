import React from "react";
import { useAppSelector } from "../../../lib/hooks";
import { getCarrency } from "../../../lib/features/currencySlice";
import { Radio } from "@material-tailwind/react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-full w-full scale-105"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default function RightSide() {
  const currencyData = useAppSelector(getCarrency);
  const { totalAmount } = useAppSelector((state) => state.cart);
  return (
    <div>
      {" "}
      <div className="flex justify-between my-2 mr-7">
        <h6 className="text-sm">Sub Total: </h6>
        <h6 className="text-sm !text-light-500">
          {currencyData?.symbol}
          {totalAmount}
        </h6>
      </div>
      <hr />
      <div className="flex justify-between my-2 mr-7">
        <h6 className="text-sm">Delivery Charge: </h6>
        <h6 className="text-sm !text-light-500">(Will be Added soon)</h6>
      </div>
      <hr />
      <div className="flex items-center gap-2 mt-10">
        <h5 className="my-3 uppercase">Payment Method</h5>{" "}
        <p class="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
      </div>
      <div className="flex justify-between gap-3">
        <div className="border border-gray-900/10 w-auto pr-8 rounded">
          {" "}
          <Radio
            name="type"
            ripple={false}
            icon={<Icon />}
            className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0"
            label={
              <p
                color="blue-gray"
                className="font-normal text-blue-gray-400 ml-2"
              >
                Stripe
              </p>
            }
          />
        </div>
        <div className="border border-gray-900/10 w-auto pr-8 rounded">
          {" "}
          <Radio
            name="type"
            ripple={false}
            icon={<Icon />}
            className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0"
            label={
              <p
                color="blue-gray"
                className="font-normal text-blue-gray-400 ml-2"
              >
                Bikash
              </p>
            }
          />
        </div>
        <div className="border border-gray-900/10 w-auto pr-8 rounded">
          {" "}
          <Radio
            name="type"
            ripple={false}
            icon={<Icon />}
            defaultChecked
            className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0"
            label={
              <p
                color="blue-gray"
                className="font-normal text-blue-gray-400 ml-2"
              >
                Cash on Delivery
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}
