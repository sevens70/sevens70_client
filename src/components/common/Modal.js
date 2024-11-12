"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function ModalDialog({
  size,
  setSize,
  ratingPoint,
  setRatingPoint,
  comment,
  setComment,
  item,
  handleCancel,
  handleSave,
}) {
  const handleOpen = (value) => setSize(value);
  return (
    <>
      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>Review & Ratings</DialogHeader>
        <DialogBody>
          {" "}
          <>
            {" "}
            <h4 className="font-jost font-normal text-dark-900">
              {item?.product?.title}
            </h4>
            <p className="text-sm text-dark-700 font-jost my-3">
              Choose the rating:{" "}
              {/* <span className="text-grey-700">543</span> */}
            </p>
            <select
              value={ratingPoint}
              onChange={(e) => {
                setRatingPoint(e.target.value);
              }}
              className={`relative mb-3 z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary 
                      text-black font-jost`}
            >
              <option
                value=""
                disabled
                className="text-body dark:text-bodydark"
              >
                Select your rating
              </option>
              <option value="0" className="text-body dark:text-bodydark">
                0
              </option>
              <option value="1" className="text-body dark:text-bodydark">
                1
              </option>
              <option value="2" className="text-body dark:text-bodydark">
                2
              </option>
              <option value="3" className="text-body dark:text-bodydark">
                3
              </option>
              <option value="4" className="text-body dark:text-bodydark">
                4
              </option>
              <option value="5" className="text-body dark:text-bodydark">
                5
              </option>
            </select>
            <p className="text-sm text-dark-700 font-jost my-3">
              Review about this product
              {/* <span className="text-grey-700">543</span> */}
            </p>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              rows={3}
              className="ring-gray-300 text-xsm w-full rounded-lg bg-transparent py-4 pl-6 pr-10 text-black outline-ring-gray-300 ring-1 ring-inset focus:border-primary focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus-visible:shadow-none font-jost"
              defaultValue={""}
            />
            <div className="mt-3 flex justify-start">
              <button
                onClick={handleCancel}
                className="mr-3 font-jost rounded-md border border-indigo-600 bg-transparent px-6 py-2 text-xsm font-medium text-black shadow-sm"
              >
                Cancel
              </button>{" "}
              <button
                onClick={() => handleSave(item?.product?.id)}
                className="rounded-md font-jost border border-transparent bg-indigo-600 px-6 py-2 text-xsm font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </>
        </DialogBody>
      </Dialog>
    </>
  );
}
