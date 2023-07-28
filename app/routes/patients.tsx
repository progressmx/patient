import React from 'react'
import { Typography,Button,Dialog} from '@material-tailwind/react'
import { useState } from 'react'
import { LoaderFunction,} from "@remix-run/node";
import { getPatients, requireUserId, registerPatient} from "~/utils/auth.server";
import { BsFillPersonPlusFill, BsFillEyeFill} from 'react-icons/bs'
import PatientContainer from '~/componets/container';
import NewPatient from '~/componets/newpatient';
import { Form , useNavigation,useActionData,useLoaderData} from "@remix-run/react";
import { ActionFunction , json} from '@remix-run/node';
import { validateEmail,validatePassword,validateName} from '~/utils/validator.server';
import NavBar from '~/componets/navbar';

const patients = [
    {
      fullName: "John Michael",
      reason: "Consultation",
      date: "23/04/18",
    },
    {
      fullName: "Peter Rabbit",
      reason: "Bill payment",
      date: "23/04/18",
    },
    {
      fullName: "John Chibadura",
      reason: "Review",
      date: "23/04/18",
    },
    {
      fullName: "Lil Tunechi",
      reason: "Consultation",
      date: "23/04/18",
    },
  ];


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

    // console.log("pat : ",patient)

  return (
    <>
         <NavBar />
        <div className="relative flex flex-col mx-auto p-8 top-20 md:h-auto md:m-[0] md:p-8 ">
            <div className='flex flex-row'>
                <div className='w-2/4 flex flex-col'>
                    <Typography varient="h3" className="text-gray-900 text-bold text-2xl">
                        {!open? "My patients":""}
                    </Typography>
                    <Typography varient="lead" className="text-gray-900 opacity-80">
                    {!open? " List of all the patients you captured":""}
                    </Typography>
                </div>
                <div className='flex justify-end w-2/4'>
                    <button onClick={handleOpen} className='flex flex-row bg-blue-800 gap-2 w-[50%] justify-center place-items-center h-8 md:p-4 md:w-[40%] rounded text-white'>
                        {!open? <>Add new <BsFillPersonPlusFill/></>: <>View <BsFillEyeFill/></>}
                    </button>
                </div>
            </div>
            <div>
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