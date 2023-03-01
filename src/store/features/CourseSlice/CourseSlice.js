import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";

import {
  AllCourseApi,
  CategoryCourse,
  DetailCourseApi,
  RegisterCourseApi,
  addCourseApi,
} from "../../../api/course";

const initialState = {
  isLoading: false,
  categoryCourse: [],
  Courses: [],
  detail: [],
};

// First, create the thunk
export const allCourseAction = createAsyncThunk(
  "course/allCourse",
  async (data, thunkAPI) => {
    const response = await AllCourseApi();
    return response.data;
  }
);

export const categoryCourseAction = createAsyncThunk(
  "course/categoryCourseAction",
  async (data, thunkAPI) => {
    const response = await CategoryCourse();
    return response.data;
  }
);

export const detailCourseAction = createAsyncThunk(
  "course/detailCourse",
  async (data, thunkAPI) => {
    const response = await DetailCourseApi(data);
    return response.data;
  }
);

export const registerCourseAction = createAsyncThunk(
  "course/registerCourseAction",
  async (data, thunkAPI) => {
    console.log(data);
    const response = await RegisterCourseApi(data);
    return response.data;
  }
);

export const addCourseAction = createAsyncThunk(
  "course/addCourseAction",
  async (data, thunkAPI) => {
    console.log(data);
    const response = await addCourseApi(data);
    return response.data;
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allCourseAction.fulfilled, (state, action) => {
      state.Courses = action.payload;
      state.isLoading = false;
    });
    builder.addCase(allCourseAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(allCourseAction.rejected, (state, action) => {});

    builder.addCase(categoryCourseAction.fulfilled, (state, action) => {
      state.categoryCourse = action.payload;
    });
    builder.addCase(categoryCourseAction.pending, (state, action) => {});
    builder.addCase(categoryCourseAction.rejected, (state, action) => {});

    builder.addCase(detailCourseAction.fulfilled, (state, action) => {
      console.log(action.payload);
      state.detail = action.payload;
    });
    builder.addCase(detailCourseAction.pending, (state, action) => {});
    builder.addCase(detailCourseAction.rejected, (state, action) => {});

    builder.addCase(registerCourseAction.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload === "Ghi danh thành công!") {
        toast.success(action.payload);
      }
    });
    builder.addCase(registerCourseAction.pending, (state, action) => {});
    builder.addCase(registerCourseAction.rejected, (state, action) => {
      console.log(action.error.code);
      if (action.error.code === "ERR_BAD_RESPONSE") {
        toast.warn("Bạn đã đăng ký khoá này rồi");
      }
    });

    builder.addCase(addCourseAction.fulfilled, (state, action) => {
      console.log(action.payload);
      // state.detail = action.payload;
      // return { ...state };
    });
    builder.addCase(addCourseAction.pending, (state, action) => {});
    builder.addCase(addCourseAction.rejected, (state, action) => {});
  },
});

export const { logout } = courseSlice.actions;
export default courseSlice.reducer;
