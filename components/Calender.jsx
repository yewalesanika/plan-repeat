'use client'

import React from 'react'
import Heading from './Heading'
import RecurrenceTypeSelector from './RecurrenceTypeSelector'
import CustomizationPanel from './CustomizationPanel'
import { useSelector } from 'react-redux'
import MiniCalendar from './MiniCalendar'

function Calender() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Heading />
            <div className="flex justify-center p-4">
                <div className="text-black bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
                    <RecurrenceTypeSelector/>
                    <CustomizationPanel/>
                    <MiniCalendar/>
                </div>
            </div>
        </div>
    )
}

export default Calender