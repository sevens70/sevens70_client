import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalCount: 0,
  },

  reducers: {
    getCartTotal: (state, action) => {
      let { totalAmount, totalCount } = state.items?.reduce(
        (cartTotal, cartItem) => {
          const { disc_price, amount } = cartItem;
          const itemTotal = disc_price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increase: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    getCartItems: (state) => {
      state.items = data;
    },

    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.amount += newItem.amount || 1;
      } else {
        state.items.push({ ...newItem, amount: newItem.amount || 1 });
      }
    },
  },
});

export const {
  getCartTotal,
  remove,
  increase,
  decrease,
  clearCart,
  getCartItems,
  addToCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.items;

export default cartSlice.reducer;
