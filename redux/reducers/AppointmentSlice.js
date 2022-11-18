import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import interceptor from "../../util/axiosInterceptor";
import { getUserToken, getRefreshToken, setUserToken } from "../../util/user";

const initialState = {
  isLoading: false,
  authToken: getUserToken(),
  authRefToken: getRefreshToken(),
  status: "",
  allServices: null,
  beauticians: null,
  confirm: false,
  confirmServices: null,
  appointments: [],
};

export const bookAppointment = createAsyncThunk(
  "bookAppointment",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.post("/appointment/", data);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const viewAppointment = createAsyncThunk(
  "viewAppointment",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.get(
        `/appointment/${data ? `?status=${data}` : ""}`,
        data
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteAppointment = createAsyncThunk(
  "deleteAppointment",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await interceptor.delete(`/appointment/?id=${data}`, data);
      dispatch(viewAppointment());
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateAppointment = createAsyncThunk(
  "updateAppointment",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await interceptor.patch(
        `/appointment/?id=${data.id}`,
        data.data
      );
      dispatch(viewAppointment());
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const services = createAsyncThunk(
  "Services",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.get("user/all-servicedetail/", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const beauticians = createAsyncThunk(
  "Beauticians",
  async (data, { rejectWithValue }) => {
    const id = data
      .map((dat) => {
        return `id=${dat}`;
      })
      .join("&");
    try {
      const res = await interceptor.get("user/service/beautician/?" + id, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const AppointmentSlice = createSlice({
  name: "Appointment",
  initialState: initialState,
  reducers: {
    setConfirmServices: (state, { payload }) => {
      state.confirmServices = payload;
    },
    reset: () => initialState,
  },
  extraReducers: {
    [bookAppointment.pending]: (state) => {
      state.isLoading = true;
    },
    [bookAppointment.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.confirm = true;
      toast.success(payload.data.message);
      state.status = payload.data.status;
    },
    [bookAppointment.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },

    [viewAppointment.pending]: (state) => {
      state.isLoading = true;
    },
    [viewAppointment.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.appointments = payload.data;
      state.status = payload.data.status;
    },
    [viewAppointment.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [updateAppointment.pending]: (state) => {
      state.isLoading = true;
    },
    [updateAppointment.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
    },
    [updateAppointment.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [deleteAppointment.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteAppointment.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
    },
    [deleteAppointment.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },

    [services.pending]: (state) => {
      state.isLoading = true;
    },
    [services.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allServices = action.payload.service;
    },
    [services.rejected]: (state) => {
      state.isLoading = false;
    },

    [beauticians.pending]: (state) => {
      state.isLoading = true;
    },
    [beauticians.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload.status === 200) {
        state.beauticians = payload.profile;
      }
    },
    [beauticians.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const { setConfirmServices, reset } = AppointmentSlice.actions;

export default AppointmentSlice.reducer;
