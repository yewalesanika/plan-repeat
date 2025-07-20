import { setDays, setEndDate, setInterval, setStartDate } from '@/redux/calender/calender';
import React from 'react'
import { useDispatch } from 'react-redux';

export default function WeeklyCustomizer() {
  const dispatch = useDispatch();
  const handleWeeklyCustomizer = (e) => {
    e.preventDefault();
    const fromdata = new FormData(e.target);
    const days = fromdata.getAll('days')
    const data = Object.fromEntries(fromdata.entries());
    data.days = days
    dispatch(setInterval(data.interval))
    dispatch(setDays(data.days))
    dispatch(setStartDate(data.start_from))
    dispatch(setEndDate(data.ends_on))
  }
  return (
    <>
      <div className="bg-gray-50 rounded-lg p-6">
        <form onSubmit={handleWeeklyCustomizer} className="space-y-6">
          <div className='flex items-center gap-2'>
            <label className='font-medium text-gray-700' htmlFor='interval'>Interval</label>
            <input type='number' name='interval' className='border border-gray-300 rounded-md px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500' min="1"/>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-gray-800 mb-3">Select Days:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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