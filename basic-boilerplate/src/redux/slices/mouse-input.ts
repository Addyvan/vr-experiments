import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit";

const mouseInputSlice = createSlice({
    name: 'MOUSE',
    initialState: {
        mouseX: 0,
        mouseY: 0,
        leftClick: false,
        rightClick: false,
        wheel: false,
    },
    reducers: {
        updateMouseMove: (state : any, action: PayloadAction<any>) => {
            state.mouseX = action.payload.mouseX;
            state.mouseY = action.payload.mouseY;
            return state;
        },
        updateMouseWheel: (state : any, action: PayloadAction<any>) => {
            state.wheel = action.payload.wheel;
            return state;
        },
        updateMouseClick: (state : any, action: PayloadAction<any>) => {
            if (action.payload.up) {
                if (action.payload.isLeftClick) {
                    state.leftClick = false;
                } else {
                    state.rightClick = false;
                }
            } else {
                if (action.payload.isLeftClick) {
                    state.leftClick = true;
                } else {
                    state.rightClick = true;
                }
            }
            return state;
        }
    }
});

export default mouseInputSlice;