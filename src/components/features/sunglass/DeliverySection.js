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
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,192C384,160,480,128,576,122.7C672,117,768,139,864,160C960,181,1056,203,1152,181.3C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
