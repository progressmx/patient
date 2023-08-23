import type { RegisterForm, PatientForm, Vitals } from "./types.server";
import { prisma } from "./prisma.server";
import { json} from "@remix-run/node";
import { createPatient } from "./user.server";

export async function getPatients(ownerID: string)
{
    if (typeof ownerID !== 'string') 
    {
      return null
    }
    // console.log("owner id : ",ownerID)
  
    try {

        // console.log("patient found")
      const patient = await prisma.patient.findMany({
        where: { createdBy: ownerID },
        // select: { id: true, firstName: true,lastName: true,paymentMethod:true,reason:true,createdOn:true },
      })
      return patient

    } 
    catch {
      return json({message : "no patient found for you please capture new patients"},{status:400})
    }
}

export async function registerPatient(user : PatientForm)
{
    let newUser = await createPatient(user)

    if(!newUser)
    {
    
        console.log("Something went wrong in creating new patient")
        return json(
            {
                error:"Something went wrong in creating new patient",
            },
            {status:400}
        )
    }
    return null
}
export async function updatePatientStatus(ownerID: string, patientID:string,status:string)
{
    if (typeof ownerID !== 'string') 
    {
      return null
    }
    try {

        // console.log("patient found")
        const appointments = await prisma.patient.update({
        where: {id: patientID, createdBy: ownerID},
        data: { status : status},
      })
      return appointments

    } catch {
      throw "cannot update patient status"
    }
}
