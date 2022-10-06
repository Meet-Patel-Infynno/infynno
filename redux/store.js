import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./reducers/AuthenticationSlice";

const store = configureStore({
  reducer: {
    "authentication": AuthenticationReducer,
  },
});

export default store;
