"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import {
  selectAllProducts,
  selectProductListStatus,
} from "../product/productSlice";
import { selectLoggedInUser } from "../auth/authSlice";
import { selectFavouriteItems } from "../favourite/favouriteSlice";
import { useRouter } from "next/navigation";
import Slider from "../../Slider";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import {
  Button,
  CardHeader,
  Card,
  IconButton,
  CardBody,
} from "@material-tailwind/react";
import { FcRating } from "react-icons/fc";
import { FaCartShopping } from "react-icons/fa6";
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

export default function sliderPage() {
  const allProducts = useAppSelector(selectAllProducts);
  const status = useAppSelector(selectProductListStatus);
  const cartItems = useAppSelector((state) => state.cart?.items);
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
  return (
    <div className="mx-[20px] md:mx-[50px] lg:mx-[180px]">
      {/* New Section with benifit slider */}
      <div className="py-8">
        <h1 className="text-md font-bold mb-4 text-center my-10 !mb-[60px]">
          BENIFIT SLIDER
        </h1>{" "}
        <div className="!mt-10">
          {" "}
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
                          {discountPercentage
                            ? `${discountPercentage} % OFF`
                            : ""}
                        </Button>
                        <div className="hidden group-hover:flex flex-col items-end gap-4 absolute right-2 top-3"></div>
                      </CardHeader>
                      <CardBody className="flex-grow items-center text-left p-3 mt-2">
                        <p className="text-sm text-grey-600 ">{subcategory}</p>
                        <h6 className="text-left text-dark-700 mt-1">
                          {title}
                        </h6>
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
                        <p className="text-sm text-grey-700 mt-2">
                          {description}
                        </p>
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

                              dispatch(
                                addToCartAsync({ item: newItem, toast })
                              );
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
        </div>
        <div className="text-center my-10">
          {" "}
          <button className="mt-10 px-6 py-3 bg-purple-600 text-white font-bold rounded-full">
            CALL TO ACTION
          </button>
        </div>
      </div>
    </div>
  );
}
