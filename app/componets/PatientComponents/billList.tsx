import { Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { AiOutlineCalculator } from 'react-icons/ai'
import { TbCalculatorOff } from 'react-icons/tb'
import Head from '../appointments/head'
import Container from '../container'
import { useLoaderData } from '@remix-run/react'
import NewBill from './newBill'
import Dialog from '../dialog'
import BillContainer from './billContainer'

export default function BillList() {

    const [open, setOpen] = useState(false);
    const handleDialog = () => setOpen(!open);
    
    const {bill} = useLoaderData()
    const numberofBills = bill.length
    let deleted = 0

    for (let index = 0; index < bill.length; index++) {
      

        if(bill[index].status == "deleted")
        {
          deleted += 1
        }
    
    }
    const data_ = [
        {
            name:"Deleted",
            value:deleted.toString(),
            icon:TbCalculatorOff
        },
        {
            name:"total",
            value:numberofBills.toString(),
            icon:AiOutlineCalculator
        }
    ]


  return (
    <div className='relative flex flex-col gap-2 p-2 md:p-4 rounded-lg w-full lg:w-3/4 md:w-full'>
        <div className='flex flex-col gap-2'>
            <Typography variant="h4" className="flex flex-row place-items-center gap-3 text-gray-900 font-bold">
                <p>Patient Bills</p>
                <div onClick={handleDialog} className='bg-gray-900 flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-100'>
                    <BiPlus className='w-5 h-5 text-white' />
                </div>
            </Typography>
        </div>
        <Head data={data_} className='mt-6'></Head>
        <div>
            <BillContainer data={bill} ></BillContainer>
        </div>
        {open?
              <Dialog position="fixed" onClick={handleDialog} className='bg-gray-600 bg-opacity-20'>
                    <NewBill />
              </Dialog> :""}
    </div>
   
  )
}