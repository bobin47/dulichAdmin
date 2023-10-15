import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import tourSlice from './features/tour/tourSlice';
import dataFooterSlice from './features/DataFooter/dataFooter';
import dataHeaderSlice from './features/DataHeader/dataHeader';
import aboutSlice from './features/about/aboutSlice'


export const store = configureStore({
  reducer: {
    auth: authSlice,
    tour: tourSlice,
    dataFooter: dataFooterSlice,
    dataHeader:  dataHeaderSlice,
    about: aboutSlice
  },
});
