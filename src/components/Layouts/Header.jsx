"use client";
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
  MenuList,
  Avatar,
  Drawer,
  ListItem,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaJediOrder } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuHotdog } from "react-icons/cg";
import { GiSelfLove } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { contacts } from "../../site/info";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
// import CartList from "../checkout/cartList";
import { addToCurrency, getCarrency } from "../../lib/features/currencySlice";
import { useRouter } from "next/navigation";
import { getCartTotal } from "../../lib/features/cartSlice";
import { selectLoggedInUser, signOutAsync } from "../features/auth/authSlice";
import {
  fetchAllProductByAsinc,
  fetchCategoriesAsync,
  selectAllCategories,
} from "../features/product/productSlice";
import { selectItems } from "../features/cart/cartSlice";

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
const currency = [
  {
    label: "BDT",
    value: "BDT",
    symbol: "৳",
    flag: "/header/c2.png",
  },
  {
    label: "USD",
    value: "USD",
    symbol: "$",
    flag: "/header/c1.png",
  },
  {
    label: "EUR",
    value: "EUR",
    symbol: "€",
    flag: "/header/c3.jpg",
  },
];

const Header = () => {
  const currencyData = useAppSelector(getCarrency);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { totalCount, items } = useAppSelector((state) => state.cart);
  const cartItems = useAppSelector(selectItems);
  const user = useAppSelector(selectLoggedInUser);
  const allCatgories = useAppSelector(selectAllCategories);
  const [categories, setCategories] = useState({});
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const [isCardOpen, setIsCardOpen] = React.useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(
    currencyData ?? currency[0]
  );

  // useEffect(() => {
  //   dispatch(fetchCategoriesAsync());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(getCartTotal());
    dispatch(fetchCategoriesAsync());
    dispatch(fetchAllProductByAsinc());
  }, [items, dispatch]);
  const handleLogout = () => {
    console.log("items & product user 12333 automatic called");
    dispatch(signOutAsync());
  };
  useEffect(() => {
    if (!user) {
      router.push("/auth/signin");
    }
  }, [user, router]);

  console.log("items & product user in header", user, cartItems);
  const handleMenuItemClick = (currency) => {
    dispatch(addToCurrency(currency));
    setSelectedCurrency(currency);
    setIsCurrencyOpen(false);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);
  const transformedData = allCatgories?.reduce((acc, category) => {
    acc[category.name] = category.subcategories.map((subcategory) => ({
      id: subcategory._id,
      name: subcategory.name,
    }));
    return acc;
  }, {});
  console.log("allCatgories", allCatgories, value);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menu.map(({ name, url, isMenu }, idx) => (
        <React.Fragment key={idx}>
          {isMenu ? (
            <Menu>
              <MenuHandler>
                <Typography
                  // as="a"
                  // href={url}
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

              {/* Render the subcategories dynamically if available in transformedData */}
              {transformedData[name.toLowerCase()] && (
                <MenuList className="font-jost text-xsm">
                  {transformedData[name.toLowerCase()].map((subcategory) => (
                    <MenuItem className="capitalize" key={subcategory.id}>
                      {subcategory.name}
                    </MenuItem>
                  ))}
                </MenuList>
              )}
            </Menu>
          ) : (
            <Typography
              // as="a"
              // href={url}
              variant="small"
              color="blue-gray"
              className="p-1 font-normal hover:no-underline"
            >
              {name}
            </Typography>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
  return (
    <>
      <header className="sticky top-0 bg-white z-[1000] shadow shadow-dark-50/10 custom-container">
        <div className="">
          <div className="w-full bg-pageBg py-1">
            <div className="w-11/12 md:w-10/12 mx-auto py-1 flex justify-center md:justify-between items-center">
              <div className="md:flex md:flex sm:flex justify-end items-center">
                <Link
                  href={"/shop"}
                  className={`font-montserrat text-grey-700  text-xsm font-normal mx-3 underline hover:underline`}
                >
                  FAQs
                </Link>
                <Link
                  href={"/shop"}
                  className="font-montserrat text-grey-700 text-xsm font-normal mx-3 hover:underline"
                >
                  Track Order
                </Link>
                <Link
                  href={"/shop"}
                  className="font-montserrat text-grey-700 text-xsm font-normal mx-3 hover:underline"
                >
                  Support
                </Link>
              </div>
              <div className="md:flex sm:flex justiffy-end items-center hidden">
                <Menu
                  className=""
                  open={isCurrencyOpen}
                  handler={setIsCurrencyOpen}
                >
                  <MenuHandler
                    className="hover: bg-hidden"
                    style={{
                      minWidth: "100px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <MenuItem className="meneuIem font-montserrat pt-0 p-0 pb-0 hidden !text-xsm items-center gap-2 font-normal text-blue-gray-900 lg:flex lg:rounded-full">
                      <Avatar
                        size="sm"
                        className="h-[18px] w-[18px]"
                        // src="./header/c1.png"
                        src={selectedCurrency.flag}
                        alt="avatar"
                      />
                      {selectedCurrency.label}
                      <FaChevronDown
                        strokeWidth={2}
                        className={`h-2 w-2 transition-transform ${
                          !isCurrencyOpen ? "rotate-180" : ""
                        }`}
                      />
                    </MenuItem>
                  </MenuHandler>
                  <MenuList className="!z-[1000] text-xsm font-jost">
                    {currency.map((item, idx) => (
                      <MenuItem
                        key={idx}
                        className="meneuIem font-montserrat hidden !text-xsm items-center gap-2 font-normal text-blue-gray-900 lg:flex"
                        onClick={() => handleMenuItemClick(item)}
                      >
                        <Avatar
                          size="sm"
                          className="h-[18px] w-[18px]"
                          // src="./header/c1.png"
                          src={item.flag}
                          alt="avatar"
                        />
                        {item.label}
                      </MenuItem>
                    ))}

                    {/* <MenuItem onClick={() => handleMenuItemClick("USD")}>
                      USD
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick("EUR")}>
                      EUR
                    </MenuItem> */}
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuHandler
                    style={{
                      minWidth: "70px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // gap: 5,
                    }}
                  >
                    <MenuItem className="font-montserrat pt-0 p-0 pb-0 !text-xsm items-center gap-2 font-normal text-blue-gray-900 lg:flex lg:rounded-full">
                      ENG{" "}
                      <FaChevronDown
                        strokeWidth={2}
                        className={`h-2 w-2 transition-transform ${
                          isMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </MenuItem>
                  </MenuHandler>
                  <MenuList className="!z-[1000] text-xsm font-jost">
                    <MenuItem>Item 1</MenuItem>
                    <MenuItem> Item 2</MenuItem>
                    <MenuItem> Item 3</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
          <div className="border-b border-b-grey-300 ">
            {" "}
            <div className="w-11/12 md:w-10/12 mx-auto gap-2 py-2 flex  items-center justify-between bg-white sticky top-0">
              <Link href="/">
                <img
                  priority="true"
                  src="/Logo.png"
                  alt="logo"
                  className="max-w-[150px] w-full h-full"
                  width={300}
                  height={300}
                />
              </Link>

              <div className="relative flex gap-3 w-full 2xl:max-w-[22rem] lg:max-w-[18rem] max-w-[15rem]">
                <Input
                  size="md"
                  type="email"
                  placeholder="Search product..."
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:opacity-100"
                  style={{
                    color: "#323B49",
                    fontSize: "14px !important",
                    fontFamily: "Jost !important",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
                <Button
                  size="sm"
                  className="font-jost text-base font-medium capitalize h-[40px] !rounded-none !rounded-tr-lg !rounded-br-lg !absolute bg-primaryRed  right-0 top-0 rounded"
                >
                  Search Now
                </Button>
              </div>

              <nav className="lg:flex lg:gap-2 items-center hidden ">
                <a
                  href="tel:+1 (647) 539-6755"
                  className="flex items-center justify-center md:gap-2 md:gap-1 py-2 md:px-3 group"
                >
                  <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex group-hover:bg-dark 2xl:flex lg:hidden">
                    <FaMailBulk className="inline-block fill-primaryRed " />
                  </span>
                  <span className="2xl:text-sm lg:text-xsm  font-normal text-dark">
                    {contacts.email}
                  </span>
                </a>
                <a
                  href="tel:+1 (647) 539-6755"
                  className="flex items-center justify-center md:gap-2 md:gap-1 py-2 md:px-3 sm:px-1 group"
                >
                  <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex group-hover:bg-dark 2xl:flex lg:hidden">
                    <FaPhone className="inline-block fill-primaryRed" />
                  </span>
                  <span className="2xl:text-sm lg:text-xsm md:text-xsm font-normal text-dark">
                    {contacts.phone}
                  </span>
                </a>
              </nav>
            </div>
          </div>

          <div className="w-11/12 md:w-10/12 mx-auto gap-2 py-3 flex  items-center justify-between bg-white sticky top-0">
            <div className="leftSection">
              <Select
                size="lg"
                label="Select Country"
                placeholder="All Categories"
                defaultValue="all-categories"
                value={value}
                onChange={(val) => setValue(val)}
                className="border-none bg-light-100 font-jost capitalize"
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
                      <CgMenuHotdog className="h-5 w-5" />
                      All Categories
                    </div>
                  )
                }
              >
                {/* <Option
                  key="all-categories"
                  value=""
                  className="flex items-center gap-2 font-jost text-xsm"
                >
                  <GiHamburgerMenu className="h-5 w-5" /> All category
                </Option> */}
                {allCatgories?.map((item, idx) => (
                  <Option
                    className="font-jost text-xsm capitalize"
                    key={idx}
                    value={`${item.name}`}
                  >
                    {item.name}
                  </Option>
                ))}
              </Select>
            </div>
            <nav className="hidden lg:block">{navList}</nav>
            <nav className="gap-1 items-center 2xl:flex lg:hidden md:flex flex">
              <div className="flex items-end gap-4">
                <IconButton
                  onClick={() => router.push("/favourite")}
                  color="white"
                  size="sm"
                  className="shadow-none hide__item"
                >
                  <GiSelfLove className="h-5 w-5" />
                </IconButton>
                {/* <Badge content={totalCount ? totalCount : 0}> */}
                <Badge content={cartItems?.length > 0 ? cartItems?.length : 0}>
                  <IconButton
                    onClick={() => router.push("/cart")}
                    color="white"
                    size="sm"
                    className="shadow-none"
                  >
                    <FaCartShopping className="h-5 w-5" />
                  </IconButton>
                </Badge>
                {/* <Menu
                  open={isCardOpen}
                  handler={setIsCardOpen}
                  placement="bottom"
                  // className="hover: bg-hidden"
                >
                  {" "}
                  <MenuHandler>
                    <ListItem
                      selected={isCardOpen}
                      className="pb-0 px-0 mr-0 !pr-0 max-w-[45px] !active:bg-hidden !hover: bg-white"
                    >
                      {" "}
                      <Badge content={totalCount ? totalCount : 0}>
                        <IconButton
                          onClick={() => router.push("/cart")}
                          color="white"
                          size="sm"
                        >
                          <FaCartShopping className="h-5 w-5" />
                        </IconButton>
                      </Badge>
                    </ListItem>
                  </MenuHandler>{" "}
                  <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <CartList />
                  </MenuList>
                </Menu> */}
                <Menu
                  // open={isMenuOpen}
                  // handler={setIsMenuOpen}
                  placement="bottom"
                  className="hide__item"
                >
                  {" "}
                  <MenuHandler>
                    <ListItem
                      // selected={isMenuOpen}
                      className="px-0 py-0 w-[30px] hide__item"
                    >
                      <IconButton
                        color="white"
                        size="sm"
                        className="shadow-none"
                      >
                        <FaRegUser className="h-5 w-5" />
                      </IconButton>
                    </ListItem>
                  </MenuHandler>{" "}
                  <MenuList>
                    <MenuItem className="flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM10 5C10 5.53043 9.78929 6.03914 9.41421 6.41421C9.03914 6.78929 8.53043 7 8 7C7.46957 7 6.96086 6.78929 6.58579 6.41421C6.21071 6.03914 6 5.53043 6 5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5ZM8 9C7.0426 8.99981 6.10528 9.27449 5.29942 9.7914C4.49356 10.3083 3.85304 11.0457 3.454 11.916C4.01668 12.5706 4.71427 13.0958 5.49894 13.4555C6.28362 13.8152 7.13681 14.0009 8 14C8.86319 14.0009 9.71638 13.8152 10.5011 13.4555C11.2857 13.0958 11.9833 12.5706 12.546 11.916C12.147 11.0457 11.5064 10.3083 10.7006 9.7914C9.89472 9.27449 8.9574 8.99981 8 9Z"
                          fill="#90A4AE"
                        />
                      </svg>

                      <h6
                        variant="small"
                        className="text-xsm font-jost font-normal text-gray-600"
                      >
                        My Profile
                      </h6>
                    </MenuItem>
                    <MenuItem
                      onClick={() => router.push("/orders")}
                      className="flex items-center gap-2"
                    >
                      <FaJediOrder />

                      <h6
                        variant="small"
                        className="text-xsm font-jost font-normal text-gray-600"
                      >
                        Orders
                      </h6>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.48999 1.17C9.10999 -0.39 6.88999 -0.39 6.50999 1.17C6.45326 1.40442 6.34198 1.62213 6.18522 1.80541C6.02845 1.9887 5.83063 2.13238 5.60784 2.22477C5.38505 2.31716 5.1436 2.35564 4.90313 2.33709C4.66266 2.31854 4.42997 2.24347 4.22399 2.118C2.85199 1.282 1.28199 2.852 2.11799 4.224C2.65799 5.11 2.17899 6.266 1.17099 6.511C-0.390006 6.89 -0.390006 9.111 1.17099 9.489C1.40547 9.54581 1.62322 9.65719 1.80651 9.81407C1.98979 9.97096 2.13343 10.1689 2.22573 10.3918C2.31803 10.6147 2.35639 10.8563 2.33766 11.0968C2.31894 11.3373 2.24367 11.5701 2.11799 11.776C1.28199 13.148 2.85199 14.718 4.22399 13.882C4.42993 13.7563 4.66265 13.6811 4.90318 13.6623C5.14371 13.6436 5.38527 13.682 5.60817 13.7743C5.83108 13.8666 6.02904 14.0102 6.18592 14.1935C6.34281 14.3768 6.45419 14.5945 6.51099 14.829C6.88999 16.39 9.11099 16.39 9.48899 14.829C9.54599 14.5946 9.65748 14.377 9.8144 14.1939C9.97132 14.0107 10.1692 13.8672 10.3921 13.7749C10.6149 13.6826 10.8564 13.6442 11.0969 13.6628C11.3373 13.6815 11.57 13.7565 11.776 13.882C13.148 14.718 14.718 13.148 13.882 11.776C13.7565 11.57 13.6815 11.3373 13.6628 11.0969C13.6442 10.8564 13.6826 10.6149 13.7749 10.3921C13.8672 10.1692 14.0107 9.97133 14.1939 9.81441C14.377 9.65749 14.5946 9.546 14.829 9.489C16.39 9.11 16.39 6.889 14.829 6.511C14.5945 6.45419 14.3768 6.34281 14.1935 6.18593C14.0102 6.02904 13.8666 5.83109 13.7743 5.60818C13.682 5.38527 13.6436 5.14372 13.6623 4.90318C13.681 4.66265 13.7563 4.42994 13.882 4.224C14.718 2.852 13.148 1.282 11.776 2.118C11.5701 2.24368 11.3373 2.31895 11.0968 2.33767C10.8563 2.35639 10.6147 2.31804 10.3918 2.22574C10.1689 2.13344 9.97095 1.9898 9.81407 1.80651C9.65718 1.62323 9.5458 1.40548 9.48899 1.171L9.48999 1.17ZM7.99999 11C8.79564 11 9.55871 10.6839 10.1213 10.1213C10.6839 9.55871 11 8.79565 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79564 5 7.99999 5C7.20434 5 6.44128 5.31607 5.87867 5.87868C5.31606 6.44129 4.99999 7.20435 4.99999 8C4.99999 8.79565 5.31606 9.55871 5.87867 10.1213C6.44128 10.6839 7.20434 11 7.99999 11Z"
                          fill="#90A4AE"
                        />
                      </svg>

                      <h6 className="text-xsm font-jost font-normal text-gray-600">
                        Edit Profile
                      </h6>
                    </MenuItem>

                    <hr className="my-2 border-blue-gray-50" />
                    <MenuItem className="flex items-center gap-2 ">
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                          fill="#90A4AE"
                        />
                      </svg>
                      <h6
                        onClick={() => handleLogout()}
                        className="text-xsm font-jost font-normal text-gray-600"
                      >
                        Sign Out
                      </h6>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </nav>
            {!open ? (
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
            )}
          </div>
        </div>
      </header>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
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
              <span className="text-sm font-medium text-dark-500">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
        <nav className="gap-2 flex justify-start flex-col mt-5">
          <a
            href="tel:+1 (647) 539-6755"
            className="flex items-center justify-start gap-3 py-2 px-3 group"
          >
            <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex group-hover:bg-dark flex">
              <FaMailBulk className="inline-block fill-primaryRed " />
            </span>
            <span className="text-sm font-normal text-dark">
              {contacts.email}
            </span>
          </a>
          <a
            href="tel:+1 (647) 539-6755"
            className="flex items-center justify-start gap-3 py-2 px-3 group"
          >
            <span className="h-9 w-9 rounded-full justify-center items-center bg-dark-50/10 flex group-hover:bg-dark flex">
              <FaPhone className="inline-block fill-primaryRed" />
            </span>
            <span className="text-sm font-normal text-dark">
              {contacts.phone}
            </span>
          </a>
          {/* <Link href="/contact-us" className="btn">
            Contact Us
          </Link> */}
        </nav>
        {/* =================== */}
        {/* <nav className="gap-1 items-center 2xl:hidden lg:flex md:hidden flex justify-center mt-3">
          <div className="flex items-end gap-4">
            <IconButton color="white" size="sm">
              <GiSelfLove className="h-5 w-5" />
            </IconButton>
            <Menu
              open={isCardOpen}
              handler={setIsCardOpen}
              placement="bottom"
              // className="hover: bg-hidden"
            >
              {" "}
              <MenuHandler>
                <ListItem
                  selected={isCardOpen}
                  className="pb-0 px-0 mr-0 !pr-0 max-w-[45px] !active:bg-hidden !hover: bg-white"
                >
                  {" "}
                  <Badge content={totalCount ? totalCount : 0}>
                    <IconButton color="white" size="sm">
                      <FaCartShopping className="h-5 w-5" />
                    </IconButton>
                  </Badge>
                </ListItem>
              </MenuHandler>{" "}
              <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                <CartList />
              </MenuList>
            </Menu>
            <Menu
              // open={isMenuOpen}
              // handler={setIsMenuOpen}
              placement="bottom"
              // className="hover: bg-hidden"
            >
              {" "}
              <MenuHandler>
                <ListItem
                  // selected={isMenuOpen}
                  className="px-0 py-0 w-[auto]"
                >
                  <IconButton color="white" size="sm">
                    <FaRegUser className="h-5 w-5" />
                  </IconButton>
                </ListItem>
              </MenuHandler>{" "}
              <MenuList>
                <MenuItem className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM10 5C10 5.53043 9.78929 6.03914 9.41421 6.41421C9.03914 6.78929 8.53043 7 8 7C7.46957 7 6.96086 6.78929 6.58579 6.41421C6.21071 6.03914 6 5.53043 6 5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5ZM8 9C7.0426 8.99981 6.10528 9.27449 5.29942 9.7914C4.49356 10.3083 3.85304 11.0457 3.454 11.916C4.01668 12.5706 4.71427 13.0958 5.49894 13.4555C6.28362 13.8152 7.13681 14.0009 8 14C8.86319 14.0009 9.71638 13.8152 10.5011 13.4555C11.2857 13.0958 11.9833 12.5706 12.546 11.916C12.147 11.0457 11.5064 10.3083 10.7006 9.7914C9.89472 9.27449 8.9574 8.99981 8 9Z"
                      fill="#90A4AE"
                    />
                  </svg>

                  <h6
                    variant="small"
                    className="text-xsm font-jost font-normal text-gray-600"
                  >
                    My Profile
                  </h6>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.48999 1.17C9.10999 -0.39 6.88999 -0.39 6.50999 1.17C6.45326 1.40442 6.34198 1.62213 6.18522 1.80541C6.02845 1.9887 5.83063 2.13238 5.60784 2.22477C5.38505 2.31716 5.1436 2.35564 4.90313 2.33709C4.66266 2.31854 4.42997 2.24347 4.22399 2.118C2.85199 1.282 1.28199 2.852 2.11799 4.224C2.65799 5.11 2.17899 6.266 1.17099 6.511C-0.390006 6.89 -0.390006 9.111 1.17099 9.489C1.40547 9.54581 1.62322 9.65719 1.80651 9.81407C1.98979 9.97096 2.13343 10.1689 2.22573 10.3918C2.31803 10.6147 2.35639 10.8563 2.33766 11.0968C2.31894 11.3373 2.24367 11.5701 2.11799 11.776C1.28199 13.148 2.85199 14.718 4.22399 13.882C4.42993 13.7563 4.66265 13.6811 4.90318 13.6623C5.14371 13.6436 5.38527 13.682 5.60817 13.7743C5.83108 13.8666 6.02904 14.0102 6.18592 14.1935C6.34281 14.3768 6.45419 14.5945 6.51099 14.829C6.88999 16.39 9.11099 16.39 9.48899 14.829C9.54599 14.5946 9.65748 14.377 9.8144 14.1939C9.97132 14.0107 10.1692 13.8672 10.3921 13.7749C10.6149 13.6826 10.8564 13.6442 11.0969 13.6628C11.3373 13.6815 11.57 13.7565 11.776 13.882C13.148 14.718 14.718 13.148 13.882 11.776C13.7565 11.57 13.6815 11.3373 13.6628 11.0969C13.6442 10.8564 13.6826 10.6149 13.7749 10.3921C13.8672 10.1692 14.0107 9.97133 14.1939 9.81441C14.377 9.65749 14.5946 9.546 14.829 9.489C16.39 9.11 16.39 6.889 14.829 6.511C14.5945 6.45419 14.3768 6.34281 14.1935 6.18593C14.0102 6.02904 13.8666 5.83109 13.7743 5.60818C13.682 5.38527 13.6436 5.14372 13.6623 4.90318C13.681 4.66265 13.7563 4.42994 13.882 4.224C14.718 2.852 13.148 1.282 11.776 2.118C11.5701 2.24368 11.3373 2.31895 11.0968 2.33767C10.8563 2.35639 10.6147 2.31804 10.3918 2.22574C10.1689 2.13344 9.97095 1.9898 9.81407 1.80651C9.65718 1.62323 9.5458 1.40548 9.48899 1.171L9.48999 1.17ZM7.99999 11C8.79564 11 9.55871 10.6839 10.1213 10.1213C10.6839 9.55871 11 8.79565 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79564 5 7.99999 5C7.20434 5 6.44128 5.31607 5.87867 5.87868C5.31606 6.44129 4.99999 7.20435 4.99999 8C4.99999 8.79565 5.31606 9.55871 5.87867 10.1213C6.44128 10.6839 7.20434 11 7.99999 11Z"
                      fill="#90A4AE"
                    />
                  </svg>

                  <h6 className="text-xsm font-jost font-normal text-gray-600">
                    Edit Profile
                  </h6>
                </MenuItem>

                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex items-center gap-2 ">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                      fill="#90A4AE"
                    />
                  </svg>
                  <h6 className="text-xsm font-jost font-normal text-gray-600">
                    Sign Out
                  </h6>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </nav> */}
        {/* =================== */}
      </Drawer>
    </>
  );
};

export default Header;
