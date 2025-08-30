import { createSlice } from "@reduxjs/toolkit";

const CounterSlide = createSlice({
    name: "counter",
    initialState: {value : 0},
    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})

export const {increment, decrement, incrementByAmount, reset} = CounterSlide.actions;
export default CounterSlide.reducer;