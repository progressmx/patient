import type { RegisterForm, PatientForm, Vitals } from "./types.server";
import { prisma } from "./prisma.server";
import { json} from "@remix-run/node";
import { recordVitals} from "./user.server";

export async function setVitals(vitals : Vitals)
{
    
    let newVitals = await recordVitals(vitals)

    if(!newVitals)
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


export async function getVitals(ownerID: string,patientID: string)
{
    if (typeof ownerID !== 'string') 
    {
      return null
    }
    // console.log("owner id : ",ownerID)
  
    try {

        // console.log("patient found")
      const patient = await prisma.vitals.findMany({
        where: { createdBy: ownerID, patientId: patientID},
        select: { id: true, bloodPresure: true,temperature: true,weight:true },
      })
    //   console.log("patients : ",patient)
      return patient

    } catch {
      throw "no one found"
    }
}