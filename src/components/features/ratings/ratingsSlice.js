import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { addToRating, deleteItemFromRatings, fetchAllRating } from "./ratingsAPI";

const initialState = {
  status: "idle",
  items: [],
  ratingsLoaded: false,
};

export const addToRatingAsync = createAsyncThunk(
  "rating/addToRating",
  async ({ item, toast }) => {
    console.log("1234 rating", item)
    const response = await addToRating(item);
    if (response.status === 201) {
      toast.success("Successfully Added");
    } else {
      toast.error("Failed to save");
    }
    return response.data;
  }
);
export const fetchAllRatingByAsync = createAsyncThunk(
    "rating/allRating",
    async () => {
      const response = await fetchAllRating();
      return response.data;
    }
  );

export const deleteItemFromRatingsAsync = createAsyncThunk(
  "rating/deleteItemFromRatings",
  async (itemId) => {
    const response = await deleteItemFromRatings(itemId);
    console.log("response for ratings", response);
    if (response.status === 200) {
      toast.success("Deleted successfully");
    }
    return response.data;
  }
);



export const ratingsSlice = createSlice({
  name: "ratings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToRatingAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToRatingAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(fetchAllRatingByAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllRatingByAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload.ratings;
      })
      .addCase(fetchAllRatingByAsync.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(deleteItemFromRatingsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteItemFromRatingsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
  },
});


export const selectRatingItems = (state) => state.ratings.items;
export const selectRatingStatus = (state) => state.ratings.status;
export const selectRatingsLoaded = (state) => state.ratings.ratingsLoaded;

export default ratingsSlice.reducer;
