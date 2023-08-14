import React from 'react'
import ParentContainer from '../parentcontainer'
import ContianerBody from '../containerbody'


function convertToHours (hours:string)
{
    if(hours[4] == ":")
    {
        return hours.slice(0,4)
    }
    else
    {
        return hours.slice(0,5)
    }
}

function getNumDays(starts:string)
{
    const start = new Date(starts)
    const today = new Date()

    return Math.floor((Number(start) - Number(today)) / (3600*24*1000) + 1)
}

type Children = 
{
    className?:string
    type?:string
    data:
    {
        id: number
        firstName: string,
        lastName: string,
        reason: string
        createdOn:string
        startTime: string
        status: string
        endTime: string
        createdBy: number
    }[]
}

function AppointmentList(props:Children) {
  return (
    <div>
       {
            props.data.map((appointment)=>(

                <ParentContainer key={appointment.id} className='bg-white'>
                <ContianerBody className='flex-col gap-1 md:w-[30%] justify-start'>
                    <p className="hidden md:block text-lg md:text-sm font-semibold leading-6 text-gray-700">
                        Name
                    </p>
                    <p className="text-lg md:text-sm font-semibold leading-6 text-gray-900">
                        {appointment.firstName} {appointment.lastName}
                    </p>
                </ContianerBody>
                <ContianerBody className='flex-col gap-1 md:w-[15%] justify-start'>
                    <p className="hidden md:block text-lg md:text-sm font-semibold leading-6 text-gray-700">
                        Time
                    </p>
                    <p className="text-lg md:text-sm font-semibold leading-6 text-gray-900">
                        {props.type === "week" || props.type === "month"?

                            <>
                                {getNumDays(appointment.startTime) >= 7?
                                    <>
                                        {Math.floor(getNumDays(appointment.startTime) / 7) + " week(s) left" }
                                    </>
                                     : 
                                     <>
                                        {getNumDays(appointment.startTime) + " days left"}
                                    </>}
                            </>
                         :
                         <>{convertToHours(new Date(appointment.startTime).toLocaleTimeString()) } - {convertToHours(new Date(appointment.endTime).toLocaleTimeString())}</>
                         }
                    </p>
                </ContianerBody>
                <ContianerBody className='flex-col gap-1 md:w-[30%] justify-start'>
                    <p className="hidden md:block text-lg md:text-sm font-semibold leading-6 text-gray-700">
                        Reason
                    </p>
                    <p className="text-lg md:text-sm font-semibold leading-6 text-gray-900">
                        {appointment.reason}
                    </p>
                </ContianerBody>
                <ContianerBody className='gap-4 justify-center place-content-center place-items-center md:w-[20%] bg-[#0068ff] p-2 rounded-lg hover:cursor-pointer'>
                    <p className="text-lg md:text-sm font-semibold leading-6 text-white">
                        cancel
                    </p>
                </ContianerBody>
            </ParentContainer>


            ))

       }
    </div>
  )
}

export default AppointmentList