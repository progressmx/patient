import { Typography,Button,Dialog} from '@material-tailwind/react'
import { useState } from 'react'
import { LoaderFunction,} from "@remix-run/node";
import {requireUserId} from "~/utils/auth.server";
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
import { setVitals,getVitals } from '~/utils/vitals.server';
import { createNote ,getNotes} from "~/utils/notes.server";
import { createBills, getBill, updateBillStatus } from '~/utils/bill.server';
import BillList from '~/componets/PatientComponents/billList';
import { createbillItems, getBillItems } from '~/utils/bilItems.server';

const tabHead = [
  {
    label: "Summary",
    route: "summary",
  },
  {
    label: "Treatment",
    route: "treatment",
  },
  {
    label: "Lab",
    route: "lab",
  },
  {
    label: "Billing",
    route: "bill",
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
  },
  {
    label:"bill",
    component:BillList
  }
]


export const loader: LoaderFunction = async({request,params})=>
{
  const patientId = params.userId as string
  const userId = await requireUserId(request)
  console.log("user id : ",userId)
  console.log("patient id : ",patientId)
  
  const vitals = await getVitals(userId, patientId)
  const notes = await getNotes(userId, patientId)
  const bill = await getBill(userId,patientId)

  let billIds = []
  
  if(bill != null)
  {
    for (let index = 0; index < bill.length; index++) {
      
      billIds.push(bill[index].id)
      
    }
  }

  let billItems = []
  for (let index = 0; index < billIds.length; index++) {
      billItems.push(await getBillItems(userId, billIds[index]))
  }
  const data = json({vitals,notes,bill, billItems})

  return data
}

export default function patientFile() {

    // const {patient} = useLoaderData()
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
export const action: ActionFunction = async ({request, params})=>
{
  const form = await request.formData()
  const action = form.get('action')
  const userId = await requireUserId(request)
  const patientId  = params.userId as string

  if(action == "newNote")
  {
      let presentComplain = form.get("presentComplain") as string
      let complainHistory = form.get("complainHistory") as string
      let medicalHistory = form.get("medicalHistory") as string
      let diagnosis = form.get('weight') as string
      if(diagnosis == null)
      {
        diagnosis = "no conclusion"
      }
      const joiDate =  new Date().toString();
      const createdOn= new Date(joiDate).toDateString()

      return await createNote({presentComplain,complainHistory,medicalHistory,diagnosis,createdOn,userId, patientId})
  }
  else if(action == "vitals")
  {
      let bloodPresure = form.get("bp") as string
      let height = form.get("height") as string
      let temperature = form.get("temperature") as string
      let weight = form.get('weight') as string 

      const joiDate =  new Date().toString();
      const createdOn= new Date(joiDate).toDateString()

      return await setVitals({bloodPresure,height,temperature,weight,createdOn,userId,patientId })
  } 
  else if(action == "billitems")
  {
      let name = form.get("name") as string
      let code = form.get("code") as string
      let quantityString = form.get("quantity") as string
      let priceString = form.get('price') as string
      let billId = form.get('billId') as string
      const quantity = +quantityString
      const price = +priceString
      const modifiedby = userId
      
      console.log("new items added : ")
      return await createbillItems({name,code,quantity,price,userId,billId,modifiedby})
  } 
  else if(action == "newBill")
  {
      let name = form.get("billName") as string

      if(name.length <= 2)
      {
        return {message: "bill name should more than 2 characters"}
      }
      return await createBills({name,userId,patientId })
  } 
  else if(action == "deleteBill")
  {
      let billId = form.get("id") as string
      const status = "deleted"
      return await updateBillStatus(userId,billId,status)
  } 
  else{
      
      return json({error:'Cannot access this page contact the Addmin for more information'},{status:400})
  }
}
