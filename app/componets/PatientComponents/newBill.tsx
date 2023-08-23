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
        name:"billName",
        label:"Bill Name"
    },
]

export default function NewBill() {
    
    const error = useActionData()

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

  return (
    <SummaryCard>
        <CardHeader className='text-[#0068ff] flex-col gap-1'>
            <h3 className='text-lg font-bold '>Add a new bIll</h3>
            {error?.message && <p className='text-red-700 font-semibold text-sm'>{error.message}</p>}
        </CardHeader>
      <Form method='post'>
            {
                notes.map((note)=>(
                    <CardBody key={note.name} >
                        <Input name={note.name} label={note.label} required/>
                    </CardBody>
                ))
            }
            <input type='hidden' name="action" value="newBill"></input>
            <CardBody>
            <Button disabled={isSubmitting} type='submit' color='red'> {isSubmitting ? 'Creating Bill': 'Create Bill'}</Button>
            </CardBody>
      </Form>
        
    </SummaryCard>
  )
}