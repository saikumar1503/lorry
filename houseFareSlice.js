import { createSlice } from "@reduxjs/toolkit";

const houseFareSlice = createSlice({
  name: "houseFare",
  initialState: {
    houseFare: {
      weight: null,
      material: null,
      date: null,
      price: null,
    },
  },
  reducers: {
    addWeight: (state, action) => {
      state.houseFare.weight = action.payload;
    },
    addMaterial: (state, action) => {
      state.houseFare.material = action.payload;
    },
    addDate: (state, action) => {
      state.houseFare.date = action.payload;
    },
    addPrice: (state, action) => {
      state.houseFare.price = action.payload;
    },
  },
});

export default houseFareSlice.reducer;
export const { addDate, addMaterial, addWeight, addPrice } =
  houseFareSlice.actions;
