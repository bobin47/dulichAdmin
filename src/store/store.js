import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import courseSlice from "./features/CourseSlice/CourseSlice";
import UserSlice from "./features/UserSlice/UserSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    course: courseSlice,
    user: UserSlice,
  },
});
