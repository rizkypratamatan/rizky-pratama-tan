import DataState from "@/types/DataState";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChartApi, ISeriesApi} from "lightweight-charts";


const dataSlice = createSlice({
    name: 'data',
    initialState: {} as DataState,
    reducers: {
    }
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;
