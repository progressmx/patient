import React from 'react'
import { Input } from '@material-tailwind/react'
import {BiExpandAlt} from 'react-icons/bi'
import SummaryCard from './summaryCard'
import CardBody from './cardBody'
import CardHeader from './cardHeader'
import {Textarea} from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'
import { Form , useNavigation,useActionData,useLoaderData} from "@remix-run/react";

const notes = [
    {
        name:"presentComplain",
        label:"Present complaint"
    },
]

export default function NewNote() {
  return (
    <SummaryCard>
        <CardHeader className='text-[#0068ff]'>
            <h3 className='text-lg font-bold '>Add new notes</h3>
        </CardHeader>

      <Form method='post'>
        {
                notes.map((note)=>(
                    <CardBody key={note.name} >
                        <Input name={note.name} label={note.label} required/>
                    </CardBody>
                ))
            }
            <CardBody>
                <Textarea name="complainHistory" label="History of present illness" required/>
            </CardBody>
            <CardBody>
                <Textarea name="medicalHistory" label="Past medical history" className='h-10' required/> 
            </CardBody>
            <CardBody>
                <Input name="diagnosis" label="diagnosis" />
            </CardBody>
            <input type='hidden' name="action" value="newNote"></input>
            <CardBody>
                <Button type='submit'>create</Button>
            </CardBody>
      </Form>
        
    </SummaryCard>
  )
}