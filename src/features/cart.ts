// Cart feature.  Creates the reducer and actions for cart related features

import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { Product } from "../interfaces/product";
import { RootState } from "../store";

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<Product>) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Export the reducer for use in the store, and the generated action creators.
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// Export memoized selectors to access cart data
export const selectCartTotal = createSelector(
  (state: RootState) => state.cart.items,
  (items) => items.reduce((accum, item) => accum + item.price, 0)
);

// Export selectors
export const selectCartItems = (state: RootState) => state.cart.items;
