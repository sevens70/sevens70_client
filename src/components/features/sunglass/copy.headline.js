import React from "react";
import DeliverySection from "./DeliverySection";

export default function Headline() {
  return (
    <section className="w-full">
      {/* Assurance Section */}
      <div className="py-8 text-center mt-7">
        <h2 className="text-md font-bold mb-4">নিশ্চিন্ত থাকুন! Seven’s 7.0</h2>
        <p className="text-gray-700 py-4 text-sm max-w-2xl mx-auto">
          Polarized Sunglass নিয়ে এসেছে এমন সমাধান যা সুরক্ষা আর স্টাইলের মধ্যে
          কোনো কম্প্রোমাইজ করে না।
        </p>
      </div>
      <div className="bg-dark text-white flex flex-col items-center justify-start px-4">
        <div className="py-8">
          <div className="grid grid-cols-1 gap-8 px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left p-4 rounded-lg">
              {/* Content Section */}
              <div className="w-full md:w-3/4">
                <h1 className="ml-0 px-4 md:px-8 lg:ml-[100px] text-left mt-[30px] text-white font-bold text-xl sm:text-3xl lg:text-4xl mb-8">
                  সুরক্ষার প্রতিশ্রুতি,
                  <br />
                  <span className="text-white text-xl sm:text-3xl lg:text-5xl mt-4">
                    স্টাইলের আত্মবিশ্বাস।
                  </span>
                </h1>
                <p className="px-4 md:px-8 text-white text-sm ml-0 lg:ml-[100px]">
                  আপনার সন্তানের চোখ থাকবে UV রশ্মি থেকে ১০০% সুরক্ষিত, আর মজবুত
                  ও আরামদায়ক ফ্রেমের সঙ্গে তারা উপভোগ করবে ফ্যাশনের সেরা
                  অভিজ্ঞতা।
                </p>
              </div>
              {/* Image Section */}
              <div className="w-full flex justify-center items-center gap-3">
                <img
                  priority="true"
                  src="/sunglass/promised01.png"
                  alt="logo"
                  className="max-w-[250px] w-full h-full"
                  width={500}
                  height={500}
                />
                <img
                  priority="true"
                  src="/sunglass/promised01.png"
                  alt="logo"
                  className="max-w-[250px] w-full h-full"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Benefit Section */}
      <div className=" bg-[#FBBF1A] relative py-20 px-[20px] md:px-[100px] lg:px-[200px]">
        <h2 className="text-md font-bold text-center mb-[60px]">
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
      <div className="py-8 text-center bg-dark text-white">
        <h2 className="text-md font-bold mb-4 text-[#FBBF1A]">
          সুরক্ষা এবং স্টাইলের এমন সংমিশ্রণ আর কোথাও পাবেন না।
        </h2>
        <button className="px-4 py-3 bg-[#FBBF1A] text-sm text-dark font-medium rounded rounded-lg">
          আমি এখনই অর্ডার করতে চাই
        </button>
      </div>
      <DeliverySection />
      <div className="py-8 text-center mt-7">
        <h2 className="text-md font-bold mb-4">
          সুরক্ষার অভাবে স্টাইলের নামে ভুল করছেন না তো?
        </h2>
        <p className="text-gray-700 py-4 text-sm max-w-2xl mx-auto">
          সস্তা সানগ্লাস হয়তো স্টাইলিশ লাগে, কিন্তু সন্তানের চোখের সুরক্ষায়
          কার্যকর নয়। Seven’s 7.0 Polarized Sunglass নিশ্চিত করে চোখের জন্য
          সুরক্ষার সেরা ব্যবস্থা এবং অনন্য স্টাইল।
        </p>
        <div className="w-full mb-10 flex justify-center items-center flex-wrap gap-3">
          <img
            priority="true"
            src="/sunglass/promised01.png"
            alt="logo"
            className="max-w-[250px] w-full h-full"
            width={500}
            height={500}
          />
          <img
            priority="true"
            src="/sunglass/promised01.png"
            alt="logo"
            className="max-w-[250px] w-full h-full"
            width={500}
            height={500}
          />
          <img
            priority="true"
            src="/sunglass/promised01.png"
            alt="logo"
            className="max-w-[250px] w-full h-full"
            width={500}
            height={500}
          />
          <img
            priority="true"
            src="/sunglass/promised01.png"
            alt="logo"
            className="max-w-[250px] w-full h-full"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="bg-[#FBBF1A] py-[70px] px-[20px] md:px-[100px] lg:px-[200px]">
        {" "}
        <h2 className="text-md font-bold text-left mt-[60px] mb-[20px]">
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
          <button className="px-4  py-3 bg-dark text-sm text-[#FBBF1A] font-medium rounded rounded-lg">
            আমি এখনই অর্ডার করতে চাই
          </button>
        </div>
      </div>
      {/* Target Audience Section */}
      <div className="py-20 text-center">
        <h2 className="text-md font-bold mb-10">FOR WHOM</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4">
          {[...Array(4)].map((_, idx) => (
            <div className="mb-5" key={idx}>
              <h5 className="text-[24px] font-medium">
                TARGET AUDIENCE - {idx + 1}
              </h5>
              <p>Description and Reasoning for Target Group {idx + 1}</p>
            </div>
          ))}
        </div>
        <button className="mt-10 px-6 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
          CALL TO ACTION
        </button>
      </div>
      {/* New Section with Images and Text */}
      <div className="py-8 bg-[#778899]">
        <div className="grid grid-cols-1 gap-8 px-4 sm:px-8 lg:px-16">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left  p-4 rounded-lg">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="!w-[300px] md:!w-[400px] h-[300px] md:!h-[400px] bg-[#B0C4DE]  rounded flex items-center justify-center mb-4 md:mb-0">
                <span className="text-white text-4xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* Content Section */}
            <div className="w-full md:w-1/2">
              <p className="px-4 md:px-8 text-white text-sm mr-0 lg: mr-[100px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, *consectetur*, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of *"de Finibus
                Bonorum et Malorum"* (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center text-center md:text-left  p-4 rounded-lg">
            {/* Content Section */}
            <div className="w-full md:w-1/2">
              <p className="px-4 md:px-8 text-white text-sm ml-0 lg:ml-[100px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, *consectetur*, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of *"de Finibus
                Bonorum et Malorum"* (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </p>
            </div>
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="!w-[300px] md:!w-[400px] h-[300px] md:!h-[400px] bg-[#B0C4DE]  rounded flex items-center justify-center mb-4 md:mb-0">
                <span className="text-white text-4xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
