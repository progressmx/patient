import React from 'react'
import { Treatment } from '../types'
import {BiExpandAlt} from 'react-icons/bi'
import {LiaTimesSolid} from 'react-icons/lia'
import {CiPill} from 'react-icons/ci'
import SummaryCard from './summaryCard'
import CardBody from './cardBody'
import CardHeader from './cardHeader'

export default function TreatmentSummary(props: Treatment) {
  return (
    <SummaryCard>
        <CardHeader className='text-[#0068ff]'>
            <h3 className='text-lg font-bold '>Medication</h3>
            <div className=' flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-300'>
                <BiExpandAlt className='w-5 h-5'/>
            </div>
        </CardHeader>
         {
            props.medication.map((plan) => (
                <CardBody key={plan.medication} className='flex-col'>
                    <div className='flex flex-row gap-1'>
                        <p className='flex flex-row justify-left place-items-center gap-2 w-2/4 text-sm font-semibold ml-4 text-gray-900'>
                           <CiPill /> {plan.medication}
                        </p>
                        <p className='w-2/4 flex justify-end place-content-end text-gray-900 text-xs opacity-80'>
                            {plan.duration} left
                        </p>
                    </div>
                    <div className="w-[90%] h-2 bg-blue-200 rounded-full m-4">
                        <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                    </div>
                </CardBody>
                
            ))
        }
       
    </SummaryCard>
  )
}