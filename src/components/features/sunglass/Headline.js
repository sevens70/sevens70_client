import React from "react";

export default function Headline() {
  return (
    <section className="w-full">
      {/* Assurance Section */}
      <div className="py-8 text-center mt-7">
        <h1 className="text-md font-bold mb-4">ASSURANCE HEADLINE</h1>
        <p className="text-gray-700 py-4 text-sm max-w-2xl mx-auto">
          This is an assurance writeup from the product / service provider. Here
          we’ll declare why our product / service is the best for our customer,
          how we became sure about this and other relevant information.
        </p>
      </div>

      {/* Benefit Section */}
      <div className=" bg-blue-100 relative py-20">
        <h2 className="text-md font-bold text-center mb-[60px]">
          BENEFIT HEADLINE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-16 text-sm">
          <div className="text-center px-[20px] md:px-[100px] lg:px-[200px] mb-5">
            <p>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM
              VELIT
            </p>
          </div>
          <div className="text-center px-[20px] md:px-[100px] lg:px-[200px] mb-5">
            <p>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM
              VELIT
            </p>
          </div>
          <div className="text-center px-[20px] md:px-[100px] lg:px-[200px] mb-5">
            <p>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM
              VELIT
            </p>
          </div>
          <div className="text-center px-[20px] md:px-[100px] lg:px-[200px] mb-5">
            <p>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED DIAM
              VELIT
            </p>
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="py-20 text-center">
        <h2 className="text-md font-bold mb-10">FOR WHOM</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4">
          <div className="mb-5">
            <h5 className="text-[24px] font-medium">TARGET AUDIENCE - 1</h5>
            <p>DESCRIPTION OF AND REASONING TG</p>
          </div>
          <div className="mb-5">
            <h5 className="text-[24px] font-medium">TARGET AUDIENCE - 1</h5>
            <p>DESCRIPTION OF AND REASONING TG</p>
          </div>
          <div className="mb-5">
            <h5 className="text-[24px] font-medium">TARGET AUDIENCE - 1</h5>
            <p>DESCRIPTION OF AND REASONING TG</p>
          </div>
          <div className="mb-5">
            <h5 className="text-[24px] font-medium">TARGET AUDIENCE - 1</h5>
            <p>DESCRIPTION OF AND REASONING TG</p>
          </div>
        </div>
        <button className="mt-10 px-6 py-3 bg-purple-600 text-white font-bold rounded-full">
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
