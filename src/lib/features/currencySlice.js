import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "currency",
  initialState: { currency: null },
  reducers: {
    addToCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});
export const { addToCurrency } = currencySlice.actions;
export const getCarrency = (state) => state.currency.currency;
export default currencySlice.reducer;
