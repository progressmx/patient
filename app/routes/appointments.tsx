import React from 'react'
import { Typography,Button} from '@material-tailwind/react'
import { useState } from 'react'
import { LoaderFunction,} from "@remix-run/node";
import {requireUserId} from "~/utils/auth.server";
import {BsCalendar2X,BsCalendar4Event,BsCalendarWeek,BsClock} from 'react-icons/bs'
import { BiPlus } from 'react-icons/bi';
import { Form , useNavigation,useActionData,useLoaderData} from "@remix-run/react";
import { ActionFunction , json} from '@remix-run/node';
import NavBar from '~/componets/navbar';
import SideNavContainer from "~/componets/sidenavcontainer";
import Sidenav from "~/componets/sidenav";
import { getUser } from '~/utils/auth.server';
import Head from '~/componets/appointments/head';
import Tabs from '~/componets/tabs';
import TabData from '~/componets/tabData';
import Day from '~/componets/appointments/day';
import Week from '~/componets/appointments/week';
import Month from '~/componets/appointments/month';
import Dialog from '~/componets/dialog';
import NewAppoinment from '~/componets/appointments/new';
import { createAppointments, getAppointments } from '~/utils/appointment.server';

const tabHead = [
    {
      label: "Day",
      route: "day",
    },
    {
      label: "Week",
      route: "week",
    },
    {
      label: "Month",
      route: "month",
    },
  ];
  
const appointmentComponets = [
    {
      label:"day",
      component:Day
    },
    {
      label:"week",
      component:Week
    },
    {
      label:"month",
      component:Month
    }
  ]

const data_ = [
    {
        name:"today",
        value:"3/10",
        icon:BsCalendar4Event
    },
    {
        name:"cancelled",
        value:"4/10",
        icon:BsCalendar2X
    },
    {
        name:"total",
        value:"10",
        icon:BsCalendarWeek
    }
]


export const loader: LoaderFunction = async({request})=>
{
  const userId = await requireUserId(request)
  const appointments = await getAppointments(userId)
  return appointments
}


function Appointments() {

  const [open, setOpen] = useState(false);
  const handleDialog = () => setOpen(!open);

    const {userId} = useLoaderData()
    const date = new Date().toDateString();

    const jointime =  new Date().toString();
    const time = new Date(jointime).toLocaleTimeString()

  return (
    <>
        <NavBar />
        <Sidenav>
            <SideNavContainer/>
        </Sidenav>
        <div className="relative p-4 top-32 rounded-lg lg:left-[10vw] w-[100%] lg:w-[75vw] mx-auto md:mx-auto md:w-full">
            <div className='flex flex-col gap-1 justify-start'>
              <Typography variant="h4" className="flex flex-row place-items-center gap-3 text-gray-900 font-bold">
                  <p>Appointments</p>
                  <div  onClick={handleDialog} className='bg-gray-900 flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-100'>
                    <BiPlus className='w-5 h-5 text-white' />
                  </div>
              </Typography>
              <Typography className='flex flex-row text-gray-700 text-sm font-semibold'>
                <p className='mr-6 flex flex-row gap-2'><BsCalendar4Event className='h-4 w-4 text-gray-900'/>{`${date}`}</p>
                <p className='flex flex-row gap-2'><BsClock className='h-4 w-4 text-gray-900' />{`${time}`}</p>
              </Typography>
            </div>
            <Head data={data_} className='mt-10'></Head>
            <Tabs>
                <TabData tab_header={tabHead} tab_body={appointmentComponets} className='p-1 border-b-[1px] border-gray-500 mx-auto'>
                </TabData>
            </Tabs>

            {open?
              <Dialog position="fixed" onClick={handleDialog} className='bg-gray-600 bg-opacity-20'>
                <NewAppoinment></NewAppoinment>
              </Dialog> :
              
              ""}
        </div>
    </>
  )
}

export default Appointments

export const action: ActionFunction = async ({request, params})=>
{
  const form = await request.formData()
  const action = form.get('action')
  const userId = await requireUserId(request)


  if(action == "newApt")
  {
      let firstName = form.get("firstName") as string
      let lastName = form.get("lastName") as string
      let reason = form.get("reason") as string

      let getstartTime =  form.get('startTime') as string
      const startTime =  new Date(getstartTime)
      
      let getendTime =  form.get('endTime')as string
      const endTime =  new Date(getendTime)

      const joinDate =  new Date();
      const createdOn= new Date(joinDate).toDateString();
      // console.log("date : ",new Date(new Date(getstartTime).toString()))

      if (Math.floor((Number(startTime) - Number(joinDate)) / (60*1000) + 1) < 0)
      {
       
        return {message : `invalid start time`}
      }
      else if(Math.floor((Number(endTime) - Number(startTime)) / (60*1000) + 1) <= 0)
      {
        return {message : "invalid end time"}
      }
      else if(Math.floor((Number(startTime) - Number(joinDate)) / (3600*24*1000) + 1) > 30)
      {
        return {message : "appointment should be within a month from today"}
      }
      else
      {
        const startTimeString  = new Date(getstartTime).toString()
        const endTimeString  = new Date(getendTime).toString()

        return await createAppointments({firstName,lastName,reason,startTimeString,endTimeString,createdOn,userId})
      }
      
      
      
  }
 
  else{
      
      return json({error:'Cannot access this page contact the Addmin for more information'},{status:400})
  }
}