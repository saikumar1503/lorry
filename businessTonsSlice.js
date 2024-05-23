import { createSlice } from "@reduxjs/toolkit";

const businessTonsSlice = createSlice({
  name: "businessTons",
  initialState: {
    details: {
      weightTons: null,
      businessMaterials: [],
      truck: null,
      businessDate: null,
    },
  },
  reducers: {
    addWeightTons: (state, action) => {
      state.details.weightTons = action.payload;
    },
    addBusinessMaterials: (state, action) => {
      state.details.businessMaterials = action.payload;
    },
    addTruck: (state, action) => {
      state.details.truck = action.payload;
    },
    addbusinessDate: (state, action) => {
      state.details.businessDate = action.payload;
    },
  },
});

export const {
  addBusinessMaterials,
  addTruck,
  addWeightTons,
  addbusinessDate,
} = businessTonsSlice.actions;
export default businessTonsSlice.reducer;
