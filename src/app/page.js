"use client";
import { useEffect } from "react";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import {
  checkAuthAsync,
  selectLoggedInUser,
  selectUserChecked,
} from "../components/features/auth/authSlice";
import { fetchItemsByUserIdAsync } from "../components/features/cart/cartSlice";
import { fetchLoggedInUserAsync } from "../components/features/user/userSlice";
import Home from "../components/pages/home";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { useRouter } from "next/navigation";
import SignIn from "../components/features/auth/SignIn";
import { fetchFavouriteItemsByUserIdAsync } from "../components/features/favourite/favouriteSlice";
import { fetchAllOrderByUserId } from "../components/features/order/orderAPI";
import {
  fetchAllProductByAsinc,
  fetchBrandsAsync,
  fetchCategoriesAsync,
} from "../components/features/product/productSlice";
import { fetchWebsiteInfoAsync } from "../components/features/websiteInfo/websiteInfoSlice";
import { fetchAllBannerAsync } from "../components/features/banners/bannersSlice";
import { fetchAllRatingByAsync } from "../components/features/ratings/ratingsSlice";
import { fetchTopBannersAsync } from "../components/features/topBanners/topBannersSlice";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectLoggedInUser);
  // const userChecked = useAppSelector(selectUserChecked);
  // const router = useRouter();

  useEffect(() => {
    dispatch(checkAuthAsync());
    dispatch(fetchWebsiteInfoAsync());
    dispatch(fetchTopBannersAsync());
    dispatch(fetchAllBannerAsync()); //it's for offer section
    dispatch(fetchAllRatingByAsync());
    dispatch(fetchCategoriesAsync());
    dispatch(fetchBrandsAsync());
    dispatch(fetchAllProductByAsinc());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchLoggedInUserAsync());
      dispatch(fetchItemsByUserIdAsync());
      dispatch(fetchFavouriteItemsByUserIdAsync());
    }
    // else
    // {
    //   router.push("/auth/signin");
    // }
  }, [dispatch, user]);

  return (
    <div>
      {/* {userChecked ? ( */}
      <DefaultLayout>
        <div
          className="mx-auto"
          style={{ height: "auto", backgroundColor: "#fff" }}
        >
          <Home />
        </div>
      </DefaultLayout>
      {/* ) : ( */}
      {/* <SignIn /> */}
      {/* )} */}
    </div>
  );
}
