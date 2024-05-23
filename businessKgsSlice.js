import { createSlice } from "@reduxjs/toolkit";

const businessKgSlice = createSlice({
  name: "businessKg",
  initialState: {
    details: {
      materials: [],
      date: null,
    },
  },
  reducers: {
    addBusinessKgWeight: (state, action) => {
      state.details.weight = action.payload;
    },
    addBusinessKgMaterials: (state, action) => {
      state.details.materials = action.payload;
    },
    addBusinessKgDate: (state, action) => {
      state.details.date = action.payload;
    },
  },
});

export const {
  addBusinessKgMaterials,
  addBusinessKgWeight,
  addBusinessKgDate,
} = businessKgSlice.actions;
export default businessKgSlice.reducer;
