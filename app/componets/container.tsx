import React,{useState} from "react"
import type { objType } from "./types"
import ContainerBody from "./containerbody"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { Typography} from "@material-tailwind/react"
// import Button from "./button"
import {Button} from "@material-tailwind/react"
import { useNavigate,NavLink} from "@remix-run/react"
import { BsFillPersonPlusFill, BsFillEyeFill} from 'react-icons/bs'
import ParentContainer from '~/componets/parentcontainer';
import ColumnTag from "./PatientComponents/columntag"
import { redirect } from "@remix-run/node"

function getAge(year:string)
{
    const startTime = year.slice(year.length-4 ,year.length)
    const current =  new Date().toDateString();
    const current_year = current.slice(current.length-4 ,current.length)

    const dob = +startTime
    const today = +current_year

    return today - dob
}
// function gotTo(url:string)
// {
//     return redirect(url)
// }

export default function Container(props: objType)
{
    const [id, setID] = useState("");
    const ChangeID = () => setID(id);


    const goToDetails = ()=>{return redirect("/patients_file/"+id)}

  return (

    <div className=''>
        {
            props.data.map((patient)=>(
                <ParentContainer key={patient.id} className={`bg-white ${props.className}`}>
                    <ColumnTag
                        className="md:w-[30%]"
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
                    <ContainerBody className="flex-row md:justify-center md:place-items-center gap-4 md:w-[30%] mt-4 md:mt-0">
                        <NavLink to={`/patients_file/${patient.id}`}>
                           <Button variant="outlined" className="text-black">
                                view
                            </Button> 
                        </NavLink>
                        <NavLink to="">
                            <Button variant="outlined" className="text-black">
                                Edit
                            </Button>
                        </NavLink>
                    </ContainerBody>
                </ParentContainer>
            ))
        }
    </div>
  )
}
