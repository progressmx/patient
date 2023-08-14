import React from 'react'
import VitalsSummary from './vitalsSummary'
import NotesSummary from './notesSummary'
import TreatmentSummary from './treatmentSummary'
import {LiaWeightHangingSolid} from 'react-icons/lia'
import {CiTempHigh} from 'react-icons/ci'
import {GiMedicalDrip} from 'react-icons/gi'
import { json } from '@remix-run/node'
import { LoaderFunction,} from '@remix-run/node'
import { requireUserId } from '~/utils/auth.server'
import { getVitals } from '~/utils/vitals.server'
import { useLoaderData } from '@remix-run/react'



const date = new Date(1).toDateString()
const notes_data = [

    {
        title:"first",
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus",
        date: date
    },
    {
        title:"Second",
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus",
        date: date
    }
]
const treat_data = [

    {
        medication:"Paracetamol ",
        dosage: "take 2 tablets 3x",
        duration: "7 days"
    },
    {
        medication:"Amoxicillin",
        dosage: "take 1 tablets 3x",
        duration: "15 days"
    }
]


export default function Summary() {

    const {vitals} = useLoaderData()
    const {notes} = useLoaderData()
    // console.log(vitals)
  return (
    <div className='flex flex-col gap-2'>
        {/* <div className='mb-6'>
            <p className='text-lg font-semibold'>Patient Visit Summary</p>
        </div> */}
        <div className='flex flex-col md:flex-row gap-4'>
            <VitalsSummary vitals={vitals} />
            <NotesSummary notes={notes} className='border-b-[1px] border-gray-200 hover:cursor-pointer'/>
        </div>
        <TreatmentSummary medication={treat_data} />
    </div>
  )
}