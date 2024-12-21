import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import {
  allSunglassProduct,
  fetchSunglassProductAsync,
  SunglassProductStatus,
} from "./sunglassProductSlice";
import Loader from "../../common/Loader";

export default function OrderForm() {
  const products = useAppSelector(allSunglassProduct);
  const status = useAppSelector(SunglassProductStatus);
  const dispatch = useAppDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // const products = [
  //   { id: 1, name: "Dear Hair Cleanser & Tonic 200-200 ML", price: 1230 },
  //   { id: 2, name: "Dear Hair Cleanser 200 ML", price: 490 },
  //   { id: 3, name: "Dear Hair Tonic 200 ML", price: 760 },
  // ];

   const handleSelectProduct = (productId) => {
     setSelectedProduct((prevSelectedProduct) =>
       prevSelectedProduct === productId ? null : productId
     );
   };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    const selected = products.find((product) => product.id === selectedProduct);
    return selected ? selected.price + 70 : 0; // Adding shipping cost of 70
  };
  useEffect(() => {
    dispatch(fetchSunglassProductAsync());
  }, [dispatch]);
  // console.log("sunglassProducts 123", products, selectedProduct);
  if (status === "loading") {
    return <Loader />;
  }
  return (
    <div id="orderForm" className="bg-green-100 min-h-screen p-8">
      {/* Header Section */}
      <div className="bg-green-200 p-4 rounded-lg text-center">
        <p className="text-lg font-bold">কোন প্রশ্ন বা অর্ডার করতে কল করুনঃ</p>
        <div className="my-7 flex justify-center items-center gap-3 ">
          <a
            href="tel:01996111027"
            className="text-lg font-semibold text-white bg-green-500 px-4 py-2 rounded-lg"
          >
            📞 0199-6111027
          </a>
          <a
            href="tel:01996111027"
            className="text-lg font-semibold text-white bg-green-500 px-4 py-2 rounded-lg"
          >
            📞 0199-6111027
          </a>
        </div>
      </div>

      {/* Order Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Product List Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Choose Your Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className={`p-4 border rounded-lg shadow-sm cursor-pointer flex items-center ${
                  selectedProduct === product.id
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300"
                }`}
                onClick={() => handleSelectProduct(product.id)}
              >
                {/* Product Image */}
                <div className="w-2/5">
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>

                {/* Product Details */}
                <div className="w-3/5 pl-4">
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-gray-600">৳ {product.price}</p>

                  {/* Checkbox to select product */}
                  <input
                    type="checkbox"
                    checked={selectedProduct === product.id}
                    onChange={() => handleSelectProduct(product.id)}
                    className="mt-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Details & Order Summary Section */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Delivery Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-semibold">আপনার নাম লিখুন*</label>
                <input
                  type="text"
                  name="name"
                  value={deliveryDetails.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
              <div>
                <label className="block font-semibold">
                  আপনার মোবাইল নাম্বার লিখুন*
                </label>
                <input
                  type="text"
                  name="phone"
                  value={deliveryDetails.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="আপনার মোবাইল নাম্বার লিখুন"
                />
              </div>
              <div>
                <label className="block font-semibold">ঠিকানা লিখুন*</label>
                <textarea
                  name="address"
                  value={deliveryDetails.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="House number and street name"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-4">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between">
              <p>Selected Product</p>
              <p>
                ৳{" "}
                {selectedProduct
                  ? products.find((p) => p.id === selectedProduct).price
                  : 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>৳ 70</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>৳ {calculateTotal()}</p>
            </div>
            <button
              className={`w-full py-2 mt-4 rounded ${
                selectedProduct
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!selectedProduct}
            >
              Place Order ৳ {calculateTotal()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
