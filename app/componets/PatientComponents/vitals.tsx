import React from 'react'
import { Input,Button } from '@material-tailwind/react'
import {BiExpandAlt} from 'react-icons/bi'
import SummaryCard from './summaryCard'
import CardBody from './cardBody'
import CardHeader from './cardHeader'
import { json } from '@remix-run/node'
import { requireUserId } from '~/utils/auth.server'
import { validateName } from '~/utils/validator.server'
import { ActionFunction } from '@remix-run/node'
import { setVitals } from '~/utils/vitals.server'
import { Form , useNavigation,useActionData,useLoaderData} from "@remix-run/react";

const vitals = [
    {
        name:"bp",
        label:"Blood Presure"
    },
    {
        name:"height",
        label:"Height"
    },
    {
        name:"temperature",
        label:"Temperature"
    },
    {
        name:"weight",
        label:"Weight"
    },
]

export default function Vitals() {
  return (
    <SummaryCard>
        <CardHeader className='text-[#0068ff]'>
            <h3 className='text-lg font-bold '>Record new vitals</h3>
        </CardHeader>
        <Form method='post'>
            {
                vitals.map((vitals)=>(
                    <CardBody key={vitals.name} >
                        <Input name={vitals.name} label={vitals.label} required/>
                    </CardBody>
                ))
            }
            <input type='hidden' name="action" value="vitals"></input>
            <CardBody>
                <Button className='mr-' type='submit'>Reacord</Button>
            </CardBody>
       </Form>
    </SummaryCard>
  )
}
