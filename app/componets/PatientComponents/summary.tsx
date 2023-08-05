import React from 'react'
import VitalsSummary from './vitalsSummary'
import NotesSummary from './notesSummary'
import TreatmentSummary from './treatmentSummary'

const vitals = [
    {
        name:"temperature",
        label:"36.6",
    },
    {
        name:"Weight",
        label:"76 kg",
    },
    {
        name:"BP",
        label:"120 / 80",
    },
]

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
  return (
    <div className='flex flex-col gap-2 '>
        <div className='mb-6'>
            <p className='text-lg font-semibold'>Patient Visit Summary</p>
        </div>
        <VitalsSummary input_bundle={vitals} />
        <NotesSummary notes={notes_data} className='hover:bg-blue-50 hover:cursor-pointer'/>
        <TreatmentSummary medication={treat_data} className='hover:bg-blue-50 hover:cursor-pointer' />
    </div>
  )
}