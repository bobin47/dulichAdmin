import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { infoUserApi } from "../../../api/user";

const initialState = {
  isLoading: false,
  informationUser: {},
};

export const infoUserAction = createAsyncThunk(
  "users/allCourse",
  async (data, thunkAPI) => {
    const response = await infoUserApi();
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
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
