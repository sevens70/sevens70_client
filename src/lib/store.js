import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/cartSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: CartReducer,
    },
  });
};
