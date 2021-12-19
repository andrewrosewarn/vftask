import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart";
import galleryReducer from "./features/productGallery";
import { productApi } from "./services/products";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productGallery: galleryReducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
