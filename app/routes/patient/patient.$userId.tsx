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

export const loader: LoaderFunction = async({request, params})=>
{
  const {userId} = params

 
  return json({userId})
}

export default function patientFile() {

    const {patient} = useLoaderData()

  return (
    <div>
        this is patient {patient}
    </div>
  )
}
