import React from 'react'
import { Input } from '@material-tailwind/react'
import {BiExpandAlt} from 'react-icons/bi'
import SummaryCard from './summaryCard'
import CardBody from './cardBody'
import CardHeader from './cardHeader'
import {Textarea} from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'

const notes = [
    {
        name:"complaint",
        label:"Present complaint"
    },
]

export default function NewNote() {
  return (
    <SummaryCard>
        <CardHeader className='text-[#0068ff]'>
            <h3 className='text-lg font-bold '>Add new notes</h3>
        </CardHeader>
        {
            notes.map((note)=>(
                <CardBody key={note.name} >
                    <Input name={note.name} label={note.label} />
                </CardBody>
            ))
        }
        <CardBody>
            <Textarea name="history_repeat" label="History of present illness" />
        </CardBody>
        <CardBody>
            <Textarea name="history" label="Past medical history" className='h-10' /> 
        </CardBody>
        <CardBody>
            <Input name="diagnosis" label="diagnosis" />
        </CardBody>
        <CardBody>
            <Button>create</Button>
        </CardBody>
        
    </SummaryCard>
  )
}