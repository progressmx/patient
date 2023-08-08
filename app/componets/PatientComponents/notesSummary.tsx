import React from 'react'
import { Notes } from '../types'
import { BsFillPersonPlusFill, BsFillEyeFill} from 'react-icons/bs'
import {BiExpandAlt,BiPlus} from 'react-icons/bi'
import {LiaTimesSolid} from 'react-icons/lia'
import SummaryCard from './summaryCard'
import CardBody from './cardBody'
import CardFooter from './cardFooter'
import CardHeader from './cardHeader'
import CardContent from './cardContent'

export default function NotesSummary(props: Notes) {
  return (
    <SummaryCard>
      <CardHeader className='text-[#0068ff]'>
        <h3 className='text-lg font-bold '>Notes</h3>
        <div className=' flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-300'>
              <BiExpandAlt className='w-5 h-5'/>
          </div>
      </CardHeader>

         {
            props.notes.map((note) => (
                <CardBody key={note.title} className='border-b-[1px] border-gray-200'>
                  <CardContent className='flex-col'>
                      <p className='text-sm font-semibold ml-4 text-gray-900'>
                        {note.title} Title
                      </p>
                      <p className='ml-4 text-gray-900 text-xs opacity-80'>{note.date}</p>
                  </CardContent>
                  <CardContent className='text-black justify-end place-content-end'>
                      <div className='bg-gray-300  flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-100'>
                        <BiExpandAlt className='w-5 h-5 '/>
                      </div>
                      <div className='bg-gray-300 flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-100'>
                        <LiaTimesSolid className='w-5 h-5 ' />
                      </div>
                  </CardContent>
                </CardBody>
                
            ))
        }
      <CardFooter>
        <div className='bg-gray-300 flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-100'>
          <BiPlus className='w-5 h-5 ' />
        </div>
        <p className='text-[#0068ff] text-sm font-bold'>
          add new note
        </p>
      </CardFooter>
       
    </SummaryCard>
  )
}