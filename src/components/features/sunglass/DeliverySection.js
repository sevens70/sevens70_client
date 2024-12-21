import React from "react";

export default function DeliverySection() {
  return (
    <section className="relative bg-[#FBBF1A] py-12">
      {/* Wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-20"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            fill="#ffff"
            fillOpacity="1"
            d="M0,192L120,165.3C240,139,480,85,720,85.3C960,85,1200,139,1320,165.3L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center relative">
        {/* Item 1 */}
        <div className="flex flex-col items-center border-r border-black last:border-r-0">
          <div className="mb-4">
            <img
              priority="true"
              src="/sunglass/delivery/img01.png"
              alt="delivery"
              className="w-16 h-16"
            />
          </div>
          <p className="font-bold text-lg text-black">
            সারা দেশে হোম ডেলিভারি সুবিধা
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center border-r border-black last:border-r-0">
          <div className="mb-4">
            <img
              priority="true"
              src="/sunglass/delivery/img02.png"
              alt="guarantee"
              className="w-16 h-16"
            />
          </div>
          <p className="font-bold text-lg text-black">নির্জন গ্যাপ</p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img
              priority="true"
              src="/sunglass/delivery/img03.png"
              alt="payment"
              className="w-16 h-16"
            />
          </div>
          <p className="font-bold text-lg text-black">
            অ্যাডভান্সের মাধ্যমে দ্রুত নিন পণ্য
          </p>
        </div>
      </div>
    </section>
  );
}
