import React, { useState } from 'react'
import ParentContainer from '../parentcontainer'
import ColumnTag from './columntag'
import { Form, NavLink } from '@remix-run/react'
import { Button } from '@material-tailwind/react'
import ContianerBody from '../containerbody'
import Dialog from '../dialog'
import BillDeleteModal from './billDeleteModal'
import BillModifyModal from './BillModifyModal'
import BillItems from './BillItems'

type Children = 
{
    data:
    {
        id:string
        name:string,
        createdOn:string
        status:string
    }[]
}
export default function BillContainer(props:Children) {

    const [open, setOpen] = useState(false);
    const handleDialog = () => setOpen(!open);

    const [openDialog, setOpenDialog] = useState(false);
    const handleBillDialog = () => setOpenDialog(!openDialog);
    const id = 0
    
  return (
    <>
        {
            props.data.map((bill)=>(
                <>
                {bill.status != "deleted"?

                    <ParentContainer key={bill.id} className='bg-white mx-auto w-full'>
                        <ColumnTag
                            className="md:w-[30%]"
                            columnName="bill Name"
                            columnNameColor="text-gray-500"
                            columnDataColor="text-black"
                            columnData={`${bill.name}`}
                            >
                        </ColumnTag>
                        <ColumnTag
                            className="md:w-[30%]"
                            columnName="created on"
                            columnNameColor="text-gray-500"
                            columnDataColor="text-black"
                            columnData={`${bill.createdOn}`}
                            >
                        </ColumnTag>
                        <ContianerBody className="flex-row md:justify-center md:place-items-center gap-4 md:w-[30%] mt-4 md:mt-0">
                            <Form>
                            <Button onClick={handleBillDialog} size='sm' variant="outlined" className="text-black">
                                    Modify
                                </Button> 
                            </Form>
                            <>
                                <Button onClick={handleDialog} size="sm" variant="outlined" className="text-black">
                                    Delete
                                </Button>
                            </>
                        </ContianerBody>
                        {open?
                            <Dialog position="fixed" onClick={handleDialog} className='bg-gray-600 bg-opacity-20'>
                                <BillDeleteModal billId={bill.id} />
                            </Dialog> :""}
                        {openDialog?
                            <BillModifyModal position="fixed" onClick={handleBillDialog} className='bg-gray-600 bg-opacity-40'>
                                <BillItems id={bill.id} />
                            </BillModifyModal> :""}
                    </ParentContainer>
                :
                ""
                }
                </>
            ))

        }
    </>
  )
}