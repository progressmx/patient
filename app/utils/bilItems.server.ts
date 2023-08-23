import type {billItems} from "./types.server";
import { prisma } from "./prisma.server";
import { json} from "@remix-run/node";
import {createBillItems} from "./user.server";


export async function createbillItems(bill:billItems)
{
    
    let bills = await createBillItems(bill)

    if(!bills)
    {
        console.log("Something went wrong in creating new patient")
        return json(
            {
                error:"Something went wrong while recording vitals",
            },
            {status:400}
        )
    }
    return null
}


export async function getBillItems(ownerID: string,billId: string)
{
    if (typeof ownerID !== 'string')
    {
      return null
    }
    // console.log("owner id : ",ownerID)
  
    try {

        // console.log("patient found")
      const bill = await prisma.billItems.findMany({
        where: { createdBy: ownerID,billId:billId},
        // select: { id: true,modifiedOn: true},
      })
    //   console.log("patients : ",patient)
      return bill

    } catch {
      throw "no one found"
    }
}

export async function updateBillItemStatus(ownerID: string, billId:string,status:string)
{
    if (typeof ownerID !== 'string') 
    {
      return null
    }
    try {
        const appointments = await prisma.billItems.update({
        where: {id:billId, createdBy: ownerID},
        data: { status : status},
      })
      return appointments

    } catch {
      throw "no one found"
    }
}

export async function updateBillItems(bill:billItems)
{
    if (typeof bill.userId !== 'string') 
    {
      return null
    }
    try {
        const joiDate =  new Date().toString();
        const shortJoinDate = new Date(joiDate).toDateString()
        const billItems = await prisma.billItems.update({
        where: {id:bill.billId},
        data: {
            name: bill.name,
            code: bill.code,
            quantity: bill.quantity,
            price: bill.price,
            modifiedOn:shortJoinDate,
            modifiedBy:bill.modifiedby,
        },
      })
      return null

    } catch {
      throw "no one found"
    }
}