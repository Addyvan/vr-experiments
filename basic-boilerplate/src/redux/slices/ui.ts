import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'UI',
    initialState: {
        scroll: 0
    },
    reducers: {
        updateScroll: (state : any, action: PayloadAction<any>) => {
            state.scroll = action.payload.scroll;
            return state;
        },
    }
});

export default uiSlice;
