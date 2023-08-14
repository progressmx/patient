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
import { vitalsType } from '../types'

export default function VitalsSummary(props: vitalsType) {

  const [open, setOpen] = useState(false);
  const handleDialog = () => setOpen(!open);

  // const values = [
  //   {
  //     label : 
  //   }
  // ]
  const vitals = []
  let size = 0
  try{
    size = Object.keys(props.vitals[0]).length
  }
  catch
  {
    size = 0
  }

  
  if(size > 0)
  {
     for (let index = 0; index < size; index++) {
       
       let labels = Object.keys(props.vitals[0])[index]
 
       if(labels != 'id')
       {
         labels = labels as string
         const values = props.vitals[0][labels]
 
         vitals.push({label:labels, value : values})
       }
     }
  }

  return (
    <SummaryCard>
        <CardHeader className='text-[#0068ff]'>
          <h3 className='text-lg font-bold '>Vitals</h3>
          <div className=' flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-300'>
                <BiExpandAlt className='w-5 h-5'/>
          </div>
        </CardHeader>
        {size > 0?
          
            vitals.map((vitals_,index) => (
                <CardBody key={vitals_.label} >
                  <CardContent>
                     <p className='flex flex-row w-full justify-start place-items-center gap-2 text-sm font-semibold ml-4 text-black'>
                         {vitals_.label}
                    </p>
                  </CardContent>
                   <CardContent className=' text-black justify-end place-content-end'>
                      <p className='text-sm font-semibold ml-4 text-gray-900'>
                        {vitals_.value}
                      </p>
                   </CardContent>
                </CardBody>
            ))
            :
            <>
              <CardContent>
                  <p>No data found for this user patient</p>
              </CardContent>
            </>
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
        <Dialog position='fixed' onClick={handleDialog} className='bg-gray-600 bg-opacity-20'>
          <Vitals></Vitals>
        </Dialog> : ""}
    </SummaryCard>
  )
}

