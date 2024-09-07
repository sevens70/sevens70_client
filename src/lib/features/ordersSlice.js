// import { Alert } from "@material-tailwind/react";
import { createSlice } from "@reduxjs/toolkit";

const orderslice = createSlice({
  name: "orders",
  initialState: {
    items: [],
    totalCount: 0,
  },

  reducers: {
    clearOrdersList: (state, action) => {
      state.items = [];
    },

    addToOrders: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        state.items = state.items.filter(
          (item) =>
            item.id !== newItem.id &&
            item.categories.some((cat) => newItem.categories.includes(cat))
        );
      } else {
        state.items.push(...newItem);
      }
    },
  },
});

export const { clearOrdersList, addToOrders } = orderslice.actions;

export const getOrders = (state) => state.orders?.items;

export default orderslice.reducer;
