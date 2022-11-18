import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import interceptor from "../../util/axiosInterceptor";

const initialState = {
  isLoading: false,
  errors: null,
};

export const contactUs = createAsyncThunk(
  "contactUs",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.post("/user/contact-us/", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const ContactUsSlice = createSlice({
  name: "ContactUs",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [contactUs.pending]: (state) => {
      state.isLoading = true;
      state.errors = null;
    },
    [contactUs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
      state.errors = null;
    },
    [contactUs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.message);
      state.errors = payload.response.data;
    },
  },
});

export default ContactUsSlice.reducer;
