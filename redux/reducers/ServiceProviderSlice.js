import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import interceptor from "../../util/axiosInterceptor";

export const fetchProfile = createAsyncThunk(
  "provider/getServices",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.get("user/register-beautician/", data);
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw er.message;
      }
      throw rejectWithValue(er.response.data);
    }
  }
);

export const fetchServices = createAsyncThunk(
  "provider/getServices",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.get("user/all-servicedetail/", data);
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw er.message;
      }
      throw rejectWithValue(er.response.data);
    }
  }
);

export const setProviderServices = createAsyncThunk(
  "provider/setServices",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await interceptor.post("barber-services/", data);
      dispatch(fetchProviderServices());
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw er.message;
      }
      throw rejectWithValue(er.response.data);
    }
  }
);

export const setProviderAvailability = createAsyncThunk(
  "provider/setAvailability",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await interceptor.post("barber-availabilities/", data);
      dispatch(fetchProviderServices());
      dispatch(getProviderAvailability());
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw er.message;
      }
      throw rejectWithValue(er.response.data);
    }
  }
);
export const getProviderAvailability = createAsyncThunk(
  "provider/getAvailability",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await interceptor.get("barber-availabilities/", data);
      // dispatch(fetchProviderServices());
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw er.message;
      }
      throw rejectWithValue(er.response.data);
    }
  }
);

export const addProviderServices = createAsyncThunk(
  "provider/addServices",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await interceptor.put("barber-services/", data);
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw er.message;
      }
      throw rejectWithValue(er.response.data);
    }
  }
);

export const fetchProviderServices = createAsyncThunk(
  "provider/getProviderServices",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.get(
        `barber-services/?beautician_id=${data.id}`,
        data
      );
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw er.message;
      }
      throw rejectWithValue(er.response.data);
    }
  }
);

export const addProviderPhoto = createAsyncThunk(
  "provider/addPhoto",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await interceptor.post("user/beautician-photo/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(fetchProviderPhoto());
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw er.message;
      }
      throw rejectWithValue(er.response.data);
    }
  }
);

export const fetchProviderPhoto = createAsyncThunk(
  "provider/getPhoto",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.get("user/beautician-photo/", data);
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw er.message;
      }
      throw rejectWithValue(er.response.data);
    }
  }
);

export const deleteProviderPhoto = createAsyncThunk(
  "provider/deletePhoto",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await interceptor.delete(
        "user/beautician-photo/?id=" + data,
        data
      );
      dispatch(fetchProviderPhoto());
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw er.message;
      }
      throw rejectWithValue(er.response.data);
    }
  }
);

export const fetchBarberDetails = createAsyncThunk(
  "beautician/detail",
  async (data, { rejectWithValue }) => {
    try {
      const res = await interceptor.get(
        "user/beautician/details/?beautician_id=" + data,
        data
      );
      return res.data;
    } catch (er) {
      if (!er.response) {
        throw er.message;
      }
      throw rejectWithValue(er.response.data);
    }
  }
);

