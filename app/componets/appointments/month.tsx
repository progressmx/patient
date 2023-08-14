import React from 'react'
import ParentContainer from '../parentcontainer'
import ContianerBody from '../containerbody'
import { useLoaderData } from '@remix-run/react'
import AppointmentList from './apList'



export default function Month() {


    let appointmentData = []
    const appointment = useLoaderData()

    for (let index = 0; index < appointment.length; index++) {
      
        const startTime = new Date(appointment[index].startTime)
        const joinDate =  new Date();
        const time = Math.floor((Number(startTime) - Number(joinDate)) / (3600*24*1000) + 1)
        
        if(time <= 30 && time >= 8)
        {
          appointmentData.push(appointment[index])
        }
    }

  return (
    <div className='w-[80vw] md:w-[70vw]'>
        <AppointmentList type="month" data={appointmentData}></AppointmentList>
    </div>
  )
}