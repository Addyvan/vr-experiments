import { combineReducers, createStore } from '@reduxjs/toolkit';

import keyboardInputSlice from "./slices/keyboard-input";
import mouseInputSlice from "./slices/mouse-input";
import uiSlice from "./slices/ui";

import {
    saveState
} from "./utils";


const rootReducer = combineReducers({
    keyboardInputs: keyboardInputSlice.reducer,
    mouseInputs: mouseInputSlice.reducer,
    ui: uiSlice.reducer
});

const store = createStore(
    rootReducer
)

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
