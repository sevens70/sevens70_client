"use client";
import { useEffect } from "react";
import {
  checkAuthAsync,
  selectLoggedInUser,
  selectUserChecked,
} from "../components/features/auth/authSlice";
import { fetchItemsByUserIdAsync } from "../components/features/cart/cartSlice";
import { fetchLoggedInUserAsync } from "../components/features/user/userSlice";
import Home from "../components/pages/home";
import { useAppDispatch, useAppSelector } from "../lib/hooks";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectLoggedInUser);
  const userChecked = useAppSelector(selectUserChecked);

  // useEffect(() => {
  //   dispatch(checkAuthAsync()); // for loginUser user checked
  // }, [dispatch]);

  useEffect(() => {
   
    if (user) {
      dispatch(fetchLoggedInUserAsync());
      dispatch(fetchItemsByUserIdAsync());
      // dispatch(checkAuthAsync());
      // we can get req.user by token on backend so no need to give in front-end
 
    }
  }, [dispatch, user]);
  console.log("items & product user 12333", user, userChecked);
  return (
    <div
      className="mx-auto"
      style={{ height: "auto", backgroundColor: "#fff" }}
    >
      {userChecked | user && <Home />}
      {/* <Home /> */}
    </div>
  );
}
