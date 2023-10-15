import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiFooterData } from "../../../api/footerData";


const initialState = {
    dataFooter: [],
};

export const getDataFooter = createAsyncThunk(
    "dataFooter/getDataFooter",
    async (data, thunk) => {
        const response = await apiFooterData.getFooterData()
        return response;
    }
);

const getDataFooterBuilder = (
    builder
) => {
    builder.addCase(getDataFooter.fulfilled, (state, action) => {
        const { dataFooter } = action.payload.data
        state.dataFooter = dataFooter
    });
    builder.addCase(getDataFooter.pending, (state, action) => { });
    builder.addCase(getDataFooter.rejected, (state, action) => { });
};

export const changeDataFooter = createAsyncThunk(
    "dataFooter/changeDataFooter",
    async (data: any, thunk) => {
        const response = await apiFooterData.updateFooterData(data);
        return response;
    }
);

const editTourBuilder = (
    builder
) => {
    builder.addCase(changeDataFooter.fulfilled, (state, action) => {
    });
    builder.addCase(changeDataFooter.pending, (state, action) => { });
    builder.addCase(changeDataFooter.rejected, (state, action) => { });
};


const DataFooterSlice = createSlice({
    name: "dataFooter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        getDataFooterBuilder(builder)
        editTourBuilder(builder)
    },
});

export default DataFooterSlice.reducer;