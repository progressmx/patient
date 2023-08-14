import type {Notes } from "./types.server";
import { prisma } from "./prisma.server";
import { json} from "@remix-run/node";
import { recordVitals,createNotes} from "./user.server";


export async function createNote(notes : Notes)
{
    
    let newNote = await createNotes(notes)

    if(!newNote)
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


export async function getNotes(ownerID: string,patientID: string)
{
    if (typeof ownerID !== 'string') 
    {
      return null
    }
    // console.log("owner id : ",ownerID)
  
    try {

        // console.log("patient found")
      const patient = await prisma.notes.findMany({
        where: { createdBy: ownerID,patientId:patientID},
        select: { id: true, presentComplain: true,createdOn: true},
      })
    //   console.log("patients : ",patient)
      return patient

    } catch {
      throw "no one found"
    }
}