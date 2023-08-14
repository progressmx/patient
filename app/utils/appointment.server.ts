import type {Appointments, Notes } from "./types.server";
import { prisma } from "./prisma.server";
import { json} from "@remix-run/node";
import {createAppointment} from "./user.server";


export async function createAppointments(appointment: Appointments)
{
    
    let newNote = await createAppointment(appointment)

    if(!newNote)
    {
        console.log("Something went wrong in creating appointment")
        return json(
            {
                error:"Something went wrong while creating appointment",
            },
            {status:400}
        )
    }
    return null
}


export async function getAppointments(ownerID: string)
{
    if (typeof ownerID !== 'string') 
    {
      return null
    }
    try {

        // console.log("patient found")
        const appointments = await prisma.appointments.findMany({
        where: { createdBy: ownerID}
        // select: { id: true, presentComplain: true,createdOn: true},
      })
      return appointments

    } catch {
      throw "no one found"
    }
}