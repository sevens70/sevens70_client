import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createSunglassProduct,
  deleteSunglassProduct,
  fetchSunglassProudctById,
  updateSunglassProduct,
  fetchSunglassProduct,
} from "./sunglassProductAPI";

const initialState = {
  status: "idle",
  product: [],
  selectedSunglassProduct: null,
};

export const fetchSunglassProductAsync = createAsyncThunk(
  "sunglass/fetchSunglassProduct",
  async () => {
    const response = await fetchSunglassProduct();
    console.log("response 12", response);
    return response.data;
  },
);

export const deleteSunglassProductByIdAsync = createAsyncThunk(
  "sunglass/deleteSunglassProductById",
  async (id) => {
    const response = await deleteSunglassProduct(id);
    return response.data;
  },
);
export const createSunglassProductAsync = createAsyncThunk(
  "sunglass/createSunglassProduct",
  async (brand) => {
    const response = await createSunglassProduct(brand);
    return response.data;
  },
);
export const updateSunglassProductAsync = createAsyncThunk(
  "sunglass/updateSunglassProduct",
  async (update) => {
    const response = await updateSunglassProduct(update);
    return response.data;
  },
);

export const SunglassProductSlice = createSlice({
  name: "sunglass_product",
  initialState,
  reducers: {
    clearselectedSunglassProduct: (state) => {
      state.selectedSunglassProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSunglassProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSunglassProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.product = action.payload;
      })

      .addCase(deleteSunglassProductByIdAsync.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(deleteSunglassProductByIdAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.product = state.product.filter(
          (banner) => banner.id !== action.payload.id,
        );
        if (
          state.selectedSunglassProduct &&
          state.selectedSunglassProduct.id === action.payload.id
        ) {
          state.selectedSunglassProduct = null;
        }
      })
      .addCase(deleteSunglassProductByIdAsync.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(createSunglassProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createSunglassProductAsync.rejected, (state, action) => {
        state.status = "failed";
        console.error("error", action.error);
      })
      .addCase(createSunglassProductAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.product.push(action.payload);
      })
      .addCase(updateSunglassProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateSunglassProductAsync.fulfilled, (state, action) => {
        state.status = "success";
        const index = state.product.findIndex(
          (brand) => brand.id === action.payload.id,
        );
        state.product[index] = action.payload;
        state.selectedSunglassProduct = action.payload;
      });
  },
});
export const { clearselectedSunglassProduct } = SunglassProductSlice.actions;
export const allSunglassProduct = (state) => state.sunglassProduct?.product;
export const SunglassProductStatus = (state) => state.sunglassProduct?.status;
export const selectSunglassProductById = (state) =>
  state.sunglassProduct?.selectedSunglassProduct;
export default SunglassProductSlice.reducer;
