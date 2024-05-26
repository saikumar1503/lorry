import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "./DetailsSlice";
import houseFareReducer from "./houseFareSlice";
import moversReducer from "./moversSlice";
import businessTonsReducer from "./businessTonsSlice";
import businessKgsReducer from "./businessKgsSlice";
import bookingsReducer from "./bookingsSlice";
import userReducer from "./userslice";
export const appStore = configureStore({
  reducer: {
    details: detailsReducer,
    houseFare: houseFareReducer,
    movers: moversReducer,
    businessTons: businessTonsReducer,
    businessKgs: businessKgsReducer,
    bookings: bookingsReducer,
    user: userReducer,
  },
});
