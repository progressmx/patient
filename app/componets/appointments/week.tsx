import React from 'react'
import ParentContainer from '../parentcontainer'
import ContianerBody from '../containerbody'
import { useLoaderData } from '@remix-run/react'
import AppointmentList from './apList'



export default function Week() {


    let appointmentData = []
    const appointment = useLoaderData()

    for (let index = 0; index < appointment.length; index++) {
      
        const startTime = new Date(appointment[index].startTime)
        const joinDate =  new Date();
        

        const time = Math.floor((Number(startTime) - Number(joinDate)) / (3600*24*1000) + 1)

        if(time <= 7 && time >= 1 )
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