"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { GoDotFill } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import Slider from "../../Slider";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { addToCart, getCart } from "../../../lib/features/cartSlice";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { getCarrency } from "../../../lib/features/currencySlice";
import { addToFav } from "../../../lib/features/favouriteSlice";
import { useRouter } from "next/navigation";
import {
  selectAllProducts,
  selectProductListStatus,
} from "../../features/product/productSlice";
import { addToCartAsync } from "../../features/cart/cartSlice";
import { selectLoggedInUser } from "../../features/auth/authSlice";
import {
  addToFavouriteAsync,
  deleteItemFromFavouriteAsync,
  selectFavouriteItems,
} from "../../features/favourite/favouriteSlice";
import Loader from "../../common/Loader";
function Products() {
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
  const items = useAppSelector(selectFavouriteItems);
  const cartItems = useAppSelector((state) => state.cart.items);
  const user = useAppSelector(selectLoggedInUser);
  const allProducts = useAppSelector(selectAllProducts);
  const status = useAppSelector(selectProductListStatus);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [active, setActive] = useState("all");
  const [dispalyPrd, setDisplayPrd] = useState([]);
  const handleDeleteFavList = (id) => {
    const prdDocumentId = items?.find((item) => item.product.id === id);
    if (prdDocumentId) {
      dispatch(deleteItemFromFavouriteAsync(prdDocumentId?.id));
    }
  };

  useEffect(() => {
    if (allProducts?.length > 0) {
      if (active === "all") {
        setDisplayPrd(allProducts);
      } else if (active === "men") {
        let filter = allProducts.filter(
          (item) => item.category.toLowerCase() === "men"
        );
        setDisplayPrd(filter);
      } else if (active === "women") {
        let filter = allProducts.filter(
          (item) => item.category.toLowerCase() === "women"
        );
        setDisplayPrd(filter);
      } else if (active === "accessories") {
        let filter = allProducts.filter(
          (item) => item.category.toLowerCase() === "accessories"
        );
        setDisplayPrd(filter);
      }
    }
  }, [active, allProducts]);

  return (
    <section className="w-11/12 mt-20 md:w-10/12 mx-auto pb-10 relative">
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
        <div>
          <h6 className="text-grey-700 font-normal">Our Products</h6>
          <h3 className="text-xmd mt-1 text-dark-700">Our Top Products</h3>
        </div>

        <div>
          <div className="flex w-max md:gap-4 gap-2">
            <Button
              onClick={() => setActive("all")}
              className={`font-jost md:text-sm text-xsm  font-normal rounded-none capitalize border  border-light-50 ${
                active === "all"
                  ? "bg-primaryRed !text-white "
                  : "bg-transparent text-dark-700"
              }`}
              size="sm"
            >
              All
            </Button>
            <Button
              onClick={() => setActive("women")}
              size="sm"
              className={`font-jost md:text-sm text-xsm  font-normal rounded-none capitalize border  border-light-50 ${
                active === "women"
                  ? "bg-primaryRed !text-white "
                  : "bg-transparent text-dark-700"
              }`}
            >
              Women
            </Button>
            <Button
              onClick={() => setActive("men")}
              size="sm"
              className={`font-jost md:text-sm text-xsm  font-normal rounded-none capitalize border  border-light-50 ${
                active === "men"
                  ? "bg-primaryRed !text-white "
                  : "bg-transparent text-dark-700"
              }`}
            >
              Men
            </Button>
            <Button
              onClick={() => setActive("accessories")}
              size="sm"
              className={`font-jost md:text-sm text-xsm  font-normal rounded-none capitalize border  border-light-50 ${
                active === "accessories"
                  ? "bg-primaryRed !text-white "
                  : "bg-transparent text-dark-700"
              }`}
            >
              Accessories
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-12 gap-4"> */}
      <Slider
        className="overflow-hidden"
        id="product-slider"
        autoPlayEnabled={false}
        pagination={true}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={false}
        breakpoints={breakpoints}
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        style={{
          "--swiper-navigation-size": "18px",
          "--swiper-theme-color": "black-dark-900",
        }}
      >
        {" "}
        {status === "loading" && <Loader />}
        {dispalyPrd?.length === 0 && (
          <p className="py-6 text-center">No data found.</p>
        )}
        {dispalyPrd?.map((item, idx) => {
          const {
            id,
            title,
            discountPrice,
            price,
            thumbnail,
            rating,
            category,
            subcategory,
            discountPercentage,
          } = item;
          return (
            <SwiperSlide key={idx} className="h-full">
              {" "}
              <div key={idx} className="group">
                <Card
                  onClick={() => {
                    router.push(`/product/${id}`);
                  }}
                  className="h-[400px] shadow-sm relative cursor-pointer"
                >
                  <CardHeader
                    floated={false}
                    className="h-4/5 !rounded-none !rounded-tl-lg !rounded-tr-lg shadow-none !m-0 "
                  >
                    <div className="md:hidden group-hover:block  absolute bottom-3 left-[25%]">
                      <Link href="cart">
                        {" "}
                        <Button
                          size="sm"
                          className="font-jost bg-white font-normal capitalize text-sm text-dark-500 flex justify-center items-center h-[35px]"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!user) {
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

                              dispatch(
                                addToCartAsync({ item: newItem, toast })
                              );
                            } else {
                              toast.error("Item Already added");
                            }
                          }}
                        >
                          <CiShoppingCart className="fill-text-dark-500 mr-2" />{" "}
                          Add To Cart
                        </Button>
                      </Link>
                    </div>
                    <img
                      src={thumbnail}
                      alt="profile-picture"
                      className="object-cover object-center h-full w-full"
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
                    <h6 className="text-left text-dark-700">{title}</h6>
                    <h6 className="mt-1 flex gap-3 justify-start items-center text-dark-700 ">
                      {/* {currencyData?.symbol} */}৳ {discountPrice}
                      <span className="font-normal line-through text-grey-600">
                        {/* {currencyData?.symbol} */}৳ {price}
                      </span>
                    </h6>
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
    </section>
  );
}

export default Products;
