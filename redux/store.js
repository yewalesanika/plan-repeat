import { configureStore } from "@reduxjs/toolkit";
import calenderReducer from "./calender/calender.js"

export const store = configureStore({
    reducer:{
        calender : calenderReducer
    }
})