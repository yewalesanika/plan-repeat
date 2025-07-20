import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const MiniCalendar = () => {
    const state = useSelector(state => state.calender);
    const { 
        recurrence, 
        interval, 
        everyday, 
        days, 
        weeks, 
        dates, 
        month, 
        startDate, 
        endDate 
    } = state;

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    const calendarDays = useMemo(() => {
        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = [];
        
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }
        
        return days;
    }, [currentYear, currentMonth]);

    const isDateHighlighted = (day) => {
        if (!day || !recurrence || !startDate) return false;

        const checkDate = new Date(currentYear, currentMonth, day);
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : null;

        if (checkDate < start) return false;
        if (end && checkDate > end) return false;

        const intervalValue = (interval && interval > 0) ? parseInt(interval) : 1;

        switch (recurrence) {
            case 'daily':
                const diffTime = checkDate.getTime() - start.getTime();
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                
                if (diffDays % intervalValue !== 0) return false;
                
                if (everyday === true) {
                    return true;
                } else if (everyday === false) {
                    const dayOfWeek = checkDate.getDay();
                    return dayOfWeek >= 1 && dayOfWeek <= 5;
                }
                return false;

            case 'weekly':
                if (!days || days.length === 0) return false;
                
                const getWeekStart = (date) => {
                    const d = new Date(date);
                    const day = d.getDay();
                    const diff = d.getDate() - day;
                    return new Date(d.setDate(diff));
                };
                
                const startWeekStart = getWeekStart(start);
                const checkWeekStart = getWeekStart(checkDate);
                
                const weeksDiff = Math.floor((checkWeekStart.getTime() - startWeekStart.getTime()) / (1000 * 60 * 60 * 24 * 7));
                
                if (weeksDiff % intervalValue !== 0) return false;
                
                const dayName = checkDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
                return days.includes(dayName);

            case 'monthly':
                const startMonth = start.getMonth();
                const startYear = start.getFullYear();
                const checkMonth = checkDate.getMonth();
                const checkYear = checkDate.getFullYear();
                
                const monthsDiff = (checkYear - startYear) * 12 + (checkMonth - startMonth);
                
                if (monthsDiff % intervalValue !== 0) return false;
                
                if (dates && dates.length > 0) {
                    return dates.includes(day.toString());
                } else if (weeks && weeks.length > 0 && days && days.length > 0) {
                    const weekOfMonth = Math.ceil(day / 7);
                    const dayName = checkDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
                    return weeks.includes(weekOfMonth.toString()) && days.includes(dayName);
                }
                return false;

            case 'yearly':
                const yearsDiff = checkDate.getFullYear() - start.getFullYear();
                
                if (yearsDiff % intervalValue !== 0) return false;
                
                if (month && month.length > 0 && dates && dates.length > 0) {
                    const currentMonthName = checkDate.toLocaleDateString('en-US', { month: 'long' });
                    return month.includes(currentMonthName) && dates.includes(day.toString());
                }
                return false;

            default:
                return false;
        }
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="mini-calendar mx-auto mt-10 bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-sm">
            <div className="calendar-header text-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                    {monthNames[currentMonth]} {currentYear}
                </h3>
                {recurrence && (
                    <p className="text-sm text-gray-600 capitalize">
                        Recurrence: {recurrence}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map(dayName => (
                    <div key={dayName} className="text-center text-xs font-semibold text-gray-600 py-1">
                        {dayName}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                    <div
                        key={index}
                        className={`
                            h-8 w-8 flex items-center justify-center text-sm rounded
                            ${day === null 
                                ? '' 
                                : day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
                                    ? 'bg-blue-100 border-2 border-blue-500 font-bold text-blue-700' 
                                    : isDateHighlighted(day)
                                        ? 'bg-green-200 text-green-800 font-semibold' 
                                        : 'hover:bg-gray-100 text-gray-700' 
                            }
                        `}
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="mt-4 text-xs">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded"></div>
                    <span className="text-gray-600">Today</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-200 rounded"></div>
                    <span className="text-gray-600">Recurring Event</span>
                </div>
            </div>
        </div>
    );
};

export default MiniCalendar;