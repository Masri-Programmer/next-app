import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: [],
        isLoading: false,
        data: [],
        error: null,
    },
    reducers: {
        defaultState: (state) => {
            state = initialState;
        },
    },
});

export const authReducer = authSlice.reducer;
export const { defaultState } = authSlice.actions;

export default authSlice.reducer;
