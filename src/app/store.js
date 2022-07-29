import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import HomeSlice from '../features/Pages/HomeSlice';
import ScoreBoardSlice from '../features/Pages/ScoreBoardSlice';

export const store = configureStore({
  reducer: {
    HomeSlice:HomeSlice,
    ScoreBoardSlice:ScoreBoardSlice,
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware({
    serializableCheck:false,
  })
});
