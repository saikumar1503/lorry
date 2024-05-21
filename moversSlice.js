import { createSlice } from "@reduxjs/toolkit";

const moversSlice = createSlice({
  name: "movers",
  initialState: {
    moversData: {
      houseType: null,
      totalWeight: null,
      pickupFloor: null,
      dropFloor: null,
      moversDate: null,
    },
  },
  reducers: {
    addHouseType: (state, action) => {
      state.moversData.houseType = action.payload;
    },
    addTotalWeight: (state, action) => {
      state.moversData.totalWeight = action.payload;
    },
    addPickupFloor: (state, action) => {
      state.moversData.pickupFloor = action.payload;
    },
    addDropFloor: (state, action) => {
      state.moversData.dropFloor = action.payload;
    },
    addMoversDate: (state, action) => {
      state.moversData.moversDate = action.payload;
    },
  },
});

export default moversSlice.reducer = moversSlice.reducer;
export const {
  addMoversDate,
  addDropFloor,
  addPickupFloor,
  addTotalWeight,
  addHouseType,
} = moversSlice.actions;
