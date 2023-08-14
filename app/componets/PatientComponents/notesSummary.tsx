import React from 'react'
import { Notes, notesType } from '../types'
import { BsFillPersonPlusFill, BsFillEyeFill} from 'react-icons/bs'
import {BiExpandAlt,BiPlus} from 'react-icons/bi'
import {LiaTimesSolid} from 'react-icons/lia'
import SummaryCard from './summaryCard'
import CardBody from './cardBody'
import CardFooter from './cardFooter'
import CardHeader from './cardHeader'
import CardContent from './cardContent'
import Dialog from '../dialog'
import { useState } from 'react'
import NewNote from './newnote'

export default function NotesSummary(props: notesType) {

    const [open, setOpen] = useState(false);
    const handleDialog = () => setOpen(!open);

    const notes = []
    let size = 0
    try{
      size = Object.keys(props.notes[0]).length
    }
    catch
    {
      size = 0
    }
  
    
    if(size > 0)
    {
       for (let index = 0; index < size; index++) {
         
         let labels = Object.keys(props.notes[0])[index]
   
         if(labels != 'id')
         {
           labels = labels as string
           const values = props.notes[0][labels]
   
           notes.push({label:labels, date:values})
         }
       }
    }

  return (
    <SummaryCard>
      <CardHeader className='text-[#0068ff]'>
        <h3 className='text-lg font-bold '>Notes</h3>
        <div className=' flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-300'>
              <BiExpandAlt className='w-5 h-5'/>
          </div>
      </CardHeader>

         {size > 0?
            props.notes.map((note) => (
                <CardBody key={note.id} className='border-b-[1px] border-gray-200'>
                  <CardContent className='flex-col'>
                      <p className='text-sm font-semibold ml-4 text-gray-900'>
                        {note.presentComplain}
                      </p>
                      <p className='ml-4 text-gray-900 text-xs opacity-80'>{note.createdOn}</p>
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
            :
            <>
              <CardContent>
                  <p>No notes found for this patient</p>
              </CardContent>
            </>
        }
      <CardFooter>
        <div  onClick={handleDialog} className='bg-gray-300 flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-100'>
          <BiPlus className='w-5 h-5 ' />
        </div>
        <p className='text-[#0068ff] text-sm font-bold'>
          add new note
        </p>
      </CardFooter>
      {open?
        <Dialog position='fixed' onClick={handleDialog} className='bg-gray-600 bg-opacity-20 overflow-y-auto'>
          <NewNote></NewNote>
        </Dialog> : ""}
       
    </SummaryCard>
  )
}