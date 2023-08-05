import React from 'react'
import { bundle } from '../types'

export default function VitalsSummary(props: bundle) {
  return (
    <div className='flex flex-row gap-2 md:gap-4 w-full '>
        {
            props.input_bundle.map((vitals) => (
                <div key={vitals.name} className={`flex flex-col justify-center place-content-center place-items-center
                 w-[35%] md:w-[20%] bg-white rounded-3xl p-6 ${props.className}`}>
                    <p className='mt-1 text-sm md:text-sm leading-5 text-gray-700'>{vitals.name}</p>
                    <p className='text-sm md:text-xl font-semibold text-gray-900'>{vitals.label}</p>
                </div>
            ))
        }
    </div>
  )
}

