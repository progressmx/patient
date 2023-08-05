import React from 'react'
import { Treatment } from '../types'
import {BiExpandAlt} from 'react-icons/bi'
import {LiaTimesSolid} from 'react-icons/lia'

export default function TreatmentSummary(props: Treatment) {
  return (
    <div className='flex flex-col md:flex-row mt-6 gap-4 md:gap-2'>
         {
            props.medication.map((plan) => (
                <div key={plan.medication} className={`flex flex-col justify-left place-content-left
                 mx-auto md:mx-2 w-[80%] md:w-[25%] p-2
                 bg-white rounded-3xl ${props.className}`}
                 >
                    <p className='flex flex-row gap-4 text-lg ml-4 md:text-l font-semibold text-gray-900'>
                        {plan.medication} 
                        <p className='text-sm md:text-xs'>{plan.duration}</p>
                    </p>
                    <p className='ml-4 text-gray-800'>{plan.dosage}</p>

                    {/* <div className='flex flex-row gap-2 mt-2 p-1 text-black justify-end place-content-end'>
                        <div className='bg-gray-300  flex justify-center place-items-center w-8 h-8 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                            <BiExpandAlt className='w-5 h-5 '/>
                        </div>
                        <div className='bg-gray-300 flex justify-center place-items-center w-8 h-8 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                            <LiaTimesSolid className='w-5 h-5 ' />
                        </div>
                    </div> */}
                    
                    <div className="w-[90%] h-2 bg-blue-200 rounded-full m-4">
                        <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                    </div>

                </div>
                
            ))
        }
       
    </div>
  )
}