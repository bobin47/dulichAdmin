import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCategory } from "../../../api/tour";

const initialState = {
  total:0,
  tours: [],
};

export const getAllTour = createAsyncThunk(
  "Post/getAll",
  async (data, thunk) => {
    const response = await apiCategory.getAllTour(data);
    return response;
  }
);

const getAllTourBuilder = (
  builder
) => {
  builder.addCase(getAllTour.fulfilled, (state, action) => {
    console.log(action.payload);
    const { tours, totalTours } = action.payload.data;
    state.total = totalTours;
    state.tours = tours;
   
  });
  builder.addCase(getAllTour.pending, (state, action) => {});
  builder.addCase(getAllTour.rejected, (state, action) => {});
};



const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getAllTourBuilder(builder)
  },
});

export default tourSlice.reducer;