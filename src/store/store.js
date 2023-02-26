import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import courseSlice from "./features/CourseSlice/CourseSlice";
export const store = configureStore({
  reducer: {
    user: authSlice,
    course: courseSlice,
  },
});
