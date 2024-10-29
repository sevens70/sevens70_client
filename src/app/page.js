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
// import { fetchAllOrderAsync } from "../components/features/order/orderSlice";
// import { fetchAllOrdersAsync } from "../components/features/order/orderSlice";
import { fetchAllOrderByUserId } from "../components/features/order/orderAPI";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectLoggedInUser);
  const userChecked = useAppSelector(selectUserChecked);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/signin");
    }
  }, [user, router]);
  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync());
      dispatch(fetchFavouriteItemsByUserIdAsync());
      // dispatch(fetchAllOrdersAsync());
      dispatch(fetchAllOrderByUserId());
      // we can get req.user by token on backend so no need to give in front-end
      dispatch(fetchLoggedInUserAsync());
    }
  }, [dispatch, user]);

  return (
    <div>
      {userChecked ? (
        <DefaultLayout>
          <div
            className="mx-auto"
            style={{ height: "auto", backgroundColor: "#fff" }}
          >
            <Home />
          </div>
        </DefaultLayout>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
