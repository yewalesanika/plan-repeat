import React from 'react'
import { useSelector } from 'react-redux'
import DailyCustomizer from './renderCustomizer/DailyCustomizer';
import WeeklyCustomizer from './renderCustomizer/WeeklyCustomizer';
import MonthlyCustomizer from './renderCustomizer/MonthlyCustomizer';
import YearlyCustomizer from './renderCustomizer/YearlyCustomizer';

export default function CustomizationPanel() {
    const recurrence = useSelector((state) => state.calender.recurrence)

    switch (recurrence) {
        case 'daily':
            return <div className="mt-6"><DailyCustomizer/></div>;
        case 'weekly':
            return <div className="mt-6"><WeeklyCustomizer/></div>;
        case 'monthly':
            return <div className="mt-6"><MonthlyCustomizer /></div>;
        case 'yearly':
            return <div className="mt-6"><YearlyCustomizer /></div>;
        default:
            return null;
    }
    return (
        <>
        
        </>
    )
}