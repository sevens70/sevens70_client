// import CartReducer from "./features/cartSlice";
import CurrencyReducer from "./features/currencySlice";
import FavouriteReducer from "./features/favouriteSlice";
// import OrdersReducer from "./features/ordersSlice";
import OrdersReducer from "../components/features/order/orderSlice";
import AuthReducer from "../components/features/auth/authSlice";
import cartReducer from "../components/features/cart/cartSlice";
import productReducer from "../components/features/product/productSlice";
import userReducer from "../components/features/user/userSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// Combine your reducers
const rootReducer = combineReducers({
  // cart: CartReducer,
  currency: CurrencyReducer,
  favourites: FavouriteReducer,
  // orders: OrdersReducer,
  order: OrdersReducer,
  auth: AuthReducer,
  product: productReducer,
  cart: cartReducer,
  // order: orderReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
