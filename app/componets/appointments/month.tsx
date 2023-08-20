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
        
        if(time <= 30 && time >= 8 && appointment[index].status != "cancelled")
        {
          appointmentData.push(appointment[index])
        }
    }

  return (
    <div className='flex flex-col mx-auto md:mx-1 w-[90%] lg:w-3/4 md:w-[80%]'>
        <AppointmentList data={appointmentData}></AppointmentList>
    </div>
  )
}