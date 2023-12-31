import React from 'react'
import SummaryCard from './summaryCard'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
import { Form, useActionData, useLoaderData } from '@remix-run/react'
import { Button, Input } from '@material-tailwind/react'
import Inputbox from './inputbox'
import BillItemsList from './billItemsList'

type Id = 
{
    id:string
}

function BillItems(props:Id) {
    
    const {billItems} = useLoaderData()
    
    const billItemsArray = billItems[0]

    let data = []
    for (let index = 0; index < billItemsArray.length; index++) {
        if(billItemsArray[index].billId == props.id)
        {
            data.push(billItemsArray[index])
        }
        console.log("bill id : "+props.id)
        console.log("billitemsArrabillItemsArray : "+billItemsArray[index].billId)
    }
    
    const error = useActionData()
  return (
    <>
        <div className='flex flex-col w-full md:w-[70%] mx-auto bg-white h-auto rounded-lg'>
           <div>
                <CardHeader className='text-[#0068ff] flex-col gap-1'>
                    <h3 className='text-lg font-bold '>Add items to the bill</h3>
                    {error?.message && <p className='text-red-700 font-semibold text-sm'>{error.message}</p>}
                </CardHeader>
                <CardBody>
                    <Button size="md" variant='outlined'>Lock Bill</Button>
                </CardBody>
              <Form method='post'>
                <CardBody className='flex-col md:flex-row gap-2'>
                        <Inputbox name="code" placeholder='code ' className=' w-full md:w-[30%]' required={true} ></Inputbox>
                        <Inputbox name="name" placeholder='description' className=' w-full md:w-[70%]' required={true}></Inputbox>
                        <div className='flex flex-row gap-2'>
                            <Inputbox name="quantity" placeholder='quantity' className='w-[50%] md:w-[50%]' required={true}></Inputbox>
                            <Inputbox name="price" placeholder='unit price' className='w-[50%] md:w-[50%]' required={true}></Inputbox>
                        </div>
                        <input type="hidden" name="action" value="billitems"/>
                        <input type="hidden" name="billId" value={props.id}/>
                        <Button type='submit' variant="outlined">Add</Button>
                </CardBody>
              </Form>
           </div>
            <div>
                <BillItemsList data={data} billid={props.id}></BillItemsList>
            </div>
        </div>
    </>
  )
}

export default BillItems