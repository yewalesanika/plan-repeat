'use client'

import { setRecurrence } from '@/redux/calender/calender'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function RecurrenceTypeSelector() {
    const dispatch = useDispatch()
    const handleRecurrence = (recurrence) =>{
        dispatch({type:setRecurrence,payload:recurrence})
    }
    return (
        <div className="mb-6">
            <h3 className='text-xl font-semibold mb-4 text-gray-800'>How often do you want this to repeat?</h3>
            <div className="flex gap-6 flex-wrap">
                <div className='flex items-center gap-2'>
                    <input type='radio' value='daily' name='recurrence' onClick={()=>handleRecurrence('daily')} className="w-4 h-4 text-blue-600"/>
                    <label className='font-medium text-gray-700' htmlFor='weekly'>Daily</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='radio' value='weekly' name='recurrence' onClick={()=>handleRecurrence('weekly')} className="w-4 h-4 text-blue-600"/>
                    <label className='font-medium text-gray-700' htmlFor='weekly'>Weekly</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='radio' value='monthly' name='recurrence' onClick={()=>handleRecurrence('monthly')} className="w-4 h-4 text-blue-600"/>
                    <label className='font-medium text-gray-700' htmlFor='weekly'>Monthly</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='radio' value='yearly' name='recurrence' onClick={()=>handleRecurrence('yearly')} className="w-4 h-4 text-blue-600"/>
                    <label className='font-medium text-gray-700' htmlFor='weekly'>Yearly</label>
                </div>
            </div>
        </div>
    )
}