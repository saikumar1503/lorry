import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    bookingDetails: [],
  },
  reducers: {
    addBookings: (state, action) => {
      state.bookingDetails.push(action.payload);
    },
    updateBookings: (state, action) => {
      state.bookingDetails = action.payload;
    },
  },
});

export const { addBookings, updateBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer;
