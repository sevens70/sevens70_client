// ContentSection.js
"use client";
import React, { useState } from "react";
import ImagesSlider from "./ImagesSlider";
const ContentSection = ({
  products,
  selectedProducts,
  setSelectedProducts,
}) => {
  return (
    <div className="py-8 text-center mt-7">
      <h2 className="text-md font-bold mb-4 leading-9">
        সুরক্ষার অভাবে স্টাইলের নামে ভুল করছেন না তো?
      </h2>
      <p className="text-gray-700 mb-2 py-4 text-sm max-w-2xl mx-auto">
        সস্তা সানগ্লাস হয়তো স্টাইলিশ লাগে, কিন্তু সন্তানের চোখের সুরক্ষায়
        কার্যকর নয়। Seven’s 7.0 Polarized Sunglass নিশ্চিত করে চোখের জন্য
        সুরক্ষার সেরা ব্যবস্থা এবং অনন্য স্টাইল।
      </p>
      <div className="px-[20px] sm:px-[30px] md:px-[100px] lg:px-[20%]">
        {" "}
        <ImagesSlider
          products={products}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </div>
      {/* <div className="w-full mb-10 flex justify-center items-center flex-wrap gap-3">
        {products?.map((item) => (
          <img
            key={item.id}
            onClick={() => handleProductClick(item)}
            src={item?.image}
            alt="logo"
            className={`max-w-[250px] w-full h-full cursor-pointer transition-transform duration-200 ${
              selectedProducts.find((p) => p.id === item.id) ? "scale-105" : ""
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ContentSection;
