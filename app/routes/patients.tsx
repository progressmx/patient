import React from 'react'
import { Typography,Button,Dialog} from '@material-tailwind/react'
import { useState } from 'react'
import { LoaderFunction,} from "@remix-run/node";
import { getPatients, requireUserId, registerPatient} from "~/utils/auth.server";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import PatientContainer from '~/componets/container';
import NewPatient from '~/componets/newpatient';
import { Form , useNavigation,useActionData,useLoaderData} from "@remix-run/react";
import { ActionFunction , json} from '@remix-run/node';
import { validateEmail,validatePassword,validateName} from '~/utils/validator.server';
import NavBar from '~/componets/navbar';
import SideNavContainer from "~/componets/sidenavcontainer";
import Sidenav from "~/componets/sidenav";


export const loader: LoaderFunction = async({request})=>
{
  const userId = await requireUserId(request)
  const patient = await getPatients(userId)
  //console.log("patients from : ",patient[0].firstName)

  return json({patient})
}
export default function Patients() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const {patient} = useLoaderData()
    const numberofPatients = patient.length

  return (
    <>
        <NavBar />
        <Sidenav>
            <SideNavContainer/>
        </Sidenav>
        <div className="relative w-[90%] bg-white rounded-md lg:left-[25vw] lg:w-[65vw] flex flex-col mx-auto p-4 top-32 md:h-auto lg:m-[0] md:p-4 ">
            <div className='md:mx-auto md:w-full gap-6 p-4  md:flex-row md:border-b-[1px] md:border-gray-400'>
                <div className='w-full flex flex-col'>
                    <Typography varient="h3" className="flex flex-row gap-1 text-gray-900 text-bold text-2xl">
                        <p>"My patients"</p>
                        <p className="flex justify-center place-items-center text-sm px-2 md:text-xs rounded-full bg-gray-400 ">
                            {numberofPatients < 2?`${numberofPatients} patient` : `${numberofPatients} patients`}
                        </p>
                        <button onClick={handleOpen} className='text-sm md:text-xs'>
                            {!open? 
                                <><AiOutlinePlus className='bg-gray-800 justify-center h-5 w-5 place-items-center rounded-full text-white'/></>
                                : <><AiOutlineMinus className='bg-gray-800 justify-center h-5 w-5 place-items-center rounded-full text-white'/></>
                            }
                        </button>
                        
                    </Typography>
                </div>
            </div>
            <div className=''>
                {!open? <PatientContainer data={patient} /> : <NewPatient />}
            </div>
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
            dob = dob as string
            contact = contact as string
            let  dobStr = new Date(dob).toDateString()
            reason = reason as string
            payment = payment as string

            return await registerPatient({firstName, lastName,  idNumber,contact, dobStr,  reason, payment,userId})
        }
        default:
            return json({error:'invalid form data'},{status:400})
    }
}
