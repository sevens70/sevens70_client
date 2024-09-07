import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currency: {
      label: "BDT",
      value: "BDT",
      symbol: "৳",
      flag: "/header/c2.png",
    },
  },
  reducers: {
    addToCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});
export const { addToCurrency } = currencySlice.actions;
export const getCarrency = (state) => state.currency.currency;
export default currencySlice.reducer;
