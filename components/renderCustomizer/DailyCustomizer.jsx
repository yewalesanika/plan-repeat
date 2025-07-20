import { setEndDate, setEveryDay, setStartDate } from '@/redux/calender/calender';
import React from 'react'
import { useDispatch } from 'react-redux'

export default function DailyCustomizer() {
    const dispatch = useDispatch();

    const handleDailyCustomizer = (e) => {
        e.preventDefault();
        const fromdata = new FormData(e.target);
        const data = Object.fromEntries(fromdata.entries());
        dispatch(setEveryDay(data.daily))
        dispatch(setStartDate(data.start_from))
        dispatch(setEndDate(data.ends_on))
    }
    return (
        <div className="bg-gray-50 rounded-lg p-6">
            <form onSubmit={handleDailyCustomizer} className="space-y-6">
                <div className="space-y-3">
                    <div className='flex items-center gap-2'>
                        <input type='radio' value='everyday' name='daily' className="w-4 h-4 text-blue-600"/>
                        <label className='font-medium text-gray-700' htmlFor='everyday'>Everyday</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type='radio' value='weekdays' name='daily' className="w-4 h-4 text-blue-600"/>
                        <label className='font-medium text-gray-700' htmlFor='weekdays'>Weekdays (Monday to Friday)</label>
                    </div>
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
    )
}