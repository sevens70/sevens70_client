"use client";
import { contacts } from "../../site/info";
import Link from "next/link";
import { Button, Input, Typography } from "@material-tailwind/react";
import { selectWebsiteInfo } from "../features/websiteInfo/websiteInfoSlice";
import { useAppSelector } from "../../lib/hooks";
const SITEMAP = [
  {
    title: "Quick Links",
    links: ["About Us", "Blog", "Contact Us", "Careers", "FAQ"],
  },
  {
    title: "Service",
    links: ["My Account", "Wishlist", "Shop", "Track Order", "Return"],
  },
  {
    title: "Products",
    links: [
      "Man's Fashion",
      "Woman's Fashion",
      "Kid's Fashion",
      "New Collection",
      "Splash Sales",
    ],
  },
];
const data = [
  {
    imageLink: "./prd_final_images/01.jpg",
  },
  {
    imageLink: "./prd_final_images/10.jpg",
  },
  {
    imageLink: "./prd_final_images/12.jpg",
  },
  {
    imageLink: "./prd_final_images/24.jpg",
  },
  {
    imageLink: "../prd_final_images/30.jpg",
  },
  {
    imageLink: "./prd_final_images/34.jpg",
  },
];
const Footer = () => {
  const websiteInfo = useAppSelector(selectWebsiteInfo);
  console.log("websiteInfo 123", websiteInfo);
  return (
    <footer className="pt-10 !bg-pageBg custom-container overflow-x-hidden">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 justify-between items-start mx-auto ">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 justify-start md:justify-start">
            {/* <img
              priority="true"
              src="/FooterLogo.png"
              className="w-full max-w-[150px] bg-white mb-3 rounded-none md:mx-0 h-full"
              alt="footer_logo"
              width={300}
              height={300}
            /> */}
            <Link href="/">
              {websiteInfo?.length > 0 ? (
                <img
                  priority="true"
                  // src="/Logo.png"
                  src={websiteInfo[0]?.logoUrl}
                  alt="logo"
                  className="max-w-[150px] max-h-[30px] w-full h-full"
                  width={300}
                  height={300}
                />
              ) : (
                <img
                  priority="true"
                  src="/Logo.png"
                  alt="logo"
                  className="max-w-[150px] w-full h-full"
                  width={300}
                  height={300}
                />
              )}
            </Link>
            <p className="text-sm text-dark-600 leading-relexed text-left md:text-left">
              Want to create something <br />
              Great Together?
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 justify-start md:justify-start">
            <h3
              className="mb-2 text-dark-700 text-xmd"
              style={{ lineHeight: "46px!important" }}
            >
              Join Our Newsletter
            </h3>
            <p className="text-sm text-grey-700 leading-relexed text-left md:text-left">
              Join over{" "}
              <span className="underline text-primaryRed">68,000</span> people
              getting out emails
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 justify-start md:justify-start">
            <div className="relative flex w-full max-w-[26rem]">
              <Input
                size="lg"
                type="email"
                placeholder="Enter your email"
                className="!h-14 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-grey-600 placeholder:text-xsm placeholder:opacity-100"
                style={{
                  color: "#323B49",
                  fontSize: "14px !important",
                  fontFamily: "Jost !important",
                }}
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "!min-w-[250px]" }}
              />
              <Button
                size="sm"
                className="font-jost capitalize text-sm !absolute bg-primaryRed right-2 top-1.5 rounded"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 justify-between items-center mx-auto md:mt-0 mt-[50px]">
          <div className="col-span-12 md:col-span-4 justify-center md:justify-start">
            <p>
              <Link
                href="tel:+"
                className="text-sm text-dark-600 mb-3 underline"
              >
                Get in Touch
              </Link>
            </p>
            <p>
              <Link href="tel:+" className="text-sm text-dark-600">
                {websiteInfo?.length > 0
                  ? websiteInfo[0]?.email
                  : "infoshop@gmail.com"}
              </Link>
            </p>
            <p>
              <Link href="+1 707 797 0462" className="text-sm text-dark-600">
                {websiteInfo?.length > 0
                  ? websiteInfo[0]?.phoneNumber
                  : "880 1827969106"}
              </Link>
            </p>
            <div className="mt-4 flex bg-primary-default gap-2 text-blue-gray-900 sm:justify-start">
              <Link
                // as="a"
                href="https://www.facebook.com/sevens7.0"
                className="opacity-80 group h-8 w-8 flex justify-center items-center border !border-light-50 hover:bg-dark-700 rounded shadow-2xl transition-opacity hover:opacity-100"
              >
                <svg
                  className="h-5 w-5 fill-black group-hover:fill-white transition-colors"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Typography
                as="a"
                href="https://www.tiktok.com/@sevens_7.0?_t=8r8uWwQvvAe&_r=1"
                className="opacity-80 group h-8 w-8 flex justify-center items-center border !border-light-50 hover:bg-dark-700 rounded shadow-2xl transition-opacity hover:opacity-100"
              >
                <svg
                  className="h-4 w-4 fill-black group-hover:fill-white transition-colors"
                  viewBox="0 0 15 15"
                  fill="dark-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 0H10V1C10 3.20914 11.7909 5 14 5V6C12.3644 6 10.9122 5.21466 10 4.00049V11C10 13.2091 8.20914 15 6 15C3.79086 15 2 13.2091 2 11C2 8.79086 3.79086 7 6 7V8C4.34315 8 3 9.34315 3 11C3 12.6569 4.34315 14 6 14C7.65685 14 9 12.6569 9 11V0Z"
                    // fill="#000000"
                  />
                </svg>
              </Typography>
              <Typography
                as="a"
                href="https://www.youtube.com/@sevens_7.0"
                className="opacity-80 group h-8 w-8 flex justify-center items-center border !border-light-50 hover:bg-dark-700 rounded shadow-2xl transition-opacity hover:opacity-100"
              >
                <svg
                  fill="dark-400"
                  className="h-5 w-5 fill-black group-hover:fill-white transition-colors"
                  viewBox="-2 -2 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin"
                  // class="jam jam-youtube-square"
                >
                  <path d="M12.923 6.526H7.077C5.93 6.526 5 7.446 5 8.58v2.89c0 1.135.93 2.054 2.077 2.054h5.846c1.147 0 2.077-.92 2.077-2.054V8.58c0-1.135-.93-2.054-2.077-2.054zm-1.404 3.64l-2.735 1.29a.11.11 0 0 1-.157-.099v-2.66a.11.11 0 0 1 .16-.097l2.734 1.37c.081.042.08.157-.002.196z" />
                  <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" />
                </svg>
              </Typography>

              {/* <Typography
                as="a"
                href="#"
                className="opacity-80 group h-8 w-8 flex justify-center items-center border !border-light-50 hover:bg-dark-700 rounded shadow-2xl transition-opacity hover:opacity-100"
              >
                <svg
                  className="h-5 w-5 fill-black group-hover:fill-white transition-colors"
                  fill="dark-400"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 group h-8 w-8 flex justify-center items-center border !border-light-50 hover:bg-dark-700 rounded shadow-2xl transition-opacity hover:opacity-100"
              >
                <svg
                  className="h-5 w-5 fill-black group-hover:fill-white transition-colors"
                  fill="dark-400"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </Typography> */}
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 justify-center md:justify-start">
            <div className="mx-auto grid w-full grid-cols-2 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              {SITEMAP.map(({ title, links }, key) => (
                <>
                  {/* <div className="col-span-6 md:col-span-4 justify-center md:justify-start"> */}
                  <div key={key} className="w-full">
                    <h6 className="mb-5 font-medium text-dark-500 ">{title}</h6>
                    <ul className="space-y-1">
                      {links.map((link, key) => (
                        <Typography key={key} as="li" className="font-normal">
                          <a
                            href="#"
                            className="inline-block text-sm text-grey-700 py-1 pr-2 transition-transform hover:scale-105"
                          >
                            {link}
                          </a>
                        </Typography>
                      ))}
                    </ul>
                  </div>
                  {/* </div> */}
                </>
              ))}
              <div className="grid grid-cols-3 gap-2 h-20">
                {data.map(({ imageLink }, index) => (
                  <div key={index}>
                    <img
                      className="h-20 max-w-full rounded-lg object-cover object-center md:h-20"
                      src={imageLink}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 justify-between items-center mx-auto">
          <div className="col-span-12 md:col-span-12 justify-center md:justify-start">
            {" "}
            <div className="flex flex-col md:flex-row justify-between items-center w-full my-5 md:mt-0 ">
              <p className="text-sm text-dark-600 ">
                2024 © All rights reserved by{" "}
                <span className="underline text-dark-600">ecarto</span>
              </p>

              <p className="text-sm text-dark-600 ">
                <span className="text-sm text-dark-600 mr-5">
                  {" "}
                  Privacy Policy
                </span>{" "}
                <span className="text-dark-700">|</span>{" "}
                <span className="text-sm text-dark-600 ml-5">
                  Terms & Conditions
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
