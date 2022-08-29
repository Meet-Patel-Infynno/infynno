import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import homePageSlice from "./homePageSlice";

export const makeStore = ()=> configureStore({
    reducer:{
        homePageSlice:homePageSlice
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false,
    }),
    devTools:true
})

export const wrapper = createWrapper(makeStore)