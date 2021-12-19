// Product gallery feature.  Creates the reducer and actions for gallery related features.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type FilterType = "titleA-Z" | "titleZ-A" | "highPrice" | "lowPrice";

interface GalleryState {
  filterType: FilterType;
}

const initialState: GalleryState = {
  filterType: "titleA-Z",
};

const productGallerySlice = createSlice({
  name: "productGallery",
  initialState: initialState,
  reducers: {
    setFilterType(state, action: PayloadAction<FilterType>) {
      state.filterType = action.payload;
    },
  },
});

// Export the reducer for use in the store, and the generated action creators.
export const { setFilterType } = productGallerySlice.actions;
export default productGallerySlice.reducer;

// Export selectors for data access
export const selectFilterType = (state: RootState) =>
  state.productGallery.filterType;
