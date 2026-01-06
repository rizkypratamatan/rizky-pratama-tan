import ResumeState from "@/types/ResumeState";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const resumeSlice = createSlice({
    name: 'resume',
    initialState: {experience: {scrollSnaps: [], selected: 0}} as ResumeState,
    reducers: {
        setExperienceScrollSnaps: (state, action: PayloadAction<number[]>) => {
            state.experience.scrollSnaps = action.payload;
        },
        setExperienceSelected: (state, action: PayloadAction<number>) => {
            state.experience.selected = action.payload;
        }
    }
});

export const {setExperienceScrollSnaps, setExperienceSelected} = resumeSlice.actions;
export default resumeSlice.reducer;
