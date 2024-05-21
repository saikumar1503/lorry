import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "./DetailsSlice";
import houseFareReducer from "./houseFareSlice";
import moversReducer from "./moversSlice";
export const appStore = configureStore({
  reducer: {
    details: detailsReducer,
    houseFare: houseFareReducer,
    movers: moversReducer,
  },
});
