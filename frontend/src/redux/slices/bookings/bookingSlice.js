import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../api";

const initialState = {
  book: [],
  error: null
};

// create action
export const bookingsCreate = createAsyncThunk(
  "books/bookingsCreate",
  async (values) => {
    try {
      const response = await axios.post(`${url}/booking`, values);

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

const bookingSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [bookingsCreate.pending]: (state, action) => {
      state.loading = true;
    },
    [bookingsCreate.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      toast.success("Product Created!");
    },
    [bookingsCreate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export default bookingSlice.reducer;
