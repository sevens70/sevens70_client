import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSunglassBanner } from "./sunglassBannerAPI";

const initialState = {
  status: "idle",
  banner: [],
  selectedSunglassBanner: null,
};

export const fetchSunglassBannerAsync = createAsyncThunk(
  "sunglass/fetchSunglassBanner",
  async () => {
    const response = await fetchSunglassBanner();
    console.log("response 12", response);
    return response.data;
  }
);

export const sunglassBannerSlice = createSlice({
  name: "sunglass_banner",
  initialState,
  reducers: {
    clearselectedSunglassBanner: (state) => {
      state.selectedSunglassBanner = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSunglassBannerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSunglassBannerAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.banner = action.payload;
      });
  },
});
export const { clearselectedSunglassBanner } = sunglassBannerSlice.actions;
export const allSunglassBanner = (state) => state.sunglassBanner?.banner;
export const sunglassBannerStatus = (state) => state.sunglassBanner?.status;
export const selectSunglassBannerById = (state) =>
  state.sunglassBanner?.selectedSunglassBanner;
export default sunglassBannerSlice.reducer;
