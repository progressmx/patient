import React from 'react'
import ParentContainer from '../parentcontainer'
import ContianerBody from '../containerbody'
import {AiOutlineCheckCircle} from "react-icons/ai"
import {BiLoader} from "react-icons/bi"
import {ImCancelCircle} from "react-icons/im"
import { Form } from '@remix-run/react'
import { Button } from '@material-tailwind/react'
import {BsCalendar4Event,BsClock} from 'react-icons/bs'
import { FaRegStickyNote } from 'react-icons/fa'
import { LiaStickyNote } from 'react-icons/lia'
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

function getMinutes(starts:string)
{
    const start = new Date(starts)
    const today = new Date()

    return Math.floor((Number(start) - Number(today)) / (60*1000))
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
    <>
       {
            props.data.map((appointment)=>(
                <ParentContainer key={appointment.id} className='bg-white'>
                    <ContianerBody className='flex-col gap-1 md:w-[20%] justify-start'>
                        <p className="text-lg hidden md:block md:text-sm font-semibold leading-6 text-gray-700">
                            Name
                        </p>
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                            {appointment.firstName} {appointment.lastName}
                        </p>
                    </ContianerBody>
                    <ContianerBody className='flex-row gap-2 my-3 md:my-auto md:hidden justify-start'>
                        <p className="block text-lg md:text-sm font-semibold leading-6 text-gray-700">
                            <BsCalendar4Event className='w-5 h-5 text-black'/>
                        </p>
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                            {new Date(appointment.startTime).toDateString()}
                        </p>
                    </ContianerBody>
                    <ContianerBody className='flex-row md:flex-col gap-2 md:gap-1 md:w-[20%] justify-start'>
                        <p className="flex flex-col md:flex-row l text-lg md:text-sm font-semibold leading-6 text-gray-700">
                          <BsClock  className='w-5 h-5 text-black md:hidden'/> <span className='hidden md:block'>Time</span>
                        </p>
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                            {props.type === "week" || props.type === "month"?

                                <>
                                    {getNumDays(appointment.startTime) >= 7?
                                        <>
                                            {new Date(appointment.startTime).toDateString()}
                                        </>
                                        : 
                                        <>
                                            {new Date(appointment.startTime).toDateString()}
                                        </>}
                                </>
                            :
                            <>{convertToHours(new Date(appointment.startTime).toLocaleTimeString()) } - {convertToHours(new Date(appointment.endTime).toLocaleTimeString())}</>
                            }
                        </p>
                    </ContianerBody>
                    <ContianerBody className='flex row gap-2 my-3 md:my-auto md:flex-col md:gap-1 md:w-[25%] justify-start'>
                        <p className="flex flex-row md:flex-row text-lg md:text-sm font-semibold leading-6 text-gray-700">
                            <LiaStickyNote className='w-5 h-5 text-black md:hidden'/> <span className='hidden md:flex'>Reason</span> 
                        </p>
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                            {appointment.reason}
                        </p>
                    </ContianerBody>
                {appointment.status === "cancelled"?
                    <ContianerBody className='gap-4 justify-center place-content-center place-items-center mt-4 md:mt-auto  w-[50%] md:w-auto bg-gray-200 p-2 rounded-lg hover:cursor-pointer'>
                        <p className="flex flex-row gap-2 justify-center place-items-center text-lg md:text-sm font-semibold leading-6 text-red-600">
                            <ImCancelCircle className='w-5 h-5'/> cancelled
                        </p>
                    </ContianerBody>
            
                    :

                    <>
                        {getMinutes(appointment.startTime) < 0 && appointment.status != "cancelled"?
                            <>
                                {getMinutes(appointment.endTime) >= 1?

                                    <ContianerBody className='gap-4 justify-center place-content-center place-items-center mt-4 md:mt-auto  w-[50%] md:w-auto bg-gray-200 p-2 rounded-lg hover:cursor-pointer'>
                                        <p className="flex flex-row gap-2 justify-center place-items-center text-lg md:text-sm font-semibold leading-6 text-blue-600">
                                            <BiLoader className='w-5 h-5'/> in progress
                                        </p>
                                    </ContianerBody>

                                    :
                                    <ContianerBody className='gap-4 justify-center place-content-center place-items-center mt-4 md:mt-auto w-[50%] md:w-auto bg-gray-200 p-2 rounded-lg hover:cursor-pointer'>
                                        <p className="flex flex-row gap-2 justify-center place-items-center text-lg md:text-sm font-semibold leading-6 text-green-600">
                                            <AiOutlineCheckCircle className='w-5 h-5'/> completed
                                        </p>
                                    </ContianerBody>
                                }
                            </>
                        :
                            <ContianerBody className='gap-4 justify-center place-content-center place-items-center mt-4 md:mt-auto w-[50%] md:w-auto bg-[#0068ff] rounded-md hover:cursor-pointer'>
                                <Form method="post">
                                    <input type="hidden" name="status" value="cancelled"/>
                                        <input type="hidden" name="appointmentID" value={`${appointment.id}`}/>
                                        <input type="hidden" name="action" value="updateStatus"/>
                                    <Button type='submit' className="flex bg-transparent flex-row gap-2 justify-center place-items-center text-lg md:text-sm font-semibold leading-6 text-white">
                                        <ImCancelCircle className='w-5 h-5'/> cancel
                                    </Button>
                                </Form>
                                
                                
                            </ContianerBody>
            
                        }
                    </>

                }
            </ParentContainer>


            ))

       }
    </>
  )
}

export default AppointmentList