import { configureStore } from "@reduxjs/toolkit";
import AppointmentSlice from "./reducers/AppointmentSlice";
import AuthenticationReducer from "./reducers/AuthenticationSlice";
import ContactUsSlice from "./reducers/ContactUsSlice";
import ServiceProviderReducer from "./reducers/ServiceProviderSlice";

const store = configureStore({
  reducer: {
    "authentication": AuthenticationReducer,
    "appointment": AppointmentSlice,
    "contactus": ContactUsSlice,
    "serviceProvider": ServiceProviderReducer,
  },
});

export default store;
