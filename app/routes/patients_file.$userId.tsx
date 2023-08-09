import { Typography,Button,Dialog} from '@material-tailwind/react'
import { useState } from 'react'
import { LoaderFunction,} from "@remix-run/node";
import { getPatients, requireUserId, registerPatient} from "~/utils/auth.server";
import {ImLab} from 'react-icons/im'
import {CiTempHigh} from 'react-icons/ci'
import {AiOutlineCalculator} from 'react-icons/ai'
import {BsCapsulePill} from 'react-icons/bs'
import {GoBook} from 'react-icons/go'
import {useLoaderData,useParams} from "@remix-run/react";
import { ActionFunction , json} from '@remix-run/node';
import NavBar from '~/componets/navbar';
import Tabs from '~/componets/tabs';
import TabData from '~/componets/tabData';
import Summary from '~/componets/PatientComponents/summary';
import {FaRegStickyNote} from 'react-icons/fa' 
import Sidenav from '~/componets/sidenav';
import SideNavContainer from '~/componets/sidenavcontainer';
import Vitals from '~/componets/PatientComponents/vitals';


const tabHead = [
  {
    label: "Summary",
    route: "summary",
    icons: GoBook
  },
  {
    label: "Treatment",
    route: "treatment",
    icons:BsCapsulePill
  },
  {
    label: "Lab",
    route: "lab",
    icons:ImLab
  },
  {
    label: "Billing",
    route: "bill",
    icons:AiOutlineCalculator
  },
];

const patientComponets = [
  {
    label:"summary",
    component:Summary
  },
  {
    label:"vitals",
    component:Vitals
  }
]


export const loader: LoaderFunction = async({request, params})=>
{
  const userId = params.userId as string
  const id = +userId
  const patient = await getPatients(id)
  return json({patient})
}

export default function patientFile() {

    const {patient} = useLoaderData()
  return (
    <>
      <NavBar />
      <Sidenav>
        <SideNavContainer/>
      </Sidenav>
      <div className="relative top-32 lg:top-24 rounded-lg lg:left-[10vw] w-[100%] lg:w-[75vw] mx-auto md:mx-auto md:w-full">
        <Tabs>
            <TabData tab_header={tabHead} tab_body={patientComponets} className='p-1 mx-auto'>
            </TabData>
        </Tabs>
      </div>
    </>
    
  )
}
