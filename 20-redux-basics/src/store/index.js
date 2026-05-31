import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

// const counterReducer = (state = initialCounterState, action) => {
//     if(action.type === "increment"){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter, // If i remove this line here then the app will break its logic. IMPORTANT: this returned object is overridden the prev object and not "added" to the prev object.
//         }
//     }
//     if(action.type === "decrement"){

//         // state.counter--;
//         // return state;
//         // Also we should never do this. in redux state management.
//         // We should always return a new object and not mutate the current state directly.

//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === "increase"){
//         return {
//             counter: state.counter + action.value,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === "toggle"){
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         }
//     }

//     return state;
// };


const store = configureStore({
    // reducer: counterSlice.reducer,
    reducer: { counter: counterReducer, auth: authReducer }, // if we have multiple reducers then we do like this.
});

export default store;