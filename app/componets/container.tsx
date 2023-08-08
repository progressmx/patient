import React,{useState} from "react"
import type { objType } from "./types"
import ConatinerBody from "./conatinerbody"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { Typography} from "@material-tailwind/react"
import Button from "./button"
import { useNavigate,NavLink} from "@remix-run/react"
import { BsFillPersonPlusFill, BsFillEyeFill} from 'react-icons/bs'


export default function PatientContainer(props: objType)
{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const navigate = useNavigate()
    const numberofPatients = props.data.length

  return (

    <div className=''>
        {
            props.data.map((patient)=>(
                <div key={patient.id} className="flex bg-[#e6e6e6] rounded-md flex-col m-4 md:mx-auto md:w-full gap-6 p-4  md:flex-row">
                    <ConatinerBody className="flex flex-col md:w-[30%]">
                        <p className="text-lg md:text-sm font-semibold leading-6 text-gray-900">
                            {patient.firstName} {patient.lastName}
                        </p>
                        <p className="mt-1 text-sm md:text-xs leading-5 text-gray-700">
                            {patient.reason}
                       </p>
                    </ConatinerBody>
                    <ConatinerBody className=" md:w-[30%]">
                        <p className="text-sm leading-6 text-gray-900 font-semibold">
                            {patient.paymentMethod}
                        </p>
                       <p className="mt-1 truncate text-sm md:text-xs leading-5 text-gray-700">
                            created on : {patient.createdOn}
                        </p>
                    </ConatinerBody>
                    <ConatinerBody className="flex md:justify-end md:place-content-end md:w-[30%]">
                        <NavLink className="flex justify-center place-items-center bg-[#0068ff] w-[40%] rounded-md md:w-[80%] lg:w-[40%] h-9 md:h-9" to={`/patients_file/${patient.id}`}>
                            <Button className="text-white">
                                    view file
                            </Button> 
                        </NavLink>
                    </ConatinerBody>
                </div>
            ))
        }
    </div>
  )
}
