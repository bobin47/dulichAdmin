import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  infoUserApi,
  allUserApi,
  deleteUserApi,
  addUserApi,
  updateUserApi,
} from "../../../api/user";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  informationUser: {},
  allUser: [],
};

export const infoUserAction = createAsyncThunk(
  "users/infoUserAction",
  async (data, thunkAPI) => {
    const response = await infoUserApi();
    return response.data;
  }
);

export const allUserAction = createAsyncThunk(
  "users/allUserAction",
  async (data, thunkAPI) => {
    const response = await allUserApi();
    return response.data;
  }
);

export const deleteUserAction = createAsyncThunk(
  "users/deleteUserAction",
  async (data, thunkAPI) => {
    console.log(data);
    const response = await deleteUserApi(data);
    console.log(response);
    return response.data;
  }
);

export const addUserAction = createAsyncThunk(
  "users/addUserAction",
  async (data, thunkAPI) => {
    const response = await addUserApi(data);
    console.log(response);
    return response.data;
  }
);

export const updateUserAction = createAsyncThunk(
  "users/updateUserAction",
  async (data, thunkAPI) => {
    const response = await updateUserApi(data);
    console.log(response);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(infoUserAction.fulfilled, (state, action) => {
      state.informationUser = action.payload;
    });
    builder.addCase(infoUserAction.pending, (state, action) => {});
    builder.addCase(infoUserAction.rejected, (state, action) => {});

    builder.addCase(allUserAction.fulfilled, (state, action) => {
      state.allUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(allUserAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(allUserAction.rejected, (state, action) => {});

    builder.addCase(deleteUserAction.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload === "Xóa thành công!") {
        toast.success("Xoá người dùng thành công");
      }
    });
    builder.addCase(deleteUserAction.pending, (state, action) => {});
    builder.addCase(deleteUserAction.rejected, (state, action) => {
      console.log(action.error);
      if (action.error.message === "Request failed with status code 500") {
        toast.error("Tài khoản này đã đăng ký khoá học nên không được xoá");
      }
    });

    builder.addCase(addUserAction.fulfilled, (state, action) => {
      console.log(action.meta.requestStatus);
      if (action.meta.requestStatus === "fulfilled") {
        toast.success("Thêm người dùng thành công");
      }
    });
    builder.addCase(addUserAction.pending, (state, action) => {});
    builder.addCase(addUserAction.rejected, (state, action) => {
      // console.log(action.error);
      // if (action.error.message === "Request failed with status code 500") {
      //   toast.error("Tài khoản này đã đăng ký khoá học nên không được xoá");
      // }
    });

    builder.addCase(updateUserAction.fulfilled, (state, action) => {
      console.log(action);
      if (action.meta.requestStatus === "fulfilled") {
        toast.success("Cập nhật người dùng thành công");
      }
    });
    builder.addCase(updateUserAction.pending, (state, action) => {});
    builder.addCase(updateUserAction.rejected, (state, action) => {
      // console.log(action.error);
      // if (action.error.message === "Request failed with status code 500") {
      //   toast.error("Tài khoản này đã đăng ký khoá học nên không được xoá");
      // }
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
