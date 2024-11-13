"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { FcRating } from "react-icons/fc";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import Slider from "../../Slider";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
// import { getCarrency } from "../../../lib/features/currencySlice";
// import { addToCart, getCart } from "../../../lib/features/cartSlice";
// import { addToFav } from "../../../lib/features/favouriteSlice";
import toast from "react-hot-toast";
import {
  selectAllProducts,
  selectProductListStatus,
} from "../../features/product/productSlice";
import Loader from "../../common/Loader";
import {
  addToFavouriteAsync,
  deleteItemFromFavouriteAsync,
  selectFavouriteItems,
} from "../../features/favourite/favouriteSlice";
import { addToCartAsync } from "../../features/cart/cartSlice";
import { selectLoggedInUser } from "../../features/auth/authSlice";
const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 1,
  },
  639: {
    slidesPerView: 1,
  },
  865: {
    slidesPerView: 1,
  },
  1000: {
    slidesPerView: 2,
  },
  1500: {
    slidesPerView: 2,
  },
  1700: {
    slidesPerView: 2,
  },
};
function NewArrival() {
  const allProducts = useAppSelector(selectAllProducts);
  const status = useAppSelector(selectProductListStatus);
  const cartItems = useAppSelector((state) => state.cart.items);
  const user = useAppSelector(selectLoggedInUser);
  const items = useAppSelector(selectFavouriteItems);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [displayProduct, setDisplayProduct] = useState([]);
  const handleDeleteFavList = (id) => {
    const prdDocumentId = items?.find((item) => item.product.id === id);
    if (prdDocumentId) {
      dispatch(deleteItemFromFavouriteAsync(prdDocumentId?.id));
    }
  };

  useEffect(() => {
    if (allProducts?.length > 0) {
      const topProducts = allProducts.filter(
        (item) => item?.type?.toLowerCase() === "new arrival"
      );
      setDisplayProduct(topProducts);
    }
  }, [allProducts]);
  console.log("display product 0000000000000", displayProduct);
  return (
    <section className="w-11/12 mt-20 pb-10 relative md:w-10/12 mx-auto">
      <div className="flex flex-wrap md:justify-center justify-start items-center gap-3 mb-10">
        <div>
          <h6 className="md:text-center text-left font-normal text-grey-700">
            Our Products
          </h6>
          <h3
            className="mt-2 text-xmd text-dark-700"
            style={{ lineHeight: "46px" }}
          >
            New Arrival Product
          </h3>
        </div>
      </div>
      {/* <div className="grid grid-cols-12 gap-4"> */}
      <Slider
        className="overflow-hidden"
        id="trending-product-slider"
        autoPlayEnabled={true}
        pagination={false}
        slidesPerView={2}
        spaceBetween={20}
        autoplay={true}
        breakpoints={breakpoints}
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        style={{
          "--swiper-navigation-size": "18px",
          "--swiper-theme-color": "black-dark-900",
        }}
      >
        {status === "loading" && <Loader />}
        {displayProduct?.length === 0 && status !== "loading" && (
          <p className="py-6 text-center">No data found.</p>
        )}

        {displayProduct.map((item, idx) => {
          const {
            id,
            title,
            description,
            discountPrice,
            price,
            thumbnail,
            discountPercentage,
            rating,
            category,
            subcategory,
          } = item;
          return (
            <SwiperSlide key={idx} className="h-full">
              <div key={idx} className="group">
                <Card
                  onClick={() => {
                    router.push(`/product/${id}`);
                  }}
                  className="md:flex-row flex-col shadow-sm cursor-pointer"
                >
                  <CardHeader
                    floated={false}
                    className="min-w-[200px] basis-3/6 !rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none !m-0 relative"
                  >
                    <img
                      src={thumbnail}
                      alt="profile-picture"
                      className="max-h-[350px] object-cover object-center w-full h-full trending__image"
                      style={{ maxHeight: "300px", minHeight: "300px" }}
                      width={300}
                      height={300}
                    />
                    <Button
                      size="sm"
                      className="font-jost text-sm font-medium !py-1 !px-2 bg-white capitalize text-primaryRed absolute top-3 left-2"
                    >
                      {discountPercentage ? `${discountPercentage} % OFF` : ""}
                    </Button>
                    <div className="hidden group-hover:flex flex-col items-end gap-4 absolute right-2 top-3">
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
                                  addToFavouriteAsync({
                                    item: newItem,
                                    toast,
                                  })
                                );
                              } else {
                                handleDeleteFavList(id);
                              }
                            }}
                            color="white"
                            size="sm"
                          >
                            {items?.findIndex(
                              (item) => item.product.id === id
                            ) < 0 ? (
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
                          {/* <IconButton
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
                          </IconButton> */}
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
                          {/* <IconButton
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/auth/signin`);
                            }}
                            color="white"
                            size="sm"
                          >
                            <FaRegUser className="h-5 w-5" />
                          </IconButton> */}
                        </>
                      )}
                    </div>
                  </CardHeader>
                  <CardBody className="flex-grow items-center text-left p-3 mt-2">
                    <p className="text-sm text-grey-600 ">{subcategory}</p>
                    <h6 className="text-left text-dark-700 mt-1">{title}</h6>
                    <h6 className="flex gap-3 justify-start items-center font-medium text-dark-700 mt-1">
                      {/* {currencyData?.symbol} */}৳ {discountPrice}
                      <span className="font-[400] line-through text-grey-600">
                        {/* {currencyData?.symbol} */}৳ {price}
                      </span>
                    </h6>
                    <h6 className="mt-2 flex justify-start items-center gap-1 text-dark-700">
                      <FcRating className="fill-primaryRed" />
                      {rating}
                    </h6>
                    <p className="text-sm text-grey-700 mt-2">{description}</p>
                    <Button
                      size="sm"
                      className="font-jost text-sm flex items-center gap-2 mt-3 mb-2 bg-transparent font-normal capitalize text-dark-700  border-[1px] border-grey-600 hover:border-none hover:bg-primaryRed hover:text-white h-[40px] rounded-none"
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
                      <FaCartShopping className="fill-dark-700 hover:fill-white group-hover:fill-dark-700" />
                      Add To Cart
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </SwiperSlide>
          );
        })}
      </Slider>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="swiper-custom-pagination"></div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default NewArrival;
