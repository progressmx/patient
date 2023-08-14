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
    <div className='w-[80vw] md:w-[70vw]'>
        <AppointmentList data={appointmentData}></AppointmentList>
    </div>
  )
}