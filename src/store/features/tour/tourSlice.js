import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCategory } from "../../../api/tour";

const initialState = {
  total:0,
  tours: [],
  allTours: [],
  listSelected:[]
};

export const GetToursAll = createAsyncThunk(
  "post/GetToursAll",
  async (data, thunk) => {
    const response = await apiCategory.getAllTour();
    return response;
  }
);

const GetToursAllBuilder = (
  builder
) => {
  builder.addCase(GetToursAll.fulfilled, (state, action) => {
    const { tours, totalTours, listSelected } = action.payload.data;
    const newKey = "key"
    let currentValue = 1
    tours.forEach(function (obj) {
      // obj[newKey] = obj._id;
      obj.key = obj._id
      // currentValue++;
    });
    state.listSelected = listSelected
    state.total = totalTours;
    state.allTours = tours;

  });
  builder.addCase(GetToursAll.pending, (state, action) => { });
  builder.addCase(GetToursAll.rejected, (state, action) => { });
};

export const GetTours = createAsyncThunk(
  "post/getTours",
  async (data, thunk) => {
    const response = await apiCategory.getAllTour(data);
    return response;
  }
);

const GetToursBuilder = (
  builder
) => {
  builder.addCase(GetTours.fulfilled, (state, action) => {
    const { tours, totalTours } = action.payload.data;
    state.total = totalTours;
    state.tours = tours;
   
  });
  builder.addCase(GetTours.pending, (state, action) => {});
  builder.addCase(GetTours.rejected, (state, action) => {});
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
   
   
  });
  builder.addCase(editTour.pending, (state, action) => {});
  builder.addCase(editTour.rejected, (state, action) => {});
};

export const deleteTour = createAsyncThunk(
  "post/deleteTour",
  async (data, thunk) => {
    const response = await apiCategory.deleteTour(data);
    return response;
  }
);

const deleteTourBuilder = (
  builder
) => {
  builder.addCase(deleteTour.fulfilled, (state, action) => {
  });
  builder.addCase(deleteTour.pending, (state, action) => {});
  builder.addCase(deleteTour.rejected, (state, action) => {});
};

export const hotTour = createAsyncThunk(
  "post/hotTour",
  async (data, thunk) => {
    const response = await apiCategory.hotTour(data);
    return response;
  }
);

const HotTourBuilder = (
  builder
) => {
  builder.addCase(hotTour.fulfilled, (state, action) => {
  });
  builder.addCase(hotTour.pending, (state, action) => { });
  builder.addCase(hotTour.rejected, (state, action) => { });
};





const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    GetToursAllBuilder(builder)
    GetToursBuilder(builder)
    createTourBuilder(builder)
    editTourBuilder(builder)
    deleteTourBuilder(builder)
    HotTourBuilder(builder)
  },
});

export default tourSlice.reducer;