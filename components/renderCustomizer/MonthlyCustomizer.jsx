'use client'

import { setDates, setDays, setEndDate, setInterval, setStartDate, setWeeks } from '@/redux/calender/calender';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

export default function MonthlyCustomizer() {
    const dispatch = useDispatch()
    const [monthlyOption, setMonthlyOption] = useState()
    const handleMonthlyOption = (option) => {
        setMonthlyOption(option)
    }

    const handleMonthlyCustomizer = (e) => {
        e.preventDefault();
        const fromdata = new FormData(e.target);
        const date = fromdata.getAll('date')
        const week = fromdata.getAll('week')
        const days = fromdata.getAll('days')
        const data = Object.fromEntries(fromdata.entries());
        data.date = date
        data.week = week
        data.days = days
        dispatch(setInterval(data.interval))
        dispatch(setDays(data.days))
        dispatch(setWeeks(data.week))
        dispatch(setDates(data.date))
        dispatch(setStartDate(data.start_from))
        dispatch(setEndDate(data.ends_on))
    }

    return (
        <>
            <div className="bg-gray-50 rounded-lg p-6">
                <form onSubmit={handleMonthlyCustomizer} className="space-y-6">
                    <div className='flex items-center gap-2'>
                        <label className='font-medium text-gray-700' htmlFor='interval'>Interval</label>
                        <input type='number' name='interval' className='border border-gray-300 rounded-md px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500' min={0} max={11} />
                    </div>
                    <div className="space-y-3">
                        <div className='flex items-center gap-2'>
                            <input type='radio' value='weekdaysofmonth' name='monthlyoption' onClick={() => handleMonthlyOption('weekdaysofmonth')} className="w-4 h-4 text-blue-600"/>
                            <label className='font-medium text-gray-700' htmlFor='weekdaysofmonth'>Week days of month</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type='radio' value='daysofmonth' name='monthlyoption' onClick={() => handleMonthlyOption('daysofmonth')} className="w-4 h-4 text-blue-600"/>
                            <label className='font-medium text-gray-700' htmlFor='daysofmonth'>Days of month</label>
                        </div>
                    </div>
                    <div className="border-t pt-4">
                        {
                            monthlyOption &&
                            <div className="space-y-4">
                                {
                                    monthlyOption === "weekdaysofmonth" ?
                                        (
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <h4 className="font-medium text-gray-800">Select Weeks:</h4>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="flex items-center gap-2">
                                                            <input type='checkbox' value='1' name="week" className="w-4 h-4 text-blue-600"/>
                                                            <label htmlFor='1st week' className="text-sm text-gray-700">1st week</label>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <input type='checkbox' value='2' name="week" className="w-4 h-4 text-blue-600"/>
                                                            <label htmlFor='2nd week' className="text-sm text-gray-700">2nd week</label>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <input type='checkbox' value='3' name="week" className="w-4 h-4 text-blue-600"/>
                                                            <label htmlFor='3rd week' className="text-sm text-gray-700">3rd week</label>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <input type='checkbox' value='4' name="week" className="w-4 h-4 text-blue-600"/>
                                                            <label htmlFor='4th week' className="text-sm text-gray-700">4th week</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="font-medium text-gray-800">Select Days:</h4>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                                        <div className="flex items-center gap-2">
                                                            <input type='checkbox' value='monday' name="days" className="w-4 h-4 text-blue-600"/>
                                                            <label htmlFor='monday' className="text-sm text-gray-700">Monday</label>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <input type='checkbox' value='tuesday' name="days" className="w-4 h-4 text-blue-600"/>
                                                            <label htmlFor='tuesday' className="text-sm text-gray-700">Tuesday</label>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <input type='checkbox' value='wednesday' name="days" className="w-4 h-4 text-blue-600"/>
                                                            <label htmlFor='wednesday' className="text-sm text-gray-700">Wednesday</label>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <input type='checkbox' value='thursday' name="days" className="w-4 h-4 text-blue-600"/>
                                                            <label htmlFor='thursday' className="text-sm text-gray-700">Thursday</label>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <input type='checkbox' value='friday' name="days" className="w-4 h-4 text-blue-600"/>
                                                            <label htmlFor='friday' className="text-sm text-gray-700">Friday</label>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <input type='checkbox' value='saturday' name="days" className="w-4 h-4 text-blue-600"/>
                                                            <label htmlFor='saturday' className="text-sm text-gray-700">Saturday</label>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <input type='checkbox' value='sunday' name="days" className="w-4 h-4 text-blue-600"/>
                                                            <label htmlFor='sunday' className="text-sm text-gray-700">Sunday</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) :
                                        (
                                            <div className="space-y-2">
                                                <h4 className="font-medium text-gray-800">Select Dates:</h4>
                                                <div className="grid grid-cols-7 gap-2 max-h-40 overflow-y-auto border border-gray-200 p-3 rounded">
                                                    {dates.map((date) => (
                                                        <div key={date} className="flex items-center gap-1">
                                                            <input type='checkbox' name="date" value={date} className="w-4 h-4 text-blue-600"/>
                                                            <label htmlFor={date} className="text-sm text-gray-700">{date}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                        }
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor='start_from' className="text-sm font-medium text-gray-700">Start From</label>
                            <input type="date" required name='start_from' className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor='ends_on' className="text-sm font-medium text-gray-700">Ends On</label>
                            <input type="date" name='ends_on' className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Next</button>
                    </div>
                </form>
            </div>
        </>
    )
}