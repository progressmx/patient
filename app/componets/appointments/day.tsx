import React from 'react'
import ParentContainer from '../parentcontainer'
import ContianerBody from '../containerbody'
import { useLoaderData } from '@remix-run/react'
import AppointmentList from './apList'



export default function Day() {


    let appointmentData = []
    const appointment = useLoaderData()

    for (let index = 0; index < appointment.length; index++) {
      
        const startTime = new Date(appointment[index].startTime).toDateString();
        const joinDate =  new Date().toDateString();
        
        if(startTime == joinDate)
        {
          appointmentData.push(appointment[index])
        }
    }

  return (
    <div className='flex flex-col w-[75vw] md:w-[85vw] lg:w-[60vw] p-0 mx-auto'>
        <AppointmentList data={appointmentData}></AppointmentList>
    </div>
  )
}