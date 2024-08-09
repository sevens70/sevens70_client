import React from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  Menu,
  MenuHandler,
  MenuItem,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
// import { GiHamburgerMenu } from "react-icons/gi";
import { GiSelfLove } from "react-icons/gi";
import { CiGrid41 } from "react-icons/ci";
import { CiGrid2V } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 1,
  },
  550: {
    slidesPerView: 2,
  },
  865: {
    slidesPerView: 2,
  },
  1000: {
    slidesPerView: 3,
  },
  1500: {
    slidesPerView: 4,
  },
  1700: {
    slidesPerView: 4,
  },
};
const products = [
  {
    name: "Ribbed modal T-shirt",
    img: "./category/cate1.png",
    discount: "10% off",
    price: "$45.00",
    disc_price: "$45.00",
    rating: "5.0",
    tag: "shirt",
  },
  {
    name: "Loose Fit Hoodie",
    price: "$45.00",
    discount: "10% off",
    disc_price: "$45.00",
    rating: "5.0",
    tag: "shirt",
    img: "./category/cate2.png",
  },
  {
    name: "Ribbed Tank Top",
    price: "$45.00",
    disc_price: "$45.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "./category/cate3.png",
  },
  {
    name: "V-neck linen T-shirt                 ",
    price: "$45.00",
    disc_price: "$45.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "./category/cate4.png",
  },
  {
    name: "V-neck linen T-shirt                 ",
    price: "$45.00",
    disc_price: "$45.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "./category/cate4.png",
  },
  {
    name: "V-neck linen T-shirt                 ",
    price: "$45.00",
    disc_price: "$45.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "./category/cate4.png",
  },
  {
    name: "V-neck linen T-shirt                 ",
    price: "$45.00",
    disc_price: "$45.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "./category/cate4.png",
  },
  {
    name: "V-neck linen T-shirt                 ",
    price: "$45.00",
    disc_price: "$45.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "./category/cate4.png",
  },
  {
    name: "V-neck linen T-shirt                 ",
    price: "$45.00",
    disc_price: "$45.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "./category/cate4.png",
  },
];
function RightSidebar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div>
      <div className="my-5 md:flex md:flex-row gap-3 lg:justify-between items-center">
        <div className="flex items-center flex-wrap gap-3">
          <div className="flex flex-wrap gap-3">
            {" "}
            <Menu className="">
              <MenuHandler>
                <MenuItem className="w-[330px] h-[40px] !rounded-none border border-2 !border-light-300 text-sm items-center gap-2 font-normal text-dark-900 lg:flex md:flex flex lg:rounded-full tracking-normal bg: hover:bg-transparent focus:bg-transparent active:bg-transparent">
                  Default Sorting{" "}
                  <FaChevronDown
                    strokeWidth={2}
                    className={`h-2 w-2 ml-4 transition-transform ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
            </Menu>
            <Menu>
              <MenuHandler>
                <MenuItem className="w-[150px]  h-[40px] !rounded-none border border-2 !border-light-300 text-sm items-center gap-2 font-normal text-blue-gray-900 lg:flex md:flex flex lg:rounded-full bg: hover:bg-transparent focus:bg-transparent active:bg-transparent">
                  Show: <span className="text-dark-900">12</span>{" "}
                  <FaChevronDown
                    strokeWidth={2}
                    className={`h-2 w-2 ml-2 transition-transform ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </MenuItem>
              </MenuHandler>
            </Menu>
          </div>
          <div className="flex gap-3">
            {" "}
            <p className="ml-3 text-dark-900 text-sm">
              Showing 1-12 of 19 results
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              color="black"
              size="md"
              className="group rounded-none hover:bg-dark-900"
            >
              <CiGrid41 className="h-5 w-5 fill-white group-hover:fill-white" />
            </IconButton>

            {/* <Badge content="5"> */}
            <IconButton
              color="white"
              size="md"
              className="group rounded-none hover:bg-dark-900"
            >
              <CiGrid2V className="h-5 w-5 fill-dark-700 group-hover:fill-white" />
            </IconButton>
            {/* </Badge> */}
            <IconButton
              color="white"
              size="md"
              className="group rounded-none hover:bg-dark-900"
            >
              <CiGrid2H className="h-5 w-5 fill-dark-700 group-hover:fill-white " />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {products?.map(
          ({ name, disc_price, price, img, discount, rating, tag }, idx) => (
            <div
              key={idx}
              className="group col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6 xl:col-span-4"
            >
              <Card className="h-[400px] shadow-sm">
                <CardHeader
                  floated={false}
                  className="h-4/5 !rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none !m-0 relative"
                >
                  <img
                    src={img}
                    alt="profile-picture"
                    className="object-cover object-center w-full h-full "
                  />
                  <button
                    size="sm"
                    className="font-jost text-sm font-medium !py-1 !px-2 bg-white capitalize text-primaryRed absolute top-3 left-2"
                  >
                    {discount}
                  </button>
                  <div className="hidden group-hover:flex flex-col items-end gap-4 absolute right-2 top-3">
                    <IconButton color="white" size="sm">
                      <GiSelfLove stroke="1" className="h-5 w-5 font-normal" />
                    </IconButton>

                    {/* <Badge content="5"> */}
                    <IconButton color="white" size="sm">
                      <FaCartShopping className="h-5 w-5" />
                    </IconButton>
                    {/* </Badge> */}
                    <IconButton color="white" size="sm">
                      <FaRegUser className="h-5 w-5" />
                    </IconButton>
                  </div>
                  <div className="hidden group-hover:block  absolute bottom-3 left-[22%]">
                    <Link
                      // href="cart"
                      href={{
                        pathname: "/cart",
                        query: {
                          search: `${name}`,
                        },
                      }}
                    >
                      {" "}
                      <Button
                        size="sm"
                        className="font-jost bg-white font-normal capitalize text-sm text-dark-500 flex justify-center items-center h-[35px]"
                      >
                        <CiShoppingCart className="fill-text-dark-500 mr-2" />{" "}
                        Add To Carts
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardBody className="text-center px-2 mb-1 mt-1">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-grey-600">{tag}</p>
                    <h6 className="flex justify-center items-center text-dark-700">
                      <GoDotFill className="fill-primaryRed" />
                      {rating}
                    </h6>
                  </div>
                  <h6 className="text-left text-dark-700">{name}</h6>
                  <h6 className="mt-1 flex gap-3 justify-start items-center text-dark-700 ">
                    {disc_price}
                    <span className="font-normal line-through text-grey-600">
                      {price}
                    </span>
                  </h6>
                </CardBody>
              </Card>
            </div>
          )
        )}
      </div>
      <div className="flex justify-center">
        <Button
          size="md"
          className="font-jost text-sm bg-dark-900 font-normal capitalize text-white  border-[1px] border-grey-600 hover:border-none hover:bg-primaryRed hover:text-white h-[50px] rounded-none mt-5 mb-2 flex items-center gap-2"
        >
          View all products <FaLongArrowAltRight className="fill-white" />
        </Button>
      </div>
    </div>
  );
}

export default RightSidebar;
