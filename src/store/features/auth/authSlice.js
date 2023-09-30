import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerApi, loginApi } from "../../../api/auth";
import { ToastContainer, toast } from "react-toastify";
import { getUserFormLC } from "../../../utils/utils";

// First, create the thunk
export const registerAccount = createAsyncThunk(
  "users/registerAccount",
  async (data, thunkAPI) => {
    const response = await registerApi(data);
    return response.data;
  }
);

export const loginAccount = createAsyncThunk(
  "user/loginAccount",
  async (data, thunkAPI) => {
    const response = await loginApi(data);
    return response.data;
  }
);

const initialState = {
  isAuthenticated: null,
  messError: null,
  isLoading: false,
  user: [],
};

const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAccount.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(registerAccount.rejected, (state, action) => {
      console.log(action);
      if (action) {
        toast.error("Đăng ký thất bại");
      }
    });
    builder.addCase(registerAccount.pending, (state, action) => {});

    builder.addCase(loginAccount.fulfilled, (state, action) => {
      // const { payload } = action;
      const { user } = action.payload;
      state.isAuthenticated = true;
      console.log(user);
      state.user = user;
      state.user = getUserFormLC();
      // console.log("payload", payload);
      // localStorage.setItem("user", JSON.stringify(payload));
      // toast.success("Đăng nhập thành công");
      // return {
      //   ...state,
      //   isAuthenticated: true,
      //   messError: null,
      //   isLoading: false,
      // };
    });
    builder.addCase(loginAccount.rejected, (state, action) => {
      // console.log(state);
      // console.log(action);
      // return { ...state, messError: "Đăng nhập thất bại", isLoading: false };
    });
    builder.addCase(loginAccount.pending, (state, action) => {
      // state.isLoading = true;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
