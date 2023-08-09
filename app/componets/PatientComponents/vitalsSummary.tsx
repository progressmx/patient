import React from 'react'
import { Bundle } from '../types'
import {BiExpandAlt,BiPlus} from 'react-icons/bi'
import SummaryCard from './summaryCard'
import CardBody from './cardBody'
import CardFooter from './cardFooter'
import CardHeader from './cardHeader'
import CardContent from './cardContent'
import { useState } from 'react'
import Dialog from '../dialog'
import Vitals from './vitals'
export default function VitalsSummary(props: Bundle) {

  const [open, setOpen] = useState(false);
    const handleDialog = () => setOpen(!open);
  return (
    <SummaryCard>
        <CardHeader className='text-[#0068ff]'>
          <h3 className='text-lg font-bold '>Vitals</h3>
          <div className=' flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-300'>
                <BiExpandAlt className='w-5 h-5'/>
          </div>
        </CardHeader>
        {
            props.input_bundle.map((vitals) => (
                <CardBody key={vitals.name} >
                  <CardContent>
                     <p className='flex flex-row w-full justify-start place-items-center gap-2 text-sm font-semibold ml-4 text-black'>
                        {/* <vitals.icon className='w-5 h-5'/> */}
                         {vitals.name}
                    </p>
                  </CardContent>
                   <CardContent className=' text-black justify-end place-content-end'>
                      <p className='text-sm font-semibold ml-4 text-gray-900'>
                        {vitals.label}
                      </p>
                   </CardContent>
                </CardBody>
            ))
        }
        <CardFooter>
          <div  onClick={handleDialog} className='bg-gray-300 flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-100'>
            <BiPlus className='w-5 h-5 ' />
          </div>
          <p className='text-[#0068ff] text-sm font-bold'>
            record new vitals
          </p>
      </CardFooter>
      {open?
        <Dialog position='absolute' onClick={handleDialog} className='bg-gray-600 bg-opacity-50'>
          <Vitals></Vitals>
        </Dialog> : ""}
    </SummaryCard>
  )
}

