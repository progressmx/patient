import React,{useState} from "react"
import type { objType } from "./types"
import ContainerBody from "./containerbody"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { Typography} from "@material-tailwind/react"
import Button from "./button"
import { useNavigate,NavLink} from "@remix-run/react"
import { BsFillPersonPlusFill, BsFillEyeFill} from 'react-icons/bs'
import ParentContainer from '~/componets/parentcontainer';
import ColumnTag from "./PatientComponents/columntag"

function getAge(year:string)
{
    const startTime = year.slice(year.length-4 ,year.length)
    const current =  new Date().toDateString();
    const current_year = current.slice(current.length-4 ,current.length)

    const dob = +startTime
    const today = +current_year

    return today - dob
}

export default function Container(props: objType)
{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const navigate = useNavigate()
    const numberofPatients = props.data.length

  return (

    <div className=''>
        {
            props.data.map((patient)=>(
                <ParentContainer key={patient.id} className={`bg-white ${props.className}`}>
                    <ColumnTag
                        className="flex-col md:w-[30%]"
                         columnName="Name"
                         columnNameColor="text-gray-500"
                         columnDataColor="text-black"
                         columnData={`${patient.firstName} ${patient.lastName}`}
                         >
                    </ColumnTag>
                    <ColumnTag
                        className="md:w-[15%]"
                         columnName="Gender"
                         columnNameColor="text-gray-500"
                         columnDataColor="text-black"
                         columnData={`${patient.gender}`}
                         >
                    </ColumnTag>
                    <ColumnTag
                        className="md:w-[15%]"
                         columnName="Age"
                         columnNameColor="text-gray-500"
                         columnDataColor="text-black"
                         columnData={`${getAge(patient.dob)}`}
                         >
                    </ColumnTag>
                    <ColumnTag
                        className="md:w-[15%]"
                         columnName="P.Method"
                         columnNameColor="text-gray-500"
                         columnDataColor="text-black"
                         columnData={`${patient.paymentMethod}`}
                         >
                    </ColumnTag>
                    <ColumnTag className="md:w-[20%]">
                        <NavLink className="flex justify-center place-items-center bg-[#0068ff] w-[40%] rounded-md md:w-[80%] lg:w-[40%] h-9 md:h-9" to={`/patients_file/${patient.id}`}>
                            <Button className="text-white">
                                    Details
                            </Button> 
                        </NavLink>
                    </ColumnTag>
                </ParentContainer>
            ))
        }
    </div>
  )
}
