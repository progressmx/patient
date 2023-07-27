import type { PatientForm, RegisterForm } from "./types.server";
import { prisma } from "./prisma.server";
import bcrypt from "bcryptjs";

export async function createUser(user: RegisterForm)
{
    const passwordHash = await bcrypt.hash(user.password, 10)
    const newUser = await prisma.user.create(
        {
            data:{
                fullName:user.fullName,
                email: user.email,
                password: passwordHash
            }
        }
    )

    return {id:newUser.id, email:user.email}
}

export async function createPatient(patient: PatientForm)
{
    const joiDate =  new Date().toString();
    const shortJoinDate = new Date(joiDate).toDateString()

    const newPatient = await prisma.Patient.create(
        {
            data:{
                firstName : patient.firstName,
                lastName:patient.lastName, 
                idNumber:patient.idNumber,
                phone:patient.contact, 
                dob:patient.dobStr,
                createdOn: shortJoinDate, 
                reason:patient.reason, 
                paymentMethod:patient.payment,
                owner:
                {
                    connect:
                    {
                        id:patient.userId
                    }
                }

            }
        }
    )

    return{id:newPatient.id}
}

