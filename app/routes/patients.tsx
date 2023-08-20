import React from 'react'
import { Typography,Button} from '@material-tailwind/react'
import { useState } from 'react'
import { LoaderFunction,} from "@remix-run/node";
import {requireUserId} from "~/utils/auth.server";
import { getPatients,registerPatient } from '~/utils/patient.server';
import {BsPeopleFill} from 'react-icons/bs'
import {MdGroupRemove} from 'react-icons/md'
import { BiPlus } from 'react-icons/bi';
import Dialog from '~/componets/dialog';
import Container from '~/componets/container';
import NewPatient from '~/componets/newpatient';
import { Form , useNavigation,useActionData,useLoaderData} from "@remix-run/react";
import { ActionFunction , json} from '@remix-run/node';
import { validateEmail,validatePassword,validateName} from '~/utils/validator.server';
import NavBar from '~/componets/navbar';
import SideNavContainer from "~/componets/sidenavcontainer";
import Sidenav from "~/componets/sidenav";
import Head from '~/componets/appointments/head';
export const loader: LoaderFunction = async({request})=>
{
  const userId = await requireUserId(request)
  const patient = await getPatients(userId)
  //console.log("patients from : ",patient[0].firstName)

  return json({patient})
}



export default function Patients() {

    const [open, setOpen] = useState(false);
    const handleDialog = () => setOpen(!open);
    const {patient} = useLoaderData()
    const numberofPatients = patient.length


    const data_ = [
        {
            name:"Deleted",
            value:"0",
            icon:MdGroupRemove
        },
        {
            name:"total",
            value:numberofPatients.toString(),
            icon:BsPeopleFill
        }
    ]

  return (
    <>
        <NavBar />
        <Sidenav>
            <SideNavContainer/>
        </Sidenav>
        <div className="relative flex flex-col gap-2 p-2 md:p-4 top-32 rounded-lg lg:left-[10vw] w-full lg:w-3/4 md:mx-auto md:w-full">
            <div className='flex flex-col gap-1 justify-start'>
                <Typography variant="h4" className="flex flex-row place-items-center gap-3 text-gray-900 font-bold">
                    <p>My Patients</p>
                    <div  onClick={handleDialog} className='bg-gray-900 flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-100'>
                        <BiPlus className='w-5 h-5 text-white' />
                    </div>
                </Typography>
            </div>
            <Head data={data_} className='mt-6'></Head>
            <div className=''>
                <Container data={patient} />
            </div>
            {open?
              <Dialog position="fixed" onClick={handleDialog} className='bg-gray-600 bg-opacity-20'>
                    <NewPatient />
              </Dialog> :""}
        </div>
    </>
  )
}

export const action: ActionFunction = async ({request})=>
{
    const form = await request.formData()
    let firstName = form.get("firstName")
    let lastName = form.get("lastName")
    let idNumber = form.get("idNumber")
    let gender = form.get("gender")
    let contact = form.get('phone')
    let dob =  form.get('dob')
    let reason = form.get('reason')
    let payment = form.get("payment")
    const userId = await requireUserId(request)

    const action = "register"

    if(typeof firstName !== "string" || typeof lastName !== 'string' || typeof idNumber !== 'string' || typeof reason !== 'string' || typeof payment !== 'string')
    {
        return json(
            {
                error:"invalid form data",
                form:action
            },
            {
                status:400
            }
        )
    }

    const errors = 
    {
        firstName:validateName(firstName),
        lastName:validateName(lastName),
        idNumber:validateName(idNumber),
    }

    if(Object.values(errors).some(Boolean))
    {
        return json({
            errors,fields:
            {
                firstName,lastName,contact,idNumber
            }
        })
    }

    switch(action)
    {
        case'register':
        {
            firstName = firstName as string
            lastName = lastName as string
            idNumber = idNumber as string
            gender = gender as string
            dob = dob as string
            contact = contact as string
            let  dobStr = new Date(dob).toDateString()
            reason = reason as string
            payment = payment as string

            return await registerPatient({firstName, lastName,gender,idNumber,contact, dobStr, reason, payment,userId})
        }
        default:
            return json({error:'invalid form data'},{status:400})
    }
}