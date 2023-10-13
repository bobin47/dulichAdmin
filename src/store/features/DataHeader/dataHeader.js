import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiHeaderData } from "../../../api/headerData";

const initialState = {
    listURL: [],
};

export const getAllDataHeader = createAsyncThunk(
    "post/getAll",
    async (data, thunk) => {
        const response = await apiHeaderData.getHeaderData()
        return response;
    }
);

const getAllDataHeaderBuilder = (
    builder
) => {
    builder.addCase(getAllDataHeader.fulfilled, (state, action) => {
        console.log(action.payload);
        const { listURL } = action.payload.data.slideHeader
        state.listURL = listURL

    });
    builder.addCase(getAllDataHeader.pending, (state, action) => { });
    builder.addCase(getAllDataHeader.rejected, (state, action) => { });
};

export const editDataHeader = createAsyncThunk(
    "dataHeader/editDataHeader",
    async (data: any, thunk) => {
        const response = await apiHeaderData.updateHeaderData(data);
        return response;
    }
);

const editTourBuilder = (
    builder
) => {
    builder.addCase(editDataHeader.fulfilled, (state, action) => {
        console.log(action.payload);


    });
    builder.addCase(editDataHeader.pending, (state, action) => { });
    builder.addCase(editDataHeader.rejected, (state, action) => { });
};


const DataHeaderSlice = createSlice({
    name: "dataHeader",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        getAllDataHeaderBuilder(builder)
        editTourBuilder(builder)
    },
});

export default DataHeaderSlice.reducer;