import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    videoData: null,
};

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        put: (state, action) => {
            state.status = true;
            state.videoData = action.payload;
        },
    },
});

export const { put } = videoSlice.actions;

export default videoSlice.reducer;
