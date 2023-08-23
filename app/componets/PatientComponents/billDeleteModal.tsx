import React, { useState } from 'react'
import { Input } from '@material-tailwind/react'
import {AiOutlineWarning} from 'react-icons/ai'
import SummaryCard from './summaryCard'
import CardBody from './cardBody'
import CardHeader from './cardHeader'
import {Textarea} from '@material-tailwind/react'
import {Button} from '@material-tailwind/react'
import { Form , useNavigation,useActionData,useLoaderData} from "@remix-run/react";

type Bill =
{
    billId:string
}

export default function BillDeleteModal(props: Bill) {

    const error = useActionData()
    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const handleDialog = () => setOpen(!open);
    
    const isSubmitting = navigation.state === 'submitting';

  return (
    <SummaryCard>
        <CardHeader className='flex-col gap-1'>
            <AiOutlineWarning className='text-red-700 w-10 h-10'></AiOutlineWarning>
            <p className='text-sm font-semibold text-red-700'>ARE YOU SURE YOU WANT TO DELETE THIS BILL</p>
            <p className='text-sm font-semibold text-red-700'>THIS CANNOT BE UNDONE</p>
            <p className='text-sm font-bold text-red-700'>NOTE : THE BILL WILL REMAIN IN THE SYSTEM</p>
            {error?.message && <p className='text-red-700 font-semibold text-sm'>{error.message}</p>}
        </CardHeader>
  <Form method='post'>
        <input type="hidden" name="id" value={props.billId}/>
        <input type="hidden" name="action" value="deleteBill"/>
        <CardBody>
            <Button disabled={isSubmitting} type='submit' color='red'> {isSubmitting ? 'DELETING BILL...': 'DELETE BILL'}</Button>
        </CardBody>
  </Form>
    
</SummaryCard>
  )
}
