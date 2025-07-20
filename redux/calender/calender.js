import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recurrence: '',
    interval:0,
};

export const calendarSlice = createSlice({
    name: 'calendar', 
    initialState,
    reducers: {
        setRecurrence: (state, action) => {
            state.recurrence = action.payload;
        },
        setInterval:(state,action)=>{
            if(action.payload)
            {
                state.interval = action.payload;
            }
            else{
                state.interval = 0;
            }
        },
        setEveryDay:(state,action)=>{
            if(action.payload==='everyday')
            {
                state.everyday=true
            }
            else if(action.payload==='weekdays')
            {
                state.everyday=false
            }
            else{
                state.everyday
            }
        },
        setDays:(state,action)=>{
            state.days = action.payload;
        },
        setWeeks:(state,action)=>{
            state.weeks = action.payload
        },
        setDates:(state,action)=>{
            state.dates = action.payload
        },
        setMonth:(state,action)=>{
            state.month = action.payload
        },
        setStartDate:(state,action)=>{
            state.startDate = action.payload
        },
        setEndDate:(state,action)=>{
            state.endDate = action.payload
        }
    },
});

export const { setRecurrence,setInterval,setEveryDay,setDays,setWeeks,setDates,setMonth,setStartDate,setEndDate } = calendarSlice.actions;

export default calendarSlice.reducer;