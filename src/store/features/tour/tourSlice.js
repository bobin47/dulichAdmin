import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCategory } from "../../../api/tour";

const initialState = {
  total:0,
  tours: [],
};

export const getAllTour = createAsyncThunk(
  "post/getAll",
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

export const createTour = createAsyncThunk(
  "post/createTour",
  async (data, thunk) => {
    const response = await apiCategory.createTour(data);
    return response;
  }
);

const createTourBuilder = (
  builder
) => {
  builder.addCase(createTour.fulfilled, (state, action) => {
    console.log(action.payload);
   
   
  });
  builder.addCase(createTour.pending, (state, action) => {});
  builder.addCase(createTour.rejected, (state, action) => {});
};

export const editTour = createAsyncThunk(
  "post/editTour",
  async (data: any, thunk) => {
    const response = await apiCategory.updateTour(data.id, data.body);
    return response;
  }
);

const editTourBuilder = (
  builder
) => {
  builder.addCase(editTour.fulfilled, (state, action) => {
    console.log(action.payload);
   
   
  });
  builder.addCase(editTour.pending, (state, action) => {});
  builder.addCase(editTour.rejected, (state, action) => {});
};

export const deleteTour = createAsyncThunk(
  "post/deleteTour",
  async (data, thunk) => {
    console.log(data)
    const response = await apiCategory.deleteTour(data);
    return response;
  }
);

const deleteTourBuilder = (
  builder
) => {
  builder.addCase(deleteTour.fulfilled, (state, action) => {
    console.log(action.payload);
  });
  builder.addCase(deleteTour.pending, (state, action) => {});
  builder.addCase(deleteTour.rejected, (state, action) => {});
};





const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getAllTourBuilder(builder)
    createTourBuilder(builder)
    editTourBuilder(builder)
    deleteTourBuilder(builder)
  },
});

export default tourSlice.reducer;