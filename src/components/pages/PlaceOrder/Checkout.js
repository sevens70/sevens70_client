// import { Link } from "react-router-dom";
"use client";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import {
  deleteItemFromCartAsync,
  resetCartAsync,
  selectItems,
  updateCartAsync,
} from "../../../components/features/cart/cartSlice";
// import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { updateUserAsync } from "../../components/features/user/userSlice";
import { updateUserAsync } from "../../../components/features/user/userSlice";
import { useEffect, useState } from "react";
import {
  createOrderAsync,
  // selectCurrentOrder,
  selectStatus,
} from "../../../components/features/order/orderSlice";
import { selectUserInfo } from "../../../components/features/user/userSlice";
import Link from "next/link";
import toast from "react-hot-toast";
import { useAppSelector } from "../../../lib/hooks";
import { useRouter } from "next/navigation";
// import Loader from "../../common/Loader";
import { getCarrency } from "../../../lib/features/currencySlice";

const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

function Checkout() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const user = useSelector(selectUserInfo);
  const items = useSelector(selectItems);
  const status = useSelector(selectStatus);
  // const orderState = useAppSelector((state)=> state.order)
  const currencyData = useAppSelector(getCarrency);
  let deliveryCharge = 60;
  const totalAmount =
    items?.reduce(
      (accumulator, item) =>
        item.product.discountPrice * item.quantity + accumulator,
      0
    ) + deliveryCharge;
  const totalItems = items?.reduce((total, item) => item.quantity + total, 0);

  const [isOrdering, setIsOrdering] = useState(false);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [bKashPayId, setBKashPayId] = useState("");

  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ id: item.id, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
  };

  const handleAddress = (e) => {
    setSelectedAddress(user.addresses[e.target.value]);
  };

  const handlePayment = (e) => {
    console.log(e.target.value);
    setPaymentMethod(e.target.value);
  };

  const initializeBkashPayment = () => {
    console.log("initialized");
    $("#bKash_button").removeAttr("disabled");

    bKash.init({
      paymentMode: "checkout",
      paymentRequest: {
        amount: totalAmount,
        intent: "sale",
      },
      createRequest: function () {
        document.getElementById("bKashFrameWrapper").style.display = "block";

        fetch(`${BASE_URL}/bkash/init`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            amount: totalAmount,
            merchantInvoiceNumber: nanoid(),
            cart: items,
            items,
            totalAmount,
            totalItems,
            user: user.id,
            paymentMethod,
            selectedAddress,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === "successful") {
              setBKashPayId(data.data.paymentID);
              bKash.create().onSuccess(data.data);
            } else {
              bKash.create().onError();
            }
          })
          .catch((err) => {
            console.log(err);
            message.error("Can not connect to server");
          });
      },
      executeRequestOnAuthorization: function () {
        console.log("bkash", bKashPayId);

        fetch(`${BASE_URL}/bkash/exec`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            paymentID: bKashPayId,
            user: user.id,
            totalAmount,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.errorCode !== undefined) {
              bKash.execute().onError();
            } else {
              const order = {
                items,
                totalAmount,
                totalItems,
                user: user.id,
                paymentMethod,
                selectedAddress,
                status: "pending",
              };
              dispatch(createOrderAsync(order));
              setIsOrdering(false);
              document.getElementById("bKashFrameWrapper").style.display =
                "none";
            }
          })
          .catch((err) => {
            console.log(err);
            setIsOrdering(false);
            toast.error("Unable to create the payment");
            document.getElementById("bKashFrameWrapper").style.display = "none";
            bKash.execute().onError();
          });
      },
      onClose: function () {
        setIsOrdering(false);
        document.getElementById("bKashFrameWrapper").style.display = "none";
        toast.error("Payment Canceled");
      },
    });
  };
  console.log(
    "item 123",
    items,
    totalItems,
    totalAmount,
    paymentMethod,
    selectedAddress
  );
  const handleOrder = (e) => {
    setIsOrdering(true);
    if (selectedAddress && paymentMethod) {
      if (paymentMethod === "card") {
        // initializeBkashPayment();
      } else {
        setIsOrdering(true);
        const order = {
          items,
          totalAmount,
          totalItems,
          user: user.id,
          paymentMethod,
          selectedAddress,
          status: "pending",
        };
        dispatch(createOrderAsync(order));
        setIsOrdering(false);
      }
    } else {
      toast.error("Enter Address and Payment method");
    }
  };

  useEffect(() => {
    if (status === "success") {
      dispatch(resetCartAsync());
      toast.success("Order created successfully");
      router.push("/orders");
    }
  }, [status]);

  useEffect(() => {
    if (paymentMethod === "card" && selectedAddress) {
      initializeBkashPayment();
    }
  }, [totalAmount, bKashPayId, paymentMethod, selectedAddress]);

  return (
    <>
      {/* {!items.length && <Navigate to="/" replace={true}></Navigate>} */}
      {/* {currentOrder && currentOrder.paymentMethod === "cash" && (
        <Navigate
          to={`/order-success/${currentOrder.id}`}
          replace={true}
        ></Navigate>
      )} */}
      {/* {currentOrder && currentOrder.paymentMethod === "card" && (
        <Navigate to={`/stripe-checkout/`} replace={true}></Navigate>
      )} */}

      {/* {status === "loading" ? (
        <Loader />
      ) : (

      )} */}
      {/* <ConfirmModal
        isOpen={isModalOpen}
        title="Confirm Action"
        message="Do you want to pay with bKash?"
        onConfirm={handleConfirm}
        onCancel={handleCloseModal}
      /> */}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {/* This form is for address */}
            <form
              className="bg-white px-5 py-12 mt-12"
              noValidate
              onSubmit={handleSubmit((data) => {
                dispatch(
                  updateUserAsync({
                    ...user,
                    addresses: [...user.addresses, data],
                  })
                );
                reset();
              })}
            >
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Full name <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("name", {
                            required: "name is required",
                          })}
                          id="name"
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.name && (
                          <p className="text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          {...register("email", {
                            required: "email is required",
                          })}
                          type="email"
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.email && (
                          <p className="text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="pl-3 block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone"
                          {...register("phone", {
                            required: "phone is required",
                          })}
                          type="tel"
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.phone && (
                          <p className="text-red-500">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Street address <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("street", {
                            required: "street is required",
                          })}
                          id="street"
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.street && (
                          <p className="text-red-500">
                            {errors.street.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City <span className="text-red-500">*</span>
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("city", {
                            required: "city is required",
                          })}
                          id="city"
                          autoComplete="address-level2"
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.city && (
                          <p className="text-red-500">{errors.city.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("state", {
                            // required: "state is required",
                          })}
                          id="state"
                          autoComplete="address-level1"
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {/* {errors.state && (
                          <p className="text-red-500">{errors.state.message}</p>
                        )} */}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="pinCode"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("pinCode", {
                            // required: "pinCode is required",
                          })}
                          id="pinCode"
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {/* {errors.pinCode && (
                          <p className="text-red-500">
                            {errors.pinCode.message}
                          </p>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    onClick={(e) => reset()}
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Address
                  </button>
                </div>
              </div>
            </form>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-sm font-semibold leading-7 text-gray-900">
                Addresses
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Choose from Existing addresses
              </p>
              {user.addresses?.length > 0 ? (
                <ul>
                  {user.addresses.map((address, index) => (
                    <li
                      key={index}
                      className="flex text-sm justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200 mb-3 cursor-pointer"
                      onClick={() =>
                        handleAddress({ target: { value: index } })
                      }
                    >
                      <div className="flex gap-x-4">
                        <input
                          onChange={handleAddress}
                          name="address"
                          type="radio"
                          value={index}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                          checked={selectedAddress === user.addresses[index]} // Ensure the radio remains active when selected
                          onClick={(e) => e.stopPropagation()} // Prevent the li click when clicking the radio
                        />
                        <div className="min-w-0 flex-auto">
                          <p className="text-xsm font-semibold leading-6 text-gray-900">
                            {address.name}
                          </p>
                          <p className="mt-1 truncate text-xsm leading-5 text-gray-500">
                            {address.street}
                          </p>
                          <p className="mt-1 truncate text-xsm leading-5 text-gray-500">
                            {address.pinCode}
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <p className="text-xsm leading-6 text-gray-900">
                          Phone: {address.phone}
                        </p>
                        <p className="text-xsm leading-6 text-gray-500">
                          {address.city}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-1 text-xsm leading-6 text-gray-600">
                  No address found.
                </p>
              )}

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Payment Methods
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Choose One
                  </p>
                  <div className="mt-6 space-y-6">
                    <div
                      className="flex items-center gap-x-3 cursor-pointer"
                      onClick={() =>
                        handlePayment({ target: { value: "cash" } })
                      }
                    >
                      <input
                        id="cash"
                        name="payments"
                        onChange={handlePayment}
                        value="cash"
                        type="radio"
                        checked={paymentMethod === "cash"}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                        onClick={(e) => e.stopPropagation()} // Prevent parent div's onClick
                      />
                      <label
                        htmlFor="cash"
                        className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
                      >
                        Cash
                      </label>
                    </div>
                    <div
                      className="flex items-center gap-x-3 cursor-pointer"
                      onClick={() =>
                        handlePayment({ target: { value: "card" } })
                      }
                    >
                      <input
                        id="card"
                        onChange={handlePayment}
                        name="payments"
                        value="card"
                        type="radio"
                        checked={paymentMethod === "card"}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                        onClick={(e) => e.stopPropagation()} // Prevent parent div's onClick
                      />
                      <label
                        htmlFor="card"
                        className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
                      >
                        Pay with Bkash
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="mx-auto mt-12 bg-white max-w-7xl px-2 sm:px-2 lg:px-4">
              <div className="border-t border-gray-200 px-0 py-6 sm:px-0">
                <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
                  Cart
                </h1>
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.product.thumbnail}
                            alt={item.product.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-sm font-medium text-gray-900">
                              <h3>
                                <a href={item.product.id}>
                                  {item.product.title}
                                </a>
                              </h3>
                              <p className="ml-4">
                                ${item.product.discountPrice}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.product.brand}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-gray-500">
                              <label
                                htmlFor="quantity"
                                className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                              >
                                Qty
                              </label>
                              <select
                                onChange={(e) => handleQuantity(e, item)}
                                value={item.quantity}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>

                            <div className="flex">
                              <button
                                onClick={(e) => handleRemove(e, item.id)}
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 px-2 py-6 sm:px-2">
                <div className="flex justify-between my-2 text-sm font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>$ {totalAmount}</p>
                </div>
                <div className="flex justify-between my-2 text-sm font-medium text-gray-900">
                  <p>Total Items in Cart</p>
                  <p>{totalItems} items</p>
                </div>
                <div className="flex justify-between my-2 text-sm font-medium text-gray-900">
                  <p>Delivery charge</p>
                  <p> {`60${currencyData?.symbol} for inside Dhaka`}</p>
                </div>
                <div className="flex justify-between my-2 text-sm font-medium text-gray-900">
                  <p>Total:</p>
                  <p className="!text-light-500">
                    {" "}
                    {/* {currencyData?.symbol} */}৳ {totalAmount}
                  </p>
                </div>

                <div className="mt-6">
                  {selectedAddress && paymentMethod === "card" ? (
                    <button
                      id="bKash_button"
                      onClick={handleOrder}
                      className={`flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 w-full ${
                        isOrdering ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={isOrdering}
                    >
                      {isOrdering ? "Submitting Order" : "Order Now with Bkash"}
                    </button>
                  ) : (
                    <button
                      onClick={handleOrder}
                      className={`flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 w-full ${
                        isOrdering ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={isOrdering}
                    >
                      {isOrdering ? "Submitting Order" : "Order Now"}
                    </button>
                  )}
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <Link href="/">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
