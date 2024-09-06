// import { Alert } from "@material-tailwind/react";
import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    items: [],
    // totalAmount: 0,
    totalCount: 0,
  },

  reducers: {
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearFavList: (state, action) => {
      state.items = [];
    },
    getFavItems: (state) => {
      state.items = data;
    },

    addToFav: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        state.items = state.items.filter(
          (item) =>
            item.id !== newItem.id &&
            item.categories.some((cat) => newItem.categories.includes(cat))
        );
      } else {
        state.items.push({ ...newItem });
      }
    },
  },
});

export const { remove, clearFavList, getFavItems, addToFav } =
  favouriteSlice.actions;

export const getFavourites = (state) => state.favourites?.items;

export default favouriteSlice.reducer;
