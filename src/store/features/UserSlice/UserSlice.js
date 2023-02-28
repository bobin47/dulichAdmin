import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { infoUserApi, allUserApi, deleteUserApi } from "../../../api/user";
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
    });
    builder.addCase(allUserAction.pending, (state, action) => {});
    builder.addCase(allUserAction.rejected, (state, action) => {});

    builder.addCase(deleteUserAction.fulfilled, (state, action) => {});
    builder.addCase(deleteUserAction.pending, (state, action) => {});
    builder.addCase(deleteUserAction.rejected, (state, action) => {
      console.log(action.error);
      if (action.error.message === "Request failed with status code 500") {
        toast.error("Tài khoản này đã đăng ký khoá học nên không được xoá");
      }
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
