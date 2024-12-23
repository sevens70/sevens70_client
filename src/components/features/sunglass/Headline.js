"use client";
import React from "react";
import DeliverySection from "./DeliverySection";
import { moveToOrderForm } from "../../../lib/utils/utils";
import { useAppSelector } from "../../../lib/hooks";
import { allSunglassProduct } from "./sunglassProductSlice";
import SliderWithContent from "./SliderWithContent";
import ContentSection from "./ContentSection";
export default function Headline({ selectedProducts, setSelectedProducts }) {
  const products = useAppSelector(allSunglassProduct);
  return (
    <section className="w-full">
      {/* Assurance Section */}
      <div className="py-8 text-center mt-7">
        <h2 className="text-md font-bold mb-4">নিশ্চিন্ত থাকুন!</h2>
        <p className="text-gray-700 py-4 text-sm max-w-2xl mx-auto">
          Seven’s 7.0 Polarized Sunglass নিয়ে এসেছে এমন সমাধান যা সুরক্ষা আর
          স্টাইলের মধ্যে কোনো কম্প্রোমাইজ করে না।
        </p>
      </div>

      <SliderWithContent products={products} />

      {/* Benefit Section */}
      <div className=" bg-[#FBBF1A] relative py-20 px-[20px] md:px-[100px] lg:px-[200px]">
        <h2 className="text-md font-bold text-center mb-[60px] leading-9">
          কেন আমাদের থেকেই নেবেন এই চশমা ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div className="text-left mb-5 ">
            <h2 className="text-md font-bold text-left mt-[60px] mb-[40px]">
              অতুলনীয় সুবিধা:
            </h2>
            <p className="font-bold text-left text-lg mb-1">
              UV প্রটেকশন লেন্স :{" "}
              <span className="font-medium text-sm">
                সূর্যের ক্ষতিকারক রশ্মি থেকে ফুলপ্রুফ সুরক্ষা।
              </span>
            </p>
            <p className="font-bold text-left text-lg mb-1">
              নমনীয় রাবার ফ্রেম :{" "}
              <span className="font-medium text-sm">
                ভাঙার চিন্তা ছাড়াই সন্তানের খেলাধুলার সঙ্গী।
              </span>
            </p>
            <p className="font-bold text-left text-lg mb-1">
              স্টাইলিশ ডিজাইন :{" "}
              <span className="font-medium text-sm">
                এমন আকর্ষণীয় ডিজাইন যা তাদের পছন্দ হবেই।
              </span>
            </p>

            <h2 className="text-md font-bold text-left mt-[60px] mb-[40px] ">
              কেন Seven’s 7.0 ?
            </h2>
            <p className="font-bold text-left text-lg mb-1">
              <span className="font-medium text-sm">
                যারা সন্তানের চোখের সুরক্ষার সঙ্গে তাদের স্টাইলকেও সমান গুরুত্ব
                দেন। যারা চান সন্তানের প্রতিটি মুহূর্ত হোক নিরাপদ ও ফ্যাশনেবল।
                যারা বিশ্বাস করেন সুরক্ষাও হতে পারে স্টাইলিশ।
              </span>
            </p>
          </div>

          <div className="flex justify-center items-center gap-3 px-[20px]">
            {/* <div className="w-full flex justify-center items-center gap-3"> */}
            <img
              priority="true"
              src="/sunglass/benefit_img.png"
              alt="logo"
              className="max-w-[350px] w-full h-full"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="py-10 text-center bg-dark text-white">
        <h2 className="text-md font-bold mb-4 text-[#FBBF1A] leading-9">
          সুরক্ষা এবং স্টাইলের এমন সংমিশ্রণ আর কোথাও পাবেন না।
        </h2>
        <button
          onClick={moveToOrderForm}
          className="px-4 py-3 bg-[#FBBF1A] text-sm text-dark font-medium rounded rounded-lg"
        >
          আমি এখনই অর্ডার করতে চাই
        </button>
      </div>
      <DeliverySection />
      <ContentSection
        products={products}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      {/* <div className="py-8 text-center mt-7">
        <h2 className="text-md font-bold mb-4 leading-9">
          সুরক্ষার অভাবে স্টাইলের নামে ভুল করছেন না তো?
        </h2>
        <p className="text-gray-700 mb-2 py-4 text-sm max-w-2xl mx-auto">
          সস্তা সানগ্লাস হয়তো স্টাইলিশ লাগে, কিন্তু সন্তানের চোখের সুরক্ষায়
          কার্যকর নয়। Seven’s 7.0 Polarized Sunglass নিশ্চিত করে চোখের জন্য
          সুরক্ষার সেরা ব্যবস্থা এবং অনন্য স্টাইল।
        </p>
        <div className="w-full mb-10 flex justify-center items-center flex-wrap gap-3">
          {products?.map((item) => (
            <img
              onClick={() => {
                if (selectedProducts.find((p) => p.id === item.id)) {
                  setSelectedProducts(
                    selectedProducts.filter((p) => p.id !== item.id)
                  );
                } else {
                  setSelectedProducts([...selectedProducts, item]);
                }
              }}
              priority="true"
              src={item?.image}
              alt="logo"
              className="max-w-[250px] w-full h-full cursor-pointer"
              width={500}
              height={500}
            />
          ))}
        </div>
      </div> */}
      <div className="bg-[#FBBF1A] py-[60px] md:py-[70px] px-[20px] md:px-[100px] lg:px-[200px]">
        {" "}
        <h2 className="text-md font-bold text-left mb-[20px] leading-9">
          সন্তানের চোখের জন্য সুরক্ষা আর স্টাইল-সব এক জায়গায়।
        </h2>
        <p className="font-bold text-left text-lg mb-1">
          ✔ 100% UV প্রটেকশন লেন্স।
        </p>
        <p className="font-bold text-left text-lg mb-1">
          ✔ মজবুত ও নমনীয় রাবার ফ্রেম।
        </p>
        <p className="font-bold text-left text-lg mb-1">
          ✔ স্টাইলিশ, বাচ্চাদের জন্য ডিজাইন করা বিশেষ লুক।
        </p>
        <div className="mt-5 text-center">
          {" "}
          <button
            onClick={moveToOrderForm}
            className="px-4 mt-3  py-3 bg-dark text-sm text-[#FBBF1A] font-medium rounded rounded-lg"
          >
            আমি এখনই অর্ডার করতে চাই
          </button>
        </div>
      </div>
      {/* Target Audience Section */}
    </section>
  );
}