const ServiceProviderSlice = createSlice({
  name: "serviceProvider",
  initialState: {
    ServiceProviderData: {
      isLoading: false,
      allServices: [],
      providerData: {},
      barberDetail: null,
      availibility: [],
    },
  },
  reducers: {
    resetProvider: (state) => {
      state.ServiceProviderData = {
        isLoading: false,
        allServices: [],
        providerData: {},
        barberDetail: null,
      };
    },
  },
  extraReducers: {
    [fetchServices.pending]: (state) => {
      state.ServiceProviderData.isLoading = true;
    },
    [fetchServices.fulfilled]: (state, { payload }) => {
      state.ServiceProviderData.isLoading = false;
      state.ServiceProviderData.allServices = payload.service;
    },
    [fetchServices.rejected]: (state) => {
      state.ServiceProviderData.isLoading = false;
    },
    [setProviderServices.pending]: (state) => {
      state.ServiceProviderData.isLoading = true;
    },
    [setProviderServices.fulfilled]: (state, { payload }) => {
      state.ServiceProviderData.isLoading = false;
      toast.success(payload.message);
      state.ServiceProviderData.providerData.services =
        payload?.data?.services_id;
    },
    [setProviderServices.rejected]: (state) => {
      state.ServiceProviderData.isLoading = false;
    },
    [getProviderAvailability.pending]: (state) => {
      state.ServiceProviderData.isLoading = true;
    },
    [getProviderAvailability.fulfilled]: (state, { payload }) => {
      state.ServiceProviderData.isLoading = false;
      state.ServiceProviderData.availibility = payload.data;
    },
    [getProviderAvailability.rejected]: (state) => {
      state.ServiceProviderData.isLoading = false;
    },
    [addProviderPhoto.pending]: (state) => {
      state.ServiceProviderData.isLoading = true;
    },
    [addProviderPhoto.fulfilled]: (state, { payload }) => {
      state.ServiceProviderData.isLoading = false;
      toast.success(payload.message);
    },
    [addProviderPhoto.rejected]: (state) => {
      state.ServiceProviderData.isLoading = false;
    },
    [fetchProviderPhoto.pending]: (state) => {
      state.ServiceProviderData.isLoading = true;
    },
    [fetchProviderPhoto.fulfilled]: (state, { payload }) => {
      state.ServiceProviderData.isLoading = false;
      state.ServiceProviderData.providerData.images = payload.data;
    },
    [fetchProviderPhoto.rejected]: (state) => {
      state.ServiceProviderData.isLoading = false;
    },
    [deleteProviderPhoto.pending]: (state) => {
      state.ServiceProviderData.isLoading = true;
    },
    [deleteProviderPhoto.fulfilled]: (state, { payload }) => {
      state.ServiceProviderData.isLoading = false;
      toast.success(payload.message);
    },
    [deleteProviderPhoto.rejected]: (state) => {
      state.ServiceProviderData.isLoading = false;
    },
    [fetchProviderServices.pending]: (state) => {
      state.ServiceProviderData.isLoading = true;
    },
    [fetchProviderServices.fulfilled]: (state, { payload }) => {
      state.ServiceProviderData.isLoading = false;
      state.ServiceProviderData.providerData.services =
        payload?.data[0].services_id || [];
    },
    [fetchProviderServices.rejected]: (state) => {
      state.ServiceProviderData.isLoading = false;
    },
    [addProviderServices.pending]: (state) => {
      state.ServiceProviderData.isLoading = true;
    },
    [addProviderServices.fulfilled]: (state, { payload }) => {
      state.ServiceProviderData.isLoading = false;
      toast.success(payload.message);
      fetchProviderServices();
      state.ServiceProviderData.providerData.services =
        payload?.data?.services_id;
    },
    [addProviderServices.rejected]: (state) => {
      state.ServiceProviderData.isLoading = false;
    },
    [setProviderAvailability.pending]: (state) => {
      state.ServiceProviderData.isLoading = true;
    },
    [setProviderAvailability.fulfilled]: (state, { payload }) => {
      state.ServiceProviderData.isLoading = false;
      toast.success(payload.message);
      state.ServiceProviderData.providerData.services =
        payload?.data?.services_id;
    },
    [setProviderAvailability.rejected]: (state) => {
      state.ServiceProviderData.isLoading = false;
    },

    [fetchBarberDetails.pending]: (state) => {
      state.ServiceProviderData.isLoading = true;
    },
    [fetchBarberDetails.fulfilled]: (state, { payload }) => {
      state.ServiceProviderData.isLoading = false;
      state.barberDetail = payload;
    },
    [fetchBarberDetails.rejected]: (state) => {
      state.ServiceProviderData.isLoading = false;
    },
    [fetchProfile.pending]: (state) => {
      state.ServiceProviderData.isLoading = true;
    },
    [fetchProfile.fulfilled]: (state, { payload }) => {
      state.ServiceProviderData.isLoading = false;
      state.ServiceProviderData.providerData.profile = payload?.data;
    },
    [fetchProfile.rejected]: (state) => {
      state.ServiceProviderData.isLoading = false;
    },
  },
});

export const { resetProvider } = ServiceProviderSlice.actions;

export default ServiceProviderSlice.reducer;
