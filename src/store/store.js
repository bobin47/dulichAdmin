import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import courseSlice from "./features/CourseSlice/CourseSlice";
import UserSlice from "./features/UserSlice/UserSlice";
import tourSlice from './features/tour/tourSlice';
import dataFooterSlice from './features/DataFooter/dataFooter';
import dataHeaderSlice from './features/DataHeader/dataHeader';


export const store = configureStore({
  reducer: {
    auth: authSlice,
    course: courseSlice,
    user: UserSlice,
    tour: tourSlice,
    dataFooter: dataFooterSlice,
    dataHeader:  dataHeaderSlice,
  },
});
