import React, { useEffect, useState } from "react";
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
  MenuList,
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
// import Link from "next/link";
import { addToCart } from "../../../lib/features/cartSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { getCarrency } from "../../../lib/features/currencySlice";
// import { convertStringToQueriesObject } from "./LeftSidebar";
import { addToFav } from "../../../lib/features/favouriteSlice";
import {
  convertStringToQueriesObject,
  convertValidStringQueries,
} from "./LeftSidebar";
const showNumber = [
  {
    label: "5",
    value: "5",
  },
  {
    label: "10",
    value: "10",
  },
  {
    label: "All",
    value: "all",
  },
];
// const sortingOrder = ["Newest", "Price Low - High", "Price High - Low"];
// const sortOption = [
//   {
//     label: "Newest",
//     value: "Newest",
//   },
//   {
//     label: "Price Low - High",
//     value: "Price Low - High",
//   },
//   {
//     label: "Price High - Low",
//     value: "Price High - Low",
//   },
// ];
const products = [
  {
    id: 1,
    name: "Ribbed modal T-shirt",
    img: "/category/cate1.png",
    discount: "10% off",
    price: "45.00",
    disc_price: "45.00",
    rating: "5.0",
    tag: "shirt",
    categories: ["women cloth"],
    prd_category: "Dress",
    // color: ["light brown", "blue"],
    colors: ["green"],
    brand: "Abc Fashion",
    size: ["m"],
    stock: "In Stock",
    createdAt: "10/12/2023",
  },
  {
    id: 2,
    name: "Loose Fit Hoodie",
    price: "41.00",
    discount: "10% off",
    disc_price: "45.00",
    rating: "5.0",
    tag: "shirt",
    img: "/category/cate2.png",
    categories: ["women cloth"],
    prd_category: "Sneaker",
    // color: ["blue", "light purple"],
    colors: ["red"],
    brand: "Squire Style",
    size: ["xl"],
    stock: "In Stock",
    createdAt: "15/08/2023",
  },
  {
    id: 3,
    name: "Ribbed Tank Top",
    price: "35.00",
    disc_price: "45.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "/category/cate3.png",
    categories: ["men cloth"],
    prd_category: "Handbag",
    // color: ["light purple", "pele"],
    colors: ["white"],
    brand: "Nice Fashion",
    size: ["xxl"],
    stock: "Out of Stock",
    createdAt: "10/11/2023",
  },
  {
    id: 4,
    name: "V-neck linen T-shirt",
    price: "55.00",
    disc_price: "45.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "/category/cate4.png",
    categories: ["men cloth"],
    prd_category: "Cosmetics",
    // color: ["pele", "gray"],
    colors: ["blue"],
    brand: "Xozo Fashion",
    size: ["s"],
    stock: "In Stock",
    createdAt: "10/12/2024",
  },
  {
    id: 5,
    name: "V-neck linen T-shirt",
    price: "90.00",
    disc_price: "75.00",
    discount: "10% off",
    rating: "5.0",
    tag: "shirt",
    img: "/category/cate4.png",
    categories: ["men cloth"],
    prd_category: "Smart Watch",
    // color: ["gray", "jean blue", "dark blue", "red"],
    colors: ["black"],
    brand: "Style Zone",
    size: ["l"],
    stock: "Out of Stock",
    createdAt: "04/06/2023",
  },
];
function RightSidebar() {
  const currencyData = useAppSelector(getCarrency);
  const { items: favItems } = useAppSelector((state) => state.favourites);
  console.log("items for fav", favItems);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilterQueries, setSelectedFilterQueries] = useState({});
  const [isNumber, setIsNumber] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(showNumber[0]);
  // const [isSort, setIsSort] = useState(false);
  // const [selectedSort, setSelectedSort] = useState(sortOption[0]);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  let selectedQueries = {};
  searchParams?.forEach((values, key) => {
    if (key !== "category" && key !== "view") {
      const queries = values.split(",");
      if (selectedQueries[key]) {
        selectedQueries[key].push(...queries);
      } else {
        selectedQueries[key] = queries;
      }
    }
  });
  // = for view
  useEffect(() => {
    const paramsObj = convertStringToQueriesObject(searchParams);
    setSelectedFilterQueries(paramsObj);
  }, [searchParams]);

  function handleViewChange(viewType) {
    let queries = { ...selectedFilterQueries };
    // Add or update the view query
    queries.view = [viewType];

    const queryString = convertValidStringQueries(queries);
    router.push(`${pathname}?${queryString}`, {
      scroll: false,
    });
  }
  // ==

  const currentView = selectedFilterQueries.view?.[0] || "wf";
  const paramsObj = selectedQueries;

  let filteredProducts = products.filter((product) => {
    const hasCategories = isAvailable(
      product.categories,
      paramsObj?.categories
    );
    const hasColors = isAvailable(product.colors, paramsObj?.colors);
    const hasSize = isAvailable(product.size, paramsObj?.sizes);
    const hasBrand = isAvailable(
      [product.brand.toLowerCase()],
      paramsObj?.brand
    );

    // Check if the product's discount price falls within the price range
    const priceRange = paramsObj?.price?.[0]?.split("-");
    const minPrice = parseFloat(priceRange?.[0]) || 0;
    const maxPrice = parseFloat(priceRange?.[1]) || Infinity;

    const hasPrice =
      parseInt(product.disc_price) >= minPrice &&
      parseInt(product.disc_price) <= maxPrice;

    console.log("Filtered Products012", maxPrice, hasPrice);

    return (hasSize || hasColors || hasCategories || hasBrand) && hasPrice;
  });
  console.log(
    "Filtered Products",
    filteredProducts,
    Object.keys(paramsObj).length,
    paramsObj.price
  );
  // Check if paramsObj has only the sort parameter or is empty
  if (
    Object.keys(paramsObj).length === 0 ||
    (Object.keys(paramsObj).length === 1 && paramsObj.sort)
  ) {
    // if only sorting is applied or no filters are selected
    filteredProducts = products.sort((p1, p2) => {
      const sortKey = paramsObj?.sort?.[0]?.toLowerCase();
      console.log("sortKey", sortKey);
      switch (sortKey) {
        case "newest":
          return Date.parse(p2.createdAt) - Date.parse(p1.createdAt);
        case "price high - low":
          return parseFloat(p2.price) - parseFloat(p1.price);
        case "price low - high":
          return parseFloat(p1.price) - parseFloat(p2.price);
        default:
          return 0;
      }
    });
  }
  if (Object.keys(paramsObj)?.length === 1 && paramsObj.price) {
    // if only price filter is applied
    filteredProducts = products.filter((product) => {
      const priceRange = paramsObj?.price?.[0]?.split("-");
      const minPrice = parseFloat(priceRange?.[0]) || 0;
      const maxPrice = parseFloat(priceRange?.[1]) || Infinity;

      const hasPrice =
        parseInt(product.disc_price) >= minPrice &&
        parseInt(product.disc_price) <= maxPrice;

      return hasPrice;
    });
  } else {
    // if additional filters are applied
    filteredProducts = filteredProducts.sort((p1, p2) => {
      const sortKey = paramsObj?.sort?.[0]?.toLowerCase();
      console.log("sortKey", sortKey);
      switch (sortKey) {
        case "newest":
          return Date.parse(p2.createdAt) - Date.parse(p1.createdAt);
        case "price high - low":
          return parseFloat(p2.price) - parseFloat(p1.price);
        case "price low - high":
          return parseFloat(p1.price) - parseFloat(p2.price);
        default:
          return 0;
      }
    });
  }

  const handleShowItemClick = (number) => {
    setSelectedNumber(number);
    setIsNumber(false);
  };

  if (filteredProducts.length === 0) {
    return <p className="text-center text-slate-700">No products Available</p>;
  }

  return (
    <div>
      <div className="my-5 md:flex md:flex-row gap-3 lg:justify-between items-center">
        <div className="w-full flex items-center justify-between flex-wrap gap-3">
          <div>
            {" "}
            <div className="flex flex-wrap gap-3 items-center">
              {" "}
              {/* <Menu className="" open={isSort} handler={setIsSort}>
                <MenuHandler>
                  <MenuItem className="w-[250px] h-[40px] !rounded-none border border-2 !border-light-300 text-sm items-center gap-2 font-normal text-dark-900 lg:flex md:flex flex lg:rounded-full tracking-normal bg: hover:bg-transparent focus:bg-transparent active:bg-transparent">
                    Default Sorting : {selectedSort.label}
                    <FaChevronDown
                      strokeWidth={2}
                      className={`h-2 w-2 ml-4 transition-transform ${
                        isSort ? "rotate-180" : ""
                      }`}
                    />
                  </MenuItem>
                </MenuHandler>
                <MenuList className="!z-[1000] text-xsm font-jost">
                  {" "}
                  {sortOption.map((item, idx) => (
                    <MenuItem
                      key={idx}
                      className=" gap-2 font-normal text-blue-gray-900"
                      onClick={() => handleSortItem(item)}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu> */}
              <Menu className="" open={isNumber} handler={setIsNumber}>
                <MenuHandler>
                  <MenuItem className="w-[150px]  h-[40px] !rounded-none border border-2 !border-light-300 text-sm items-center gap-2 font-normal text-blue-gray-900 lg:flex md:flex flex lg:rounded-full bg: hover:bg-transparent focus:bg-transparent active:bg-transparent">
                    Show:{" "}
                    <span className="text-dark-900">
                      {/* {filteredProducts?.length} */}
                      {selectedNumber.label}
                    </span>{" "}
                    <FaChevronDown
                      strokeWidth={2}
                      className={`h-2 w-2 ml-2 transition-transform ${
                        isNumber ? "rotate-180" : ""
                      }`}
                    />
                  </MenuItem>
                </MenuHandler>
                <MenuList className="!z-[1000] text-xsm font-jost">
                  {" "}
                  {showNumber.map((item, idx) => (
                    <MenuItem
                      key={idx}
                      className=" gap-2 font-normal text-blue-gray-900"
                      onClick={() => handleShowItemClick(item)}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <div className="flex gap-3">
                {" "}
                <p className="ml-3 text-dark-900 text-sm">
                  Showing 1-
                  {selectedNumber.value !== "all"
                    ? selectedNumber.value
                    : filteredProducts?.length}{" "}
                  of {filteredProducts?.length} results
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              color={currentView === "wf" ? "black" : "white"}
              size="md"
              className="group rounded-none hover:bg-dark-900"
              onClick={() => handleViewChange("wf")}
            >
              <CiGrid41
                className={`h-5 w-5 ${
                  currentView === "wf" ? "fill-white" : "fill-dark-700"
                } group-hover:fill-white`}
              />
            </IconButton>

            {/* <Badge content="5"> */}
            <IconButton
              color={currentView === "grid" ? "black" : "white"}
              size="md"
              className="group rounded-none hover:bg-dark-900"
              onClick={() => handleViewChange("grid")}
            >
              <CiGrid2V
                className={`h-5 w-5 ${
                  currentView === "grid" ? "fill-white" : "fill-dark-700"
                } group-hover:fill-white`}
              />
            </IconButton>
            {/* </Badge> */}
            <IconButton
              color={currentView === "list" ? "black" : "white"}
              size="md"
              className="group rounded-none hover:bg-dark-900"
              onClick={() => handleViewChange("list")}
            >
              <CiGrid2H
                className={`h-5 w-5 ${
                  currentView === "list" ? "fill-white" : "fill-dark-700"
                } group-hover:fill-white`}
              />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {filteredProducts?.map((item, idx) => {
          const {
            id,
            name,
            disc_price,
            price,
            img,
            discount,
            rating,
            tag,
            categories,
          } = item;
          console.log("items favItems", favItems);
          const isFavorite = favItems.some(
            (fav) =>
              fav.id === id &&
              fav.categories.some((cat) => categories.includes(cat))
          );
          console.log("items favItems0101", favItems, isFavorite);
          return (
            <div
              key={idx}
              // className="group col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6 xl:col-span-4"
              className={`group col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6 ${
                currentView === "grid" ? "xl:col-span-3" : "xl:col-span-4"
              }`}
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
                  <div className="sm:hidden flex group-hover:flex flex-col items-end gap-4 absolute right-2 top-3">
                    <IconButton
                      onClick={() => {
                        dispatch(addToFav(item));
                        // router.push(`/product/${id}`);
                      }}
                      color="white"
                      size="sm"
                    >
                      {isFavorite ? (
                        <GiSelfLove
                          className="h-5 w-5 font-normal !fill-primaryRed"
                          // style={{ fill: "red" }}
                        />
                      ) : (
                        <GiSelfLove className="h-5 w-5 font-normal" />
                      )}
                    </IconButton>

                    {/* <Badge content="5"> */}
                    <IconButton
                      onClick={() => {
                        dispatch(addToCart(item));
                        router.push(`/product/${id}`);
                      }}
                      color="white"
                      size="sm"
                    >
                      <FaCartShopping className="h-5 w-5" />
                    </IconButton>
                    {/* </Badge> */}
                    <IconButton color="white" size="sm">
                      <FaRegUser className="h-5 w-5" />
                    </IconButton>
                  </div>
                  <div className="md:hidden group-hover:block  absolute bottom-3 md:left-[22%] left-[25%]">
                    <div
                      onClick={() => {
                        dispatch(addToCart(item));
                        router.push(`/product/${id}`);
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
                    </div>
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
                  <h6
                    className={`text-left text-dark-700 ${
                      currentView === "grid" && "text-[1.3rem]"
                    }`}
                  >
                    {name}
                  </h6>
                  <h6 className="mt-1 flex gap-3 justify-start items-center text-dark-700 ">
                    {currencyData?.symbol}
                    {disc_price}
                    <span className="font-normal line-through text-grey-600">
                      {currencyData?.symbol}
                      {price}
                    </span>
                  </h6>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
      {selectedNumber?.value !== "all" && (
        <div className="flex justify-center">
          <Button
            size="md"
            className="font-jost text-sm bg-dark-900 font-normal capitalize text-white  border-[1px] border-grey-600 hover:border-none hover:bg-primaryRed hover:text-white h-[50px] rounded-none mt-5 mb-2 flex items-center gap-2"
            onClick={() =>
              setSelectedNumber({
                label: "All",
                value: "all",
              })
            }
          >
            View all products <FaLongArrowAltRight className="fill-white" />
          </Button>
        </div>
      )}
    </div>
  );
}
function isAvailable(arr1, arr2) {
  if (!arr1) {
    return true;
  }
  return arr1.some((item) => arr2?.includes(item)); // Check if any element in arr1 is in arr2
}

export default RightSidebar;
