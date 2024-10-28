"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PencilIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
// import { MdDelete } from "react-icons/md";
import Pagination from "../../../components/common/Pagination";
import { ITEMS_PER_PAGE } from "../../../components/common/constants";
import {
  fetchAllOrdersAsync,
  selectOrders,
  selectTotalOrders,
} from "./orderSlice";

function OrdersPage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const totalOrders = useSelector(selectTotalOrders);
  const [editableOrderId, setEditableOrderId] = useState(-1);
  const [sort, setSort] = useState({});

  const handleEdit = (order) => {
    setEditableOrderId(order.id);
  };

  const handlePage = (page) => {
    setPage(page);
  };

  const handleSort = (sortOption) => {
    const sort = { _sort: sortOption.sort, _order: sortOption.order };
    console.log({ sort });
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
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync({ sort, pagination }));
  }, [dispatch, page, sort]);

  console.log("orders", orders);

  return (
    <div className="w-full">
      {" "}
      <div className="relative overflow-x-auto">
        <div className="bg-gray-100 font-sans flex items-center justify-center overflow-hidden">
          <div className="w-full">
            <div className="my-0 rounded bg-white shadow-md">
              <table className="w-full table-auto">
                <thead className="font-jost font-medium">
                  <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                    <th className="px-3 py-3 text-left font-medium">Items</th>
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
                    <th className="px-6 py-3 text-center font-medium">Order Status</th>
                    <th className="px-6 py-3 text-center font-medium">Payment Method</th>
                    <th className="px-6 py-3 text-center font-medium">Payment Status</th>
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
                    {/* <th className="pr-4 py-3 text-center font-medium">Actions</th> */}
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-jost">
                  {orders?.map((order) => (
                    <tr
                      key={order.id}
                      className="border-gray-200 hover:bg-gray-100 border-b"
                    >
                      <td className="px-0 py-3 text-left">
                        {order.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-3 my-3 items-center"
                          >
                            <div className="mr-2">
                              <img
                                className="h-[70px] w-[70] rounded-full"
                                src={item.product.thumbnail}
                                alt={item.product.title}
                              />
                            </div>

                            <div>
                              <p>{item.product.title}</p>
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
                          {order.totalItems}
                        </div>
                      </td>
                      <td className="px-0 py-3 text-center">
                        <div className="flex items-center justify-center">
                          ${order.totalAmount}
                        </div>
                      </td>
                      <td className="px-0 py-3 text-center">
                        <span
                          className={`${chooseColor(
                            order.status
                          )} rounded-full !px-3 !py-2 text-xsm capitalize`}
                        >
                          {order.status}
                        </span>
                      </td>

                      <td className="px-0 py-3 text-center">
                        <div className="flex items-center justify-center">
                          {order.paymentMethod}
                        </div>
                      </td>

                      <td className="px-0 py-3 text-center">
                        <span
                          className={`${chooseColor(
                            order.paymentStatus
                          )} rounded-full !px-3 !py-2  text-xsm capitalize`}
                        >
                          {order.paymentStatus}
                        </span>
                      </td>

                      <td className="px-0 py-3 text-center">
                        <div className="flex items-center justify-center">
                          {order.createdAt
                            ? new Date(order.createdAt).toLocaleString()
                            : null}
                        </div>
                      </td>

                      {/* <td className="px-0 py-3 text-center">
                        <div className="item-center flex justify-center">
                          <div className="hover:scale-120 mr-2 w-6 transform hover:text-purple-500">
                            <IconButton
                              // onClick={() => {
                              //   dispatch(remove(id));
                              //   toast.success("Item is deleted from Cart.");
                              // }}
                              // onClick={() => handleRemove(id)}
                              className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
                            >
                              <MdDelete className="fill-white" />
                            </IconButton>
                          </div>
                        </div>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination
          page={page}
          setPage={setPage}
          handlePage={handlePage}
          totalItems={totalOrders}
        ></Pagination>
      </div>
    </div>
  );
}

export default OrdersPage;
