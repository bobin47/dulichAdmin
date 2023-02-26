import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AllCourseApi, CategoryCourse } from "../../../api/course";

// First, create the thunk
export const allCourseAction = createAsyncThunk(
  "course/allCourse",
  async (data, thunkAPI) => {
    const response = await AllCourseApi();
    return response.data;
  }
);

export const categoryCourseAction = createAsyncThunk(
  "course/categoryCourse",
  async (data, thunkAPI) => {
    const response = await CategoryCourse();
    return response.data;
  }
);

const initialState = {
  isLoading: false,
  categoryCourse: [],
  Courses: [],
};

const courseSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allCourseAction.fulfilled, (state, action) => {
      state.Courses = action.payload;
    });
    builder.addCase(allCourseAction.pending, (state, action) => {});
    builder.addCase(allCourseAction.rejected, (state, action) => {});

    builder.addCase(categoryCourseAction.fulfilled, (state, action) => {
      state.categoryCourse = action.payload;
    });
    builder.addCase(categoryCourseAction.pending, (state, action) => {});
    builder.addCase(categoryCourseAction.rejected, (state, action) => {});
  },
});

export const { logout } = courseSlice.actions;
export default courseSlice.reducer;
