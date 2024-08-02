"use client";
import { contacts, site_info } from "@/site/info";
import {
  Drawer,
  IconButton,
  Option,
  Select,
  Typography,
  Input,
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
// import { IoMailOutline } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";

const menu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Concrete delivery",
    url: "/concrete-delivery",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];

const Header = () => {
  const { countries } = useCountries();
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "",
    flag: "",
  });

  useEffect(() => {
    if (countries.length > 0) {
      setSelectedCountry({
        name: countries[0].name,
        flag: countries[0].flags.svg,
      });
    }
  }, [countries]);
  return (
    <>
      <header className="sticky top-0 bg-white z-[1000] shadow shadow-dark-50/10 custom-container">
        <div className="">
          <div className="w-full bg-pageBg ">
            <div className="w-11/12 md:w-10/12 mx-auto py-3 flex justify-center md:justify-between items-center">
              <div className="md:flex md:flex-row justify-end items-center hidden">
                <Link
                  href={"/blog"}
                  className="text-grey-700 text-sm font-normal mx-3 underline hover:underline"
                >
                  FAQs
                </Link>
                <Link
                  href={"/testimonials"}
                  className="text-grey-700 text-sm font-normal mx-3 hover:underline"
                >
                  Track Order
                </Link>
                <Link
                  href={"/contact-us"}
                  className="text-grey-700 text-sm font-normal mx-3 hover:underline"
                >
                  Support
                </Link>
              </div>
              <div className="md:flex md:flex-row gap-3 justiffy-end items-center">
                <div className="custom-select-area">
                  <Select
                    value={selectedCountry.name}
                    onChange={(value) => {
                      const selected = countries.find(
                        (country) => country.name === value
                      );
                      setSelectedCountry({
                        name: selected.name,
                        flag: selected.flags.svg,
                      });
                    }}
                    size="sm"
                    // className="border-none custom-select"
                    className="border-none"
                    labelProps={{
                      className: "hidden",
                    }}
                    label="Select Country"
                    selected={(element) =>
                      element &&
                      React.cloneElement(element, {
                        disabled: true,
                        className:
                          "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
                        children: (
                          <>
                            <img
                              src={selectedCountry.flag}
                              alt={selectedCountry.name}
                              className="h-5 w-5 rounded-full object-cover"
                            />
                            {selectedCountry.name}
                          </>
                        ),
                      })
                    }
                  >
                    {countries.map(({ name, flags }) => (
                      <Option
                        key={name}
                        value={name}
                        className="flex items-center gap-2"
                      >
                        <img
                          src={flags.svg}
                          alt={name}
                          className="h-5 w-5 rounded-full object-cover"
                        />
                        {name}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="">
                  {" "}
                  <select
                    value={selectedCountry.name}
                    onChange={(value) => {
                      const selected = countries.find(
                        (country) => country.name === value
                      );
                      setSelectedCountry({
                        name: selected.name,
                        flag: selected.flags.svg,
                      });
                    }}
                    size="sm"
                    className="border-none w-[70px]"
                    label="Select Country"
                  >
                    {countries.map(({ name }) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="w-11/12 md:w-10/12 mx-auto gap-2 py-2 flex  items-center justify-between bg-white sticky top-0">
            <a href="/">
              <img
                priority="true"
                src="/logo.png"
                alt=""
                className="max-w-[150px] w-full h-full"
                width={300}
                height={300}
              />
            </a>

            <div className="relative flex w-full max-w-[26rem]">
              <Input
                size="md"
                type="email"
                placeholder="Search product..."
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-grey-600 placeholder:text-xsm placeholder:opacity-100"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "!min-w-[250px]" }}
              />
              <Button
                size="md"
                className="!absolute bg-primaryRed  right-0 top-0 rounded"
              >
                Search Now
              </Button>
            </div>

            {/* <nav className="flex-grow hidden lg:block">
              {menu.map((item, key) => (
                <Link
                  href={item.url}
                  key={key}
                  className="text-lg text-grey-700 hover:text-primary py-2 px-3 duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav> */}
            <nav className="gap-2 items-center hidden lg:flex">
              <a
                href="tel:+1 (647) 539-6755"
                className="flex items-center justify-center gap-2 py-2 px-3 group"
              >
                <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex group-hover:bg-dark">
                  <FaMailBulk
                    className="inline-block h-4 w-4
                  fill-primaryRed group-hover:fill-primary"
                  />
                </span>
                <span className="text-sm font-normal text-dark">
                  {contacts.phone}
                </span>
              </a>
              <a
                href="tel:+1 (647) 539-6755"
                className="flex items-center justify-center gap-2 py-2 px-3 group"
              >
                <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex group-hover:bg-dark">
                  <FaPhone className="inline-block h-4 w-4 fill-primaryRed group-hover:fill-primary" />
                </span>
                <span className="text-sm font-normal text-dark">
                  {contacts.phone}
                </span>
              </a>
              {/* <Link href="/contact-us" className="btn !text-sm">
                Get an Estimate
              </Link> */}
            </nav>
            {/* {!open ? (
              <IconButton
                aria-label="icon-button"
                variant="text"
                className="block p-4 rounded-none lg:hidden"
                onClick={openDrawer}
              >
                <GiHamburgerMenu className="w-7 h-7" />
              </IconButton>
            ) : (
              <IconButton
                aria-label="icon-button"
                variant="text"
                className="block p-4 rounded-none lg:hidden"
                onClick={openDrawer}
              >
                <RxCross2 className="w-7 h-7" />
              </IconButton>
            )} */}
          </div>
        </div>
      </header>
      {/* <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            {site_info.name}
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawer}
            aria-label="icon-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <nav className="gap-2 flex flex-col">
          {menu.map((item, key) => (
            <Link
              href={item.url}
              className="flex items-center gap-2 py-2 px-3 group"
              onClick={closeDrawer}
              key={key}
            >
              <span className="text-xl font-semibold text-primary">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
        <nav className="gap-2 flex flex-col">
          <a
            href="tel:+1 (647) 539-6755"
            className="flex items-center gap-2 py-2 px-3 group"
            onClick={closeDrawer}
          >
            <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex  group-hover:bg-dark">
              <FaPhone className="inline-block h-4 w-4 fill-dark group-hover:fill-white" />
            </span>
            <span className="text-xl font-semibold text-primary">
              {contacts.phone}
            </span>
          </a>
          <Link href="/contact-us" className="btn">
            Contact Us
          </Link>
        </nav>
      </Drawer> */}
    </>
  );
};

export default Header;
