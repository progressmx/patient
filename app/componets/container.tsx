import React from "react"
import type { objType } from "./types"
import ConatinerBody from "./conatinerbody"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { Typography} from "@material-tailwind/react"
import Button from "./button"

export default function PatientContainer(props: objType)
{
  return (
    <div className='flex flex-col gap-4 mt-6'>
        {
            props.data.map((patient)=>(
                <div key={patient.id} className="flex flex-col gap-4 p-4 shadow rounded border-[1px] border-gray-400 md:flex-row">
                    <ConatinerBody className=" md:w-[30%]">{patient.firstName} {patient.lastName}</ConatinerBody>
                    <ConatinerBody className=" md:w-[30%]">{patient.reason}</ConatinerBody>
                    <ConatinerBody className=" md:w-[30%]">{patient.paymentMethod}</ConatinerBody>
                    <ConatinerBody className=" md:w-[30%]">{patient.createdOn}</ConatinerBody>
                    <ConatinerBody className=" md:w-[10%]">
                        <Button className="bg-green-500 p-1">
                            Edit <AiOutlineEdit className='w-5 h-5'></AiOutlineEdit>
                        </Button>
                    </ConatinerBody>
                    <ConatinerBody className="md:w-[10%]">
                        <Button className="bg-red-500 p-1">
                            Delete <AiOutlineDelete className='w-5 h-5'></AiOutlineDelete>
                        </Button>
                    </ConatinerBody>
                </div>
            ))
        }
    </div>
  )
}
