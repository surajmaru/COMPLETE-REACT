import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state){
            state.counter++; // we can do this here in redux toolkit. (toolkit handles this state copying here automatically)
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        },
    },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;