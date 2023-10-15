import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiAboutUs } from "../../../api/about";

const initialState = {
    dataAboutHome: null,
    dataAboutDetail: null,
};

export const getAllDataAboutHome = createAsyncThunk(
    "about/AllDataAboutHome",
    async (data, thunk) => {
        const response = await apiAboutUs.getAboutHome()
        return response;
    }
);

const getAllDataAboutHomeBuilder = (
    builder
) => {
    builder.addCase(getAllDataAboutHome.fulfilled, (state, action) => {
        const { data } = action.payload.data.data
        state.dataAboutHome = data
    });
    builder.addCase(getAllDataAboutHome.pending, (state, action) => { });
    builder.addCase(getAllDataAboutHome.rejected, (state, action) => { });
};

export const updateDataAboutHome = createAsyncThunk(
    "about/updateDataAboutHome",
    async (data, thunk) => {
        
        const response = await apiAboutUs.updateAboutUsHome(data)
        return response;
    }
);

const updateDataAboutHomeBuilder = (
    builder
) => {
    builder.addCase(updateDataAboutHome.fulfilled, (state, action) => {
    });
    builder.addCase(updateDataAboutHome.pending, (state, action) => { });
    builder.addCase(updateDataAboutHome.rejected, (state, action) => { });
};

export const getAllDataDetailHome = createAsyncThunk(
    "about/AllDataDetailHome",
    async (data, thunk) => {
        const response = await apiAboutUs.getAboutUsDetail()
        return response;
    }
);

const getAllDataAboutDetailBuilder = (
    builder
) => {
    builder.addCase(getAllDataDetailHome.fulfilled, (state, action) => {
        const { data } = action.payload.data.data
        state.dataAboutDetail = data
    });
    builder.addCase(getAllDataDetailHome.pending, (state, action) => { });
    builder.addCase(getAllDataDetailHome.rejected, (state, action) => { });
};

export const updateDataAboutDetail = createAsyncThunk(
    "about/updateDataAboutDetail",
    async (data, thunk) => {
        const response = await apiAboutUs.updateAboutUsDetail(data)
        return response;
    }
);

const updateDataAboutDetailBuilder = (
    builder
) => {
    builder.addCase(updateDataAboutDetail.fulfilled, (state, action) => {
    });
    builder.addCase(updateDataAboutDetail.pending, (state, action) => { });
    builder.addCase(updateDataAboutDetail.rejected, (state, action) => { });
};

const DataAboutSlice = createSlice({
    name: "DataAbout",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        getAllDataAboutHomeBuilder(builder)
        updateDataAboutHomeBuilder(builder)
        getAllDataAboutDetailBuilder(builder)
        updateDataAboutDetailBuilder(builder)
    },
});

export default DataAboutSlice.reducer;