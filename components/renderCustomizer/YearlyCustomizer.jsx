import { setDates, setEndDate, setMonth, setStartDate } from '@/redux/calender/calender';
import React from 'react'
import { useDispatch } from 'react-redux';

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

export default function YearlyCustomizer() {

    const dispatch = useDispatch();

    const handleYearlyCustomizer = (e) => {
        e.preventDefault()
        const fromdata = new FormData(e.target);
        const data = Object.fromEntries(fromdata.entries());
        const date = fromdata.getAll('date')
        const month = fromdata.getAll('month')
        data.date = date
        data.month = month
        console.log(data)
        dispatch(setDates(data.date))
        dispatch(setMonth(data.month))
        dispatch(setStartDate(data.start_from))
        dispatch(setEndDate(data.ends_on))
    }
    return (
        <>
            <div className="bg-gray-50 rounded-lg p-6">
                <form onSubmit={handleYearlyCustomizer} className="space-y-6">
                    <div className='flex items-center gap-2'>
                        <label className='font-medium text-gray-700' htmlFor='interval'>Interval</label>
                        <input type='number' name='interval' className='border border-gray-300 rounded-md px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500' min="1" />
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h4 className="font-medium text-gray-800">Select Months:</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-32 overflow-y-auto border border-gray-200 p-3 rounded">
                                {months.map((month) => (
                                    <div key={month} className="flex items-center gap-2">
                                        <input type='checkbox' name="month" value={month} className="w-4 h-4 text-blue-600" />
                                        <label htmlFor={month} className="text-sm text-gray-700">{month}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h4 className="font-medium text-gray-800">Select Dates:</h4>
                            <div className="grid grid-cols-7 gap-2 max-h-40 overflow-y-auto border border-gray-200 p-3 rounded">
                                {dates.map((date) => (
                                    <div key={date} className="flex items-center gap-1">
                                        <input type='checkbox' name="date" value={date} className="w-4 h-4 text-blue-600" />
                                        <label htmlFor={date} className="text-sm text-gray-700">{date}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor='start_from' className="text-sm font-medium text-gray-700">Start From</label>
                            <input type="date" required name='start_from' className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor='ends_on' className="text-sm font-medium text-gray-700">Ends On</label>
                            <input type="date" name='ends_on' className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
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