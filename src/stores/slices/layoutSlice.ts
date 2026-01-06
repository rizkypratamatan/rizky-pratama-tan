import LayoutState from "@/types/LayoutState";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const layoutSlice = createSlice({
    name: 'layout',
    initialState: {dark: true} as LayoutState,
    reducers: {
        setDark: (state, action: PayloadAction<boolean>) => {
            state.dark = action.payload;
        }
    }
});

export const {setDark} = layoutSlice.actions;
export default layoutSlice.reducer;
