"use client";
// import { contacts } from "@/site/info";
import {
  IconButton,
  Option,
  Select,
  Typography,
  Input,
  Menu,
  MenuHandler,
  Button,
  MenuItem,
  Badge,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiSelfLove } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { contacts } from "../../site/info";

const menu = [
  {
    name: "Home",
    url: "/",
    isMenu: true,
  },
  {
    name: "Shop",
    url: "/shop",
    isMenu: true,
  },
  {
    name: "Men",
    url: "/men",
    isMenu: true,
  },
  {
    name: "Woman",
    url: "/woman",
    isMenu: true,
  },
  {
    name: "Accessories",
    url: "/accessories",
    isMenu: true,
  },
  {
    name: "Pages",
    url: "/Pages",
    isMenu: false,
  },
];

const Header = () => {
  const { countries } = useCountries();
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menu.map(({ name, url, isMenu }, idx) => (
        <>
          {isMenu ? (
            <Menu key={idx}>
              <MenuHandler>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal font-jost hover:no-underline"
                >
                  <MenuItem className="hidden font-jost pt-0 px-2 pb-0 hover:bg-transparent text-sm items-center gap-2 !font-normal text-dark-700 lg:flex lg:rounded-full">
                    {name}
                    <FaChevronDown
                      strokeWidth={2.5}
                      className={`h-3 w-3 transition-transform ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </MenuItem>
                </Typography>
              </MenuHandler>
            </Menu>
          ) : (
            <Typography
              key={idx}
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal hover:no-underline"
            >
              <a href="#" className="flex font-jost items-center hover:no-underline">
                Blog
              </a>
            </Typography>
          )}
        </>
      ))}
    </ul>
  );
  return (
    <>
      <header className="sticky top-0 bg-white z-[1000] shadow shadow-dark-50/10 custom-container">
        <div className="">
          <div className="w-full bg-pageBg py-1">
            <div className="w-11/12 md:w-10/12 mx-auto py-1 flex justify-center md:justify-between items-center">
              <div className="md:flex md:flex-row justify-end items-center hidden">
                <Link
                  href={"/blog"}
                  className={`font-montserrat text-grey-700  text-xsm font-normal mx-3 underline hover:underline`}
                >
                  FAQs
                </Link>
                <Link
                  href={"/testimonials"}
                  className="font-montserrat text-grey-700 text-xsm font-normal mx-3 hover:underline"
                >
                  Track Order
                </Link>
                <Link
                  href={"/contact-us"}
                  className="font-montserrat text-grey-700 text-xsm font-normal mx-3 hover:underline"
                >
                  Support
                </Link>
              </div>
              <div className="md:flex md:flex-row gap-3 justiffy-end items-center">
                <Menu className="">
                  <MenuHandler>
                    <MenuItem className="font-montserrat pt-0 p-0 pb-0 hidden !text-xsm items-center gap-2 font-normal text-blue-gray-900 lg:flex lg:rounded-full">
                      <GiHamburgerMenu className="h-[11px] w-[11px] text-blue-gray-500" />{" "}
                      USD{" "}
                      <FaChevronDown
                        strokeWidth={2}
                        className={`h-2 w-2 transition-transform ${
                          isMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </MenuItem>
                  </MenuHandler>
                </Menu>
                <Menu>
                  <MenuHandler>
                    <MenuItem className="font-montserrat pt-0 p-0 pb-0 hidden !text-xsm items-center gap-2 font-normal text-blue-gray-900 lg:flex lg:rounded-full">
                      ENG{" "}
                      <FaChevronDown
                        strokeWidth={2}
                        className={`h-2 w-2 transition-transform ${
                          isMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </MenuItem>
                  </MenuHandler>
                </Menu>
              </div>
            </div>
          </div>
          <div className="border-b border-b-grey-300 ">
            {" "}
            <div className="w-11/12 md:w-10/12 mx-auto gap-2 py-2 flex  items-center justify-between bg-white sticky top-0">
              <a href="/">
                <img
                  priority="true"
                  src="/Logo.png"
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
                  size="sm"
                  className="font-jost text-base font-medium capitalize h-[40px] !rounded-none !rounded-tr-lg !rounded-br-lg !absolute bg-primaryRed  right-0 top-0 rounded"
                >
                  Search Now
                </Button>
              </div>

              <nav className="gap-2 items-center hidden lg:flex">
                <a
                  href="tel:+1 (647) 539-6755"
                  className="flex items-center justify-center gap-2 py-2 px-3 group"
                >
                  <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex group-hover:bg-dark">
                    <FaMailBulk
                      className="inline-block 
                  fill-primaryRed "
                    />
                  </span>
                  <span className="text-sm font-normal text-dark">
                    {contacts.email}
                  </span>
                </a>
                <a
                  href="tel:+1 (647) 539-6755"
                  className="flex items-center justify-center gap-2 py-2 px-3 group"
                >
                  <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex group-hover:bg-dark">
                    <FaPhone className="inline-block fill-primaryRed" />
                  </span>
                  <span className="text-sm font-normal text-dark">
                    {contacts.phone}
                  </span>
                </a>
              </nav>
            </div>
          </div>

          {/* =========================== header main*/}
          <div className="w-11/12 md:w-10/12 mx-auto gap-2 py-3 flex  items-center justify-between bg-white sticky top-0">
            <div className="leftSection">
              <Select
                size="lg"
                label="Select Country"
                placeholder="All Categories"
                defaultValue="all-categories"
                className="border-none bg-light-100"
                labelProps={{
                  className: "hidden",
                }}
                selected={(element) =>
                  element ? (
                    React.cloneElement(element, {
                      disabled: true,
                      className:
                        "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
                    })
                  ) : (
                    <div className="flex items-center gap-2">
                      <GiHamburgerMenu className="h-5 w-5" />
                      All Categories
                    </div>
                  )
                }
              >
                <Option
                  key="all-categories"
                  value="all-categories"
                  className="flex items-center gap-2"
                >
                  <GiHamburgerMenu className="h-5 w-5" />
                  All Categories
                </Option>
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
            <nav className="hidden lg:block">
              {navList}
              {/* {menu.map((item, key) => (
                <Link
                  href={item.url}
                  key={key}
                  className="text-lg text-dark hover:text-primary py-2 px-3 duration-200"
                >
                  {item.name}
                </Link>
              ))} */}
            </nav>
            <nav className="gap-1 items-center hidden lg:flex">
              <div className="flex items-end gap-4">
                <IconButton color="white" size="sm">
                  <GiSelfLove className="h-5 w-5" />
                </IconButton>

                <Badge content="5">
                  <IconButton color="white" size="sm">
                    <FaCartShopping className="h-5 w-5" />
                  </IconButton>
                </Badge>
                <IconButton color="white" size="sm">
                  <FaRegUser className="h-5 w-5" />
                </IconButton>
              </div>
            </nav>
            {!open ? (
              <IconButton
                aria-label="icon-button"
                variant="text"
                className="block p-4 rounded-none lg:hidden"
                onClick={openDrawer}
              >
                {/* <i className="fa-solid fa-bars text-xl bg-none text-white " /> */}
                <GiHamburgerMenu className="w-7 h-7" />
              </IconButton>
            ) : (
              <IconButton
                aria-label="icon-button"
                variant="text"
                className="block p-4 rounded-none lg:hidden"
                onClick={openDrawer}
              >
                {/* <i className="fa-solid fa-bars text-xl bg-none text-white " /> */}
                <RxCross2 className="w-7 h-7" />
              </IconButton>
            )}
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
