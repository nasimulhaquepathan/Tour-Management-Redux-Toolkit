import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "./api";

const initialState = {
  items: [],
  loading: false,
  error: null,
  loginStatus: null,
};

// read action
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/tours`);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// create action
export const productsCreate = createAsyncThunk(
  "products/productsCreate",
  async (values) => {
    try {
      const response = await axios.post(`${url}/tours/create`, values);

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

// update action
export const productsUpdate = createAsyncThunk(
  "products/productsUpdate",
  async (data) => {
    try {
      const response = await axios.put(`${url}/tours/update/${data.id}`, data);

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

// delete action
export const productsDelete = createAsyncThunk(
  "products/productsDelete",
  async (id) => {
    try {
      const response = await axios.delete(`${url}/tours/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.loading = true;
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    [productsFetch.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [productsCreate.pending]: (state, action) => {
      state.loading = true;
    },
    [productsCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
      toast.success("Product Created!");
    },
    [productsCreate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [productsUpdate.pending]: (state, action) => {
      state.loading = true;
    },
    [productsUpdate.fulfilled]: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.loading = false;
      toast.success("Product Updated!");
    },
    [productsUpdate.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [productsDelete.pending]: (state, action) => {
      state.loading = true;
    },
    [productsDelete.fulfilled]: (state, action) => {
      const { id } = action.payload;
      if (id) {
        state.items = state.items.filter((e) => e.id !== id);
      }

      state.loading = false;
      toast.success("Product Deleted!");
    },
    [productsDelete.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
