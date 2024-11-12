import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchAllBanner } from "./bannersAPI";
const initialState = {
  banners: [],
  status: "idle",
  totalItems: 0,
  selectedBanner: null,
};

export const fetchAllBannerAsync = createAsyncThunk(
  "banner/allBanner",
  async () => {
    const response = await fetchAllBanner();
    return response.data;
  }
);

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    clearSelectedBanner: (state) => {
      state.selectedBanner = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBannerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllBannerAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.banners = action.payload.banner;
      })
      .addCase(fetchAllBannerAsync.rejected, (state, action) => {
        state.status = "failed";
        // console.error("error", action.error);
      });
  },
});

export const { clearSelectedBanner } = bannerSlice.actions;

export const selectAllBanner = (state) => state.banner?.banners;
export const selectedBannerById = (state) => state.banner?.selectedBanner;
export const selectBannerListStatus = (state) => state.banner?.status;

export const selectBannerTotalItems = (state) => state.banner?.totalItems;

export default bannerSlice.reducer;
