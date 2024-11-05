"use client";
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
// import { addToCart, getCart } from "../../../lib/features/cartSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
// import { getCarrency } from "../../../lib/features/currencySlice";
// import { convertStringToQueriesObject } from "./LeftSidebar";
import { addToFav } from "../../../lib/features/favouriteSlice";
import {
  convertStringToQueriesObject,
  convertValidStringQueries,
} from "./LeftSidebar";
import toast from "react-hot-toast";
import {
  fetchProductsByFiltersAsync,
  selectAllProducts,
  selectProductListStatus,
} from "../../features/product/productSlice";
import {
  addToFavouriteAsync,
  deleteItemFromFavouriteAsync,
  selectFavouriteItems,
} from "../../features/favourite/favouriteSlice";
import {
  addToCartAsync,
  // deleteItemFromCartAsync,
} from "../../features/cart/cartSlice";
import { selectLoggedInUser } from "../../features/auth/authSlice";
import Loader from "../../common/Loader";
const showNumber = [
  {
    label: "10",
    value: "10",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "All",
    value: "all",
  },
];

function RightSidebar() {
  const allProducts = useAppSelector(selectAllProducts);
  const allProductsStatus = useAppSelector(selectProductListStatus);
  const cartItems = useAppSelector((state) => state.cart.items);
  const user = useAppSelector(selectLoggedInUser);
  const items = useAppSelector(selectFavouriteItems);
  const [selectedFilterQueries, setSelectedFilterQueries] = useState({});
  const [isNumber, setIsNumber] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(showNumber[0]);
  const [sort, setSort] = useState({});
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

  const currentView = selectedFilterQueries.view?.[0] || "wf";
  // const paramsObj = selectedQueries;

  // Check if paramsObj has only the sort parameter or is empty

  const handleShowItemClick = (number) => {
    setSelectedNumber(number);
    setIsNumber(false);
  };
  const handleDeleteFavList = (id) => {
    const prdDocumentId = items?.find((item) => item.product.id === id);
    // console.log("object id 33", prdDocumentId);
    if (prdDocumentId) {
      dispatch(deleteItemFromFavouriteAsync(prdDocumentId?.id));
    }
  };

  useEffect(() => {
    if (Object.keys(selectedFilterQueries)?.length > 0) {
      console.log("1234 clicked", selectedFilterQueries);
      const pagination = {
        _page: 1,
        _limit: selectedNumber.value !== "all" ? selectedNumber.value : 1000,
      };
      dispatch(
        fetchProductsByFiltersAsync({
          selectedFilterQueries,
          sort,
          pagination,
        })
      );
    }
  }, [dispatch, selectedFilterQueries, sort, selectedNumber]);

  if (allProductsStatus === "loading") {
    return <Loader />;
  }
  if (allProducts?.length === 0) {
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
                    : allProducts?.length}{" "}
                  of {allProducts?.length} results
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
            {/* <IconButton
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
            </IconButton> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {allProducts?.map((item, idx) => {
          const {
            id,
            title,
            discountPrice,
            price,
            thumbnail,
            discountPercentage,
            rating,
            subcategory,
            category,
          } = item;
          return (
            <div
              key={idx}
              className={`group col-span-12 sm:col-span-6 md:col-span-12 lg:col-span-6 ${
                currentView === "grid" ? "xl:col-span-3" : "xl:col-span-4"
              }`}
            >
              <Card
                onClick={() => {
                  // dispatch(addToCart(item));
                  router.push(`/product/${id}`);
                }}
                className="h-[400px] shadow-sm cursor-pointer"
              >
                <CardHeader
                  floated={false}
                  className="h-4/5 !rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none !m-0 relative"
                >
                  <img
                    src={thumbnail}
                    alt="profile-picture"
                    className="object-cover object-center w-full h-full"
                  />
                  <button
                    size="sm"
                    className="font-jost text-sm font-medium !py-1 !px-2 bg-white capitalize text-primaryRed absolute top-3 left-2"
                  >
                    {`${discountPercentage}`} % off
                  </button>
                  <div className="sm:hidden flex group-hover:flex flex-col items-end gap-4 absolute right-2 top-3">
                    {user ? (
                      <>
                        {" "}
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!user) {
                              // Redirect to sign-in page if user is not authenticated
                              router.push(`/auth/signin`);
                              return;
                            }
                            if (
                              items?.findIndex(
                                (item) => item.product.id === id
                              ) < 0
                            ) {
                              const newItem = {
                                product: id,
                                category: category,
                              };
                              dispatch(
                                addToFavouriteAsync({ item: newItem, toast })
                              );
                            } else {
                              handleDeleteFavList(id);
                            }
                          }}
                          color="white"
                          size="sm"
                        >
                          {items?.findIndex((item) => item.product.id === id) <
                          0 ? (
                            <GiSelfLove className="h-5 w-5 font-normal" />
                          ) : (
                            <GiSelfLove className="h-5 w-5 font-normal !fill-primaryRed" />
                          )}
                        </IconButton>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!user) {
                              // Redirect to sign-in page if user is not authenticated
                              router.push(`/auth/signin`);
                              return;
                            }
                            if (
                              cartItems?.findIndex(
                                (item) => item.product.id === id
                              ) < 0
                            ) {
                              const newItem = {
                                product: id,
                                // quantity: count,
                                quantity: 1,
                              };
                              // if (selectedColor) {
                              //   newItem.color = selectedColor;
                              // }
                              // if (selectedSize) {
                              //   newItem.size = selectedSize;
                              // }
                              dispatch(
                                addToCartAsync({ item: newItem, toast })
                              );
                            } else {
                              toast.error("Item Already added");
                            }
                          }}
                          color="white"
                          size="sm"
                        >
                          {}
                          <FaCartShopping className="h-5 w-5" />
                        </IconButton>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!user) {
                              // Redirect to sign-in page if user is not authenticated
                              router.push(`/auth/signin`);
                              return;
                            }
                            router.push(`/orders`);
                          }}
                          color="white"
                          size="sm"
                        >
                          <FaRegUser className="h-5 w-5" />
                        </IconButton>
                      </>
                    ) : (
                      <>
                        {" "}
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/auth/signin`);
                          }}
                          color="white"
                          size="sm"
                        >
                          <GiSelfLove className="h-5 w-5 font-normal" />
                        </IconButton>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/auth/signin`);
                          }}
                          color="white"
                          size="sm"
                        >
                          <FaCartShopping className="h-5 w-5" />
                        </IconButton>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/auth/signin`);
                          }}
                          color="white"
                          size="sm"
                        >
                          <FaRegUser className="h-5 w-5" />
                        </IconButton>
                      </>
                    )}
                  </div>

                  <div
                    className={`md:hidden group-hover:block absolute bottom-3 ${
                      currentView === "grid"
                        ? "md:left-[10%] left-[30%]"
                        : "md:left-[22%] left-[25%]"
                    }`}
                  >
                    <div
                      onClick={(e) => {
                        e.stopPropagation();

                        // Check if user is authenticated
                        if (!user) {
                          // Redirect to sign-in page if user is not authenticated
                          router.push(`/auth/signin`);
                          return;
                        }

                        if (
                          cartItems?.findIndex(
                            (item) => item.product.id === id
                          ) < 0
                        ) {
                          const newItem = {
                            product: id,
                            quantity: 1,
                          };

                          dispatch(addToCartAsync({ item: newItem, toast }));
                        } else {
                          toast.error("Item Already added");
                        }
                      }}
                    >
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
                    <p className="text-sm text-grey-600 capitalize">
                      {subcategory}
                    </p>
                    <h6 className="flex justify-center items-center text-dark-700">
                      <GoDotFill className="fill-primaryRed" />
                      {rating}
                    </h6>
                  </div>
                  <h6
                    className={`text-left text-dark-700 capitalize ${
                      currentView === "grid" && "text-[1.3rem]"
                    }`}
                  >
                    {title}
                  </h6>
                  <h6 className="mt-1 flex gap-3 justify-start items-center text-dark-700 ">
                    {/* {currencyData?.symbol} */}৳{" "}
                    {discountPrice ? discountPrice : 0}.00
                    <span className="font-normal line-through text-grey-600">
                      {/* {currencyData?.symbol} */}৳ {price ? price : 0}.00
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
