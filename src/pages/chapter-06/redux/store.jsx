/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";

/**
 * Redux Store
 */
import Lecture1Reducer  from "./reducers/lecture01-reduxintro";
import Lecture2Slice from "./slice/lecture02-slice";
import Lecture5AsynThunk from "./slice/lecture05-asyncthunk";



const store = configureStore({
    reducer: {
        lecture1: Lecture1Reducer,
        lecture2: Lecture2Slice,
        lecture5: Lecture5AsynThunk,
    }
})
export default store
