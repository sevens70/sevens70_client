import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchProductsByFilters,
  fetchBrands,
  fetchCategories,
  fetchProductById,
} from "./productAPI";
const initialState = {
  products: [],
  categories: [],
  // fetchedCategoriesData: [],
  brands: [],
  status: "idle",
  totalItems: 0,
  selectedProduct: null,
};

export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchAllProductByAsinc = createAsyncThunk(
  "product/allProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);
export const fetchCategoriesAsync = createAsyncThunk(
  "product/categories",
  async () => {
    try {
      const response = await fetchCategories();
      return response.data;
    } catch (error) {
      console.error("API error:", error);
      throw error;
    }
  }
);
export const fetchProductsByFiltersAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async ({ selectedFilterQueries, sort, pagination, admin }) => {
    const response = await fetchProductsByFilters(
      selectedFilterQueries,
      sort,
      pagination,
      admin
    );
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchBrandsAsync = createAsyncThunk(
  "product/fetchBrands",
  async () => {
    const response = await fetchBrands();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      // .addCase(fetchProductsByFiltersAsync.rejected, (state, action) => {
      //   state.status = "failed";
      // })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = "success";
        // console.log("allCatgories 01 02", action.payload);
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.status = "failed";
      })

      // .addCase(createSubCategoriesAsync.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(createSubCategoriesAsync.fulfilled, (state, action) => {
      //   state.status = "idle";
      //   state.categories = action.payload;
      // })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchAllProductByAsinc.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductByAsinc.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload.products;
      })
      .addCase(fetchAllProductByAsinc.rejected, (state, action) => {
        state.status = "failed";
        console.error("error", action.error);
      });
    // .addCase(createProductAsync.pending, (state) => {
    //   state.status = "loading";
    // })
    // .addCase(createProductAsync.fulfilled, (state, action) => {
    //   state.status = "idle";
    //   state.products.push(action.payload);
    // })
    // .addCase(updateProductAsync.pending, (state) => {
    //   state.status = "loading";
    // })
    // .addCase(updateProductAsync.fulfilled, (state, action) => {
    //   state.status = "idle";
    //   const index = state.products.findIndex(
    //     (product) => product.id === action.payload.id
    //   );
    //   state.products[index] = action.payload;
    //   state.selectedProduct = action.payload;
    // });
  },
});

export const { clearSelectedProduct } = productSlice.actions;

export const selectAllProducts = (state) => state.product?.products;
export const selectAllCategories = (state) => state.product?.categories;
export const allBrand = (state) => state.product?.brands;
export const selectProductById = (state) => state.product?.selectedProduct;
export const selectProductListStatus = (state) => state.product?.status;

export const selectTotalItems = (state) => state.product?.totalItems;

export default productSlice.reducer;
