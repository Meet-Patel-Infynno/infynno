import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Router from "next/router";
import interceptor from "../../util/axiosInterceptor";
import { getRefreshToken, getUserToken, setUserToken } from "../../util/user";
import toast from "react-hot-toast";

export const resetPassword = createAsyncThunk(
  "auth/password_reset",
  async (data, { rejectWithValue }) => {
    try {
      const url = data?.key
        ? "user/reset-password/" + data.key + "/"
        : "user/reset-password/";
      const res = await interceptor.post(url, data?.key ? data.data : data);
      return JSON.stringify({
        ...res,
        isEmailRequest: data?.key ? false : true,
      });
    } catch (er) {
      if (!er.response) {
        throw rejectWithValue(er);
      }
      throw rejectWithValue(er.response.data.non_field_errors);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.post("user/register/", data);
      return JSON.stringify(res);
    } catch (er) {
      if (!er.response) {
        throw rejectWithValue(er);
      }
      throw rejectWithValue(er.response.data);
    }
  }
);

export const authenticateUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.post("user/login/", data);
      return JSON.stringify(res);
    } catch (er) {
      if (!er.response) {
        throw er.message;
      }
      throw rejectWithValue(er.response.data);
    }
  }
);

const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    user_data: {
      isLoading: false,
      form: {
        error: "",
      },
      user: {
        access: getUserToken(),
        refresh: getRefreshToken(),
      },
    },
  },
  reducers: {
    removerUser: (state) => {
      state.user_data.user = {
        access: false,
        refresh: false,
      };
    },
  },
  extraReducers: {
    [authenticateUser.pending]: (state) => {
      state.user_data.isLoading = true;
    },
    [authenticateUser.fulfilled]: (state, { payload }) => {
      payload = JSON.parse(payload);
      state.user_data.isLoading = false;
      if (payload.data.status === 200) {
        state.user_data.user.access = payload.data.access;
        state.user_data.user.refresh = payload.data.refresh;
        setUserToken(payload.data.access, payload.data.refresh);
        toast.success(payload.data.message);
        Router.replace("/");
      } else {
        toast.error(payload.data.message);
      }
    },
    [authenticateUser.rejected]: (state, { payload }) => {
      state.user_data.isLoading = false;
      toast.error(payload);
    },
    [registerUser.pending]: (state) => {
      state.user_data.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      payload = JSON.parse(payload);
      state.user_data.isLoading = false;
      if (payload.data.status === 201) {
        Router.replace("/auth/login");
        toast.success(payload.data.message);
      } else {
        toast.error(payload.data.message);
      }
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.user_data.isLoading = false;
      toast.error(payload);
    },
    [resetPassword.pending]: (state) => {
      state.user_data.isLoading = true;
    },
    [resetPassword.fulfilled]: (state, { payload }) => {
      payload = JSON.parse(payload);
      state.user_data.isLoading = false;
      state.user_data.form.error = "";
      if (payload.data.status === 200) {
        if (!payload.isEmailRequest) {
          Router.push("/");
        }
        toast.success(payload.data.message);
      } else {
        toast.error(payload);
      }
    },
    [resetPassword.rejected]: (state, { payload }) => {
      state.user_data.isLoading = false;
      toast.error(payload);
      state.user_data.form.error = payload;
    },
  },
});

export const { removerUser } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
