import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
  name: "details",
  initialState: {
    details: {
      pickUpLocation: null,
      dropLocation: null,
    },
  },
  reducers: {
    addPickUpLocation: (state, action) => {
      state.details.pickUpLocation = action.payload;
    },
    addDropLocation: (state, action) => {
      state.details.dropLocation = action.payload;
    },
  },
});

export const { addPickUpLocation, addDropLocation } = detailsSlice.actions;
export default detailsSlice.reducer;
