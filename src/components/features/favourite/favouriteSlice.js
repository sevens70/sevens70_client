import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToFavourite,
  deleteItemFromFavourite,
  fetchItemsByUserId,
  resetFavourite,
  updateFavourite,
} from "./favouriteAPI";
import toast from "react-hot-toast";

const initialState = {
  status: "idle",
  items: [],
  favouriteLoaded: false,
};

export const addToFavouriteAsync = createAsyncThunk(
  "favourite/addToFavourite",
  async ({ item, toast }) => {
    const response = await addToFavourite(item);
    if (response.status === 201) {
      toast.success("Successfully Added");
    }
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchFavouriteItemsByUserIdAsync = createAsyncThunk(
  "favourite/fetchItemsByUserId",
  async () => {
    const response = await fetchItemsByUserId();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateFavouriteAsync = createAsyncThunk(
  "favourite/updateFavourite",
  async (update) => {
    const response = await updateFavourite(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const deleteItemFromFavouriteAsync = createAsyncThunk(
  "favourite/deleteItemFromFavourite",
  async (itemId) => {
    const response = await deleteItemFromFavourite(itemId);
    if (response.status === 200) {
      toast.success("Deleted successfully");
    }
    return response.data;
  }
);

export const resetFavouriteAsync = createAsyncThunk(
  "favourite/resetFavourite",
  async () => {
    const response = await resetFavourite();
    return response.data;
  }
);

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToFavouriteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToFavouriteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(fetchFavouriteItemsByUserIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFavouriteItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
        state.cartLoaded = true;
      })
      .addCase(fetchFavouriteItemsByUserIdAsync.rejected, (state, action) => {
        state.status = "idle";
        state.cartLoaded = true;
      })
      .addCase(updateFavouriteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateFavouriteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[index] = action.payload;
      })
      .addCase(deleteItemFromFavouriteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteItemFromFavouriteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(resetFavouriteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetFavouriteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = [];
        toast.success("Successfully reset all item");
      });
  },
});

// export const { increment } = cartSlice.actions;

export const selectFavouriteItems = (state) => state.favourite.items;
export const selectFavouriteStatus = (state) => state.favourite.status;
export const selectFavouriteLoaded = (state) => state.favourite.favouriteLoaded;

export default favouriteSlice.reducer;
