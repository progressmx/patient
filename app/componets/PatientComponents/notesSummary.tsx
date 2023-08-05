import React from 'react'
import { Notes } from '../types'
import { BsFillPersonPlusFill, BsFillEyeFill} from 'react-icons/bs'
import {BiExpandAlt} from 'react-icons/bi'
import {LiaTimesSolid} from 'react-icons/lia'
export default function NotesSummary(props: Notes) {
  return (
    <div className='flex flex-col md:flex-row mt-6 gap-4 md:gap-2'>
         {
            props.notes.map((note) => (
                <div key={note.title} className={`flex flex-col justify-left place-content-left
                 mx-auto md:mx-2 w-[90%] md:w-[25%] p-2
                 bg-white rounded-3xl ${props.className}`}
                 >
                    <p className='text-lg ml-4 md:text-l font-semibold text-gray-900'>{note.title} Title</p>
                    <p className='ml-4 text-gray-800'>{note.note}</p>
                    
                    <div className='flex flex-row gap-2 mt-8 p-1 text-black justify-end place-content-end'>
                       <div className='bg-gray-300  flex justify-center place-items-center w-8 h-8 rounded-full hover:bg-gray-300'><BiExpandAlt className='w-5 h-5 '/></div>
                       <div className='bg-gray-300 flex justify-center place-items-center w-8 h-8 rounded-full hover:bg-gray-300'> <LiaTimesSolid className='w-5 h-5 ' /></div>
                    </div>
                </div>
                
            ))
        }
       
    </div>
  )
}