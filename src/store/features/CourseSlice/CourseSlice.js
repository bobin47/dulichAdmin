import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";

import {
  AllCourseApi,
  CategoryCourse,
  DetailCourseApi,
  RegisterCourseApi,
  addCourseApi,
  imgCourseApi,
  deleteCourseApi,
  updateCourseApi,
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

export const imgCourseAction = createAsyncThunk(
  "course/imgCourseAction",
  async (data, thunkAPI) => {
    console.log(data);
    const response = await imgCourseApi(data);
    return response.data;
  }
);

export const deleteCourseAction = createAsyncThunk(
  "course/deleteCourseAction",
  async (data, thunkAPI) => {
    console.log(data);
    const response = await deleteCourseApi(data);
    return response.data;
  }
);

export const updateCourseAction = createAsyncThunk(
  "course/updateCourseAction",
  async (data, thunkAPI) => {
    console.log(data);
    const response = await updateCourseApi(data);
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

    builder.addCase(imgCourseAction.fulfilled, (state, action) => {
      console.log(action);
      // state.detail = action.payload;
      // return { ...state };
    });
    builder.addCase(imgCourseAction.pending, (state, action) => {});
    builder.addCase(imgCourseAction.rejected, (state, action) => {
      console.log(action);
    });

    builder.addCase(deleteCourseAction.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload === "Xóa thành công") {
        toast.success(action.payload);
      }
      // state.detail = action.payload;
      // return { ...state };
    });
    builder.addCase(deleteCourseAction.pending, (state, action) => {});
    builder.addCase(deleteCourseAction.rejected, (state, action) => {
      if (action.error.code === "ERR_BAD_RESPONSE") {
        toast.warn("co hoc vien dang ky khoa hoc");
      }
    });

    builder.addCase(updateCourseAction.fulfilled, (state, action) => {
      console.log(action);
      if (action.meta.requestStatus === "fulfilled") {
        toast.success("Update khoa hoc thanh cong");
      }
      // state.detail = action.payload;
      // return { ...state };
    });
    builder.addCase(updateCourseAction.pending, (state, action) => {});
    builder.addCase(updateCourseAction.rejected, (state, action) => {
      if (action.error.code === "ERR_BAD_RESPONSE") {
        toast.error("update khong thanh cong");
      }
    });
  },
});

export const { logout } = courseSlice.actions;
export default courseSlice.reducer;
