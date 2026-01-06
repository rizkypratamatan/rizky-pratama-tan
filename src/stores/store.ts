import layoutSlice from "@/stores/slices/layoutSlice";
import resumeSlice from "@/stores/slices/resumeSlice";
import {configureStore} from "@reduxjs/toolkit";


export const reduxStore = configureStore({
    reducer: {
        layout: layoutSlice,
        resume: resumeSlice
    }
});

export type AppStore = typeof reduxStore;
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
