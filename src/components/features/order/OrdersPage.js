"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
// import { MdDelete } from "react-icons/md";
import Pagination from "../../../components/common/Pagination";
import { ITEMS_PER_PAGE } from "../../../components/common/constants";
import {
  fetchAllOrderByUserIdAsync,
  selectOrders,
  selectTotalOrders,
  selectStatus,
} from "./orderSlice";
import { selectLoggedInUser } from "../../../components/features/auth/authSlice";
import Loader from "../../common/Loader";
import { IconButton } from "@material-tailwind/react";
import Link from "next/link";
import ModalDialog from "../../../components/common/Modal";
import {
  addToRatingAsync,
  fetchAllRatingByUserIdAsync,
  selectRatingItems,
} from "../ratings/ratingsSlice";
import toast from "react-hot-toast";
function OrdersPage() {
  const user = useSelector(selectLoggedInUser);
  const allRatingByUser = useSelector(selectRatingItems);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const status = useSelector(selectStatus);
  const totalOrders = useSelector(selectTotalOrders);
  const [sort, setSort] = useState({});
  const [size, setSize] = useState(null);
  const [ratingPoint, setRatingPoint] = useState(0);
  const [comment, setComment] = useState("");
  const [item, setItem] = useState(null);
  const handlePage = (page) => {
    setPage(page);
  };

  const handleSort = (sortOption) => {
    const sort = { _sort: sortOption.sort, _order: sortOption.order };
    setSort(sort);
  };

  const chooseColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-purple-200 text-dark";
      case "dispatched":
        return "bg-yellow-200 text-dark-400";
      case "delivered":
        return "bg-green-200 text-green-600";
      case "received":
        return "bg-green-200 text-green-600";
      case "cancelled":
        return "bg-red-200 text-red-600";
      default:
        return "bg-purple-200 text-purple-600";
    }
  };
  useEffect(() => {
    dispatch(fetchAllRatingByUserIdAsync({ user }));
  }, [dispatch]);
  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrderByUserIdAsync({ sort, pagination, user }));
  }, [dispatch, page, sort]);
  if (status === "loading") {
    return (
      <div className="w-full text-center">
        <Loader />
      </div>
    );
  }
  const handleSave = (prdId) => {
    const newItem = {
      product: prdId,
      comment: comment,
      rating: parseInt(ratingPoint),
    };
    dispatch(
      addToRatingAsync({
        item: newItem,
        toast,
      })
    );
    setComment("");
    setRatingPoint(0);
    setSize(null);
  };
  const handleCancel = () => {
    setComment("");
    setRatingPoint(0);
    setSize(null);
  };
  return (
    <div className="w-full overflow-auto">
      <div className=" relative overflow-auto !overflow-x-auto">
        <div className=" bg-gray-100 font-sans flex items-center justify-center">
          <div className="w-full rounded bg-white overflow-auto shadow-md">
            <table className="table-auto">
              <thead className="font-jost font-medium">
                <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                  <th className="px-3  min-w-[200px] py-3 text-left font-medium">
                    Items
                  </th>
                  <th className="pr-6 py-3 text-left font-medium">quantity</th>
                  <th
                    className="cursor-pointer px-6 py-3 text-left font-medium"
                    onClick={(e) =>
                      handleSort({
                        sort: "totalAmount",
                        order: sort?._order === "asc" ? "desc" : "asc",
                      })
                    }
                  >
                    Total Amount{" "}
                    {sort._sort === "totalAmount" &&
                      (sort._order === "asc" ? (
                        <ArrowUpIcon className="inline h-4 w-4"></ArrowUpIcon>
                      ) : (
                        <ArrowDownIcon className="inline h-4 w-4"></ArrowDownIcon>
                      ))}
                  </th>
                  <th className="px-6 py-3 text-center font-medium">
                    Order Status
                  </th>
                  <th className="px-6 py-3 text-center font-medium">
                    Payment Method
                  </th>
                  <th className="px-4 py-3 text-center font-medium">
                    Payment Status
                  </th>
                  <th
                    className="cursor-pointer px-8 py-3 text-left font-medium"
                    onClick={(e) =>
                      handleSort({
                        sort: "createdAt",
                        order: sort?._order === "asc" ? "desc" : "asc",
                      })
                    }
                  >
                    Order Time{" "}
                    {sort._sort === "createdAt" &&
                      (sort._order === "asc" ? (
                        <ArrowUpIcon className="inline h-4 w-4"></ArrowUpIcon>
                      ) : (
                        <ArrowDownIcon className="inline h-4 w-4"></ArrowDownIcon>
                      ))}
                  </th>
                  <th className="px-6 py-3 min-w-[150px] text-center font-medium">
                    Review
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-jost">
                {orders?.map((order) => {
                  return (
                    <tr
                      key={order?.id}
                      className="border-gray-200 hover:bg-gray-100 border-b"
                    >
                      <td className="px-0 py-3 text-left">
                        {order?.items?.map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-3 my-3 items-center"
                          >
                            <div className="mr-2">
                              <img
                                className="h-[70px] w-[70px] rounded-full"
                                src={item.product.thumbnail}
                                alt={item.product.title}
                              />
                            </div>

                            <div>
                              <Link
                                href={`/product/${item?.product.id}`}
                              ></Link>
                              <p className="capitalize">{item.product.title}</p>
                              <p>
                                price: {item.product.discountPrice} - Qty:{" "}
                                {item.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      </td>
                      <td className="px-0 py-3 text-center">
                        <div className="flex items-center justify-center">
                          {order?.totalItems}
                        </div>
                      </td>
                      <td className="px-0 py-3 text-center">
                        <div className="flex items-center justify-center">
                          ৳ {order?.totalAmount}
                        </div>
                      </td>
                      <td className="px-0 py-3 text-center">
                        <span
                          className={`${chooseColor(
                            order?.status
                          )} rounded-full !px-3 !py-2 text-xsm capitalize`}
                        >
                          {order?.status}
                        </span>
                      </td>

                      <td className="px-2 py-3 text-center">
                        <div className="flex items-center justify-center">
                          {order?.paymentMethod}
                        </div>
                      </td>

                      <td className="px-0 py-3 text-center">
                        <span
                          className={`${chooseColor(
                            order?.paymentStatus
                          )} rounded-full !px-3 !py-2  text-xsm capitalize`}
                        >
                          {order?.paymentStatus}
                        </span>
                      </td>

                      <td className="px-3 py-3 text-center">
                        <div className="flex items-center justify-center">
                          {order?.createdAt
                            ? new Date(order?.createdAt)?.toLocaleString()
                            : null}
                        </div>
                      </td>

                      <td className="px-6 py-3 text-center">
                        <div className="">
                          <div className="flex flex-col justify-center hover:scale-120 transform hover:text-purple-500 w-full">
                            {order?.items?.map((item, index) => {
                              const matchedId = allRatingByUser.some(
                                (ratingItem) =>
                                  ratingItem?.product?.id === item?.product?.id
                              );
                              return (
                                <button
                                  onClick={() => {
                                    setItem(item);
                                    setSize("sm");
                                  }}
                                  className={`rounded capitalize block px-2 py-1 border border-black 
                                 ${
                                   order?.status === "delivered" && !matchedId
                                     ? "bg-[#fefefe] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
                                     : "bg-gray-300 cursor-not-allowed"
                                 }
                           ${
                             order?.items?.length === 1
                               ? ""
                               : index === order.items.length - 1
                               ? "mb-0"
                               : "mb-8"
                           }
                                     `}
                                  disabled={
                                    order?.status !== "delivered" ||
                                    (order?.status === "delivered" && matchedId)
                                  }
                                >
                                  {order?.status === "delivered" && matchedId
                                    ? "Reviewed"
                                    : "Add Review"}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* </div> */}
        </div>
        {orders?.length > 0 ? (
          <Pagination
            page={page}
            setPage={setPage}
            handlePage={handlePage}
            totalItems={totalOrders}
          ></Pagination>
        ) : (
          <p className="text-center my-10">No data found.</p>
        )}
      </div>
      {/* =============== for modal */}
      <ModalDialog
        size={size}
        setSize={setSize}
        setRatingPoint={setRatingPoint}
        ratingPoint={ratingPoint}
        comment={comment}
        setComment={setComment}
        item={item}
        handleSave={handleSave}
        handleCancel={handleCancel}
      />
      {/* =============== */}
    </div>
  );
}

export default OrdersPage;
