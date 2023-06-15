import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/slices/productSlice";
import authReducer from '../redux/slices/auth/authSlice'
import goalReducer from '../redux/slices/goals/goalSlice'
import bookReducer from "./slices/bookings/bookingSlice";

const store = configureStore({
  reducer: {
    product: productsReducer,
    auth: authReducer,
    goals: goalReducer,
    book: bookReducer
  },
});

export default store;
