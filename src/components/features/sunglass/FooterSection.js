// components/FooterSection.js
import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-[#B0C4DE] py-10 px-[20px] md:px-[50px] lg:px-[180px]">
      <div className="mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr] gap-6 mb-8">
          {/* Logo Column */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="w-12 h-12 bg-purple-700 rounded-full"></div>
              <h1 className="text-lg font-semibold text-gray-900">YOU LOGO</h1>
            </div>
            <p className="text-sm text-gray-600 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>
          </div>

          {/* First Links Column */}
          <div>
            <h2 className="font-semibold text-md text-gray-900 mb-4">
              Lorem Ipsum
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Lorem ipsum",
                "Dolor sit amet",
                "Consectetur",
                "Adipiscing elit",
                "Sed diam nonummy",
                "Nibh euismod",
              ].map((link, index) => (
                <li key={index} className="hover:text-gray-900 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Second Links Column */}
          <div>
            <h2 className="font-semibold text-md text-gray-900 mb-4">
              Lorem Ipsum
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Lorem ipsum",
                "Dolor sit amet",
                "Consectetur",
                "Adipiscing elit",
                "Sed diam nonummy",
                "Nibh euismod",
              ].map((link, index) => (
                <li key={index} className="hover:text-gray-900 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white py-6 px-4 shadow rounded-md">
          <h3 className="text-center text-xl font-semibold text-gray-900 mb-4">
            LOREM IPSUM DOLOR SIT AMET
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Lorem ipsum dolor sit"
              style={{ color: "black" }}
              className="border border-gray-300 text-gray-900 rounded px-4 py-2 w-full md:w-[300px] h-[45px] bg-[#B0C4DE] placeholder-gray-900 placeholder-font-jost"
            />

            {/* <button className="bg-purple-700 text-white px-6 py-2 rounded shadow hover:bg-purple-800">
              Get started
            </button> */}
            <button className="mt-10 px-6 py-3 bg-purple-600 text-white font-bold rounded-full">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
