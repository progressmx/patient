import React from "react"
import type { objType } from "./types"
import ConatinerBody from "./conatinerbody"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { Typography} from "@material-tailwind/react"
import Button from "./button"

export default function PatientContainer(props: objType)
{
  return (
    <div className='flex flex-col gap-4 m-2 mt-6 p-2 rounded-lg border-[1px] border-gray-300 md:p-6 lg:mx-auto md:m-9'>
        {
            props.data.map((patient)=>(
                <div key={patient.id} className="flex flex-col md:mx-auto md:w-[80%] gap-6 p-4 border-b-[1px] border-gray-100 md:flex-row">
                    <ConatinerBody className="flex flex-col md:w-[30%]">
                        <p className="text-lg md:text-sm font-semibold leading-6 text-gray-900">
                            {patient.firstName} {patient.lastName}
                        </p>
                        <p className="mt-1 text-sm md:text-xs leading-5 text-gray-500">
                            {patient.reason}
                       </p>
                    </ConatinerBody>
                    <ConatinerBody className=" md:w-[30%]">
                        <p className="text-sm leading-6 text-gray-900 font-semibold">
                            {patient.paymentMethod}
                        </p>
                       <p className="mt-1 truncate text-sm md:text-xs leading-5 text-gray-500">
                            created on : {patient.createdOn}
                        </p>
                    </ConatinerBody>
                    <ConatinerBody className="flex md:justify-end md:place-content-end md:w-[30%]">
                        <Button className="border-[1px] w-[40%] border-gray-400 md:w-[80%] lg:w-[40%] h-9 md:h-7">
                            view file
                        </Button>
                    </ConatinerBody>
                </div>
            ))
        }
    </div>
  )
}
