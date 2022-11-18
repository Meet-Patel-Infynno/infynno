import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Router from "next/router";
import interceptor from "../../util/axiosInterceptor";
import {
  getRefreshToken,
  getUserToken,
  setUserToken,
  getUserData,
  setUserData,
  getBeauticianData,
  setBeauticianData,
  removeUserToken,
} from "../../util/user";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import cookie from "js-cookie";

const { NEXT_PUBLIC_COOKIE_TIME } = process.env;
export const resetPassword = createAsyncThunk(
  "auth/password_reset",
  async (data, { rejectWithValue }) => {
    try {
      const url = data?.key
        ? "user/reset-password/" + data.key + "/"
        : "user/reset-password/";
      const res = await interceptor.post(url, data?.key ? data.data : data);

      return {
        ...res.data,
        isEmailRequest: data?.key ? false : true,
      };
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
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw rejectWithValue(er);
      }
      throw rejectWithValue(er.response.data.email);
    }
  }
);

export const registerBarber = createAsyncThunk(
  "auth/barber/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.post("/user/register-beautician/", data, {
        headers: {
          "Content-Type": "multipart-formdata",
          "Authorization": `Bearer ${Cookies.get("access")}`,
        },
      });
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw rejectWithValue(er);
      }
      throw rejectWithValue(er.response.data.email);
    }
  }
);
export const fetchUserProfile = createAsyncThunk(
  "user/getProfile",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.get("user/profile/", {
        headers: {
          "Authorization": `Bearer ${data}`,
        },
      });
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw rejectWithValue(er);
      }
      throw rejectWithValue(er.response.data.email);
    }
  }
);

export const fetchBeauticianProfile = createAsyncThunk(
  "beautician/getProfile",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.get("user/register-beautician/", {
        headers: {
          "Authorization": `Bearer ${data}`,
        },
      });
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw rejectWithValue(er);
      }
      throw rejectWithValue(er.response.data.email);
    }
  }
);

export const authenticateUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await interceptor.post("user/login/", data);
      if (res.data.status === 200) {
        dispatch(fetchUserProfile(res.data.access));
        res.data.Beautician &&
          dispatch(fetchBeauticianProfile(res.data.access));
      }
      return res.data;
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
    userData: {
      isLoading: false,
      form: {
        error: null,
      },
      user: {
        ...getUserData(),
        access: getUserToken(),
        refresh: getRefreshToken(),
      },
      beautician: getBeauticianData(),
    },
  },
  reducers: {
    removeUser: (state) => {
      state.userData.user.access = false;
      state.userData.user.refresh = false;
      state.userData.beautician = null;
    },
  },
  extraReducers: {
    [authenticateUser.pending]: (state) => {
      state.userData.isLoading = true;
    },
    [authenticateUser.fulfilled]: (state, { payload }) => {
      state.userData.isLoading = false;
      if (payload.status === 200) {
        state.userData.user.access = payload.access;
        state.userData.user.refresh = payload.refresh;
        setUserToken(payload.access, payload.refresh);
        Cookies.set("access", payload.access, {
          expires: Number(NEXT_PUBLIC_COOKIE_TIME),
        });
        Cookies.set("refresh", payload.refresh, {
          expires: Number(NEXT_PUBLIC_COOKIE_TIME),
        });
        Cookies.set("Beautician", payload.Beautician, {
          expires: Number(NEXT_PUBLIC_COOKIE_TIME),
        });
        toast.success(payload.message);
        payload.Beautician
          ? Router.replace("/barber/dashboard")
          : Router.replace("/user/dashboard");
      } else {
        toast.error(payload.message);
      }
    },
    [authenticateUser.rejected]: (state, { payload }) => {
      state.userData.isLoading = false;
      toast.error(payload);
    },
    [registerUser.pending]: (state) => {
      state.userData.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.userData.isLoading = false;
      if (payload.status === 201) {
        Router.replace("/auth/user/login");
        toast.success(payload.message);
      } else {
        toast.error(payload.message);
      }
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.userData.isLoading = false;
      toast.error(payload);
    },
    [registerBarber.pending]: (state) => {
      state.userData.isLoading = true;
    },
    [registerBarber.fulfilled]: (state, { payload }) => {
      state.userData.isLoading = false;
      if (payload.status === 201) {
        // Cookies.set("Beautician", true, { expires: 7 });
        removeUserToken();
        Router.push("/auth/user/login");
        toast.success(payload.message);
      } else {
        toast.error(payload.message);
      }
    },
    [registerBarber.rejected]: (state, { payload }) => {
      state.userData.isLoading = false;
      toast.error(payload);
    },
    [resetPassword.pending]: (state) => {
      state.userData.isLoading = true;
    },
    [resetPassword.fulfilled]: (state, { payload }) => {
      state.userData.isLoading = false;
      state.userData.form.error = false;
      if (payload.status === 200) {
        if (!payload.isEmailRequest) {
          Router.push("/user/login");
        }
        toast.success(payload.message);
      } else {
        toast.error(payload);
        state.userData.form.error = true;
      }
    },
    [resetPassword.rejected]: (state, { payload }) => {
      state.userData.isLoading = false;
      toast.error(payload);
      state.userData.form.error = payload;
    },
    [fetchUserProfile.pending]: (state) => {
      state.userData.isLoading = true;
    },
    [fetchUserProfile.fulfilled]: (state, { payload }) => {
      state.userData.isLoading = false;
      state.userData.user = { ...state.userData?.user, ...payload?.data };
      setUserData({ ...state.userData?.user, ...payload?.data });
    },
    [fetchUserProfile.rejected]: (state) => {
      state.userData.isLoading = false;
    },
    [fetchBeauticianProfile.pending]: (state) => {
      state.userData.isLoading = true;
    },
    [fetchBeauticianProfile.fulfilled]: (state, { payload }) => {
      state.userData.isLoading = false;
      setBeauticianData({ ...state.userData?.beautician, ...payload?.data[0] });
      state.userData.beautician = {
        ...state.userData?.beautician,
        ...payload.data[0],
      };
    },
    [fetchBeauticianProfile.rejected]: (state) => {
      state.userData.isLoading = false;
    },
  },
});

export const { removeUser } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
