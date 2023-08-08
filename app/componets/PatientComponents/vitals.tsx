import React from 'react'
import { Input } from '@material-tailwind/react'
import {BiExpandAlt} from 'react-icons/bi'
import SummaryCard from './summaryCard'
import CardBody from './cardBody'
import CardHeader from './cardHeader'


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

function Vitals() {
  return (
    <SummaryCard>
        <CardHeader className='text-[#0068ff]'>
            <h3 className='text-lg font-bold '>Record new vitals</h3>
        </CardHeader>
        {
            vitals.map((vitals)=>(
                <CardBody key={vitals.name} >
                    <Input name={vitals.name} label={vitals.label} />
                </CardBody>
            ))
        }
    </SummaryCard>
  )
}

export default Vitals