import type { PatientForm, RegisterForm,Vitals,Notes,Appointments } from "./types.server";
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

    const newPatient = await prisma.patient.create(
        {
            data:{
                firstName : patient.firstName,
                lastName:patient.lastName, 
                gender:patient.gender,
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

export async function recordVitals(vitals: Vitals)
{
    const newVitals = await prisma.vitals.create(
        {
            data:{
                bloodPresure: vitals.bloodPresure,
                height: vitals.height,
                temperature: vitals.temperature,
                weight: vitals.weight,
                createdOn: vitals.createdOn,
                owner:
                {
                    connect:
                    {
                        id:vitals.userId
                    }
                },
                patient:
                {
                    connect:
                    {
                        id:vitals.patientId
                    }
                }

            }
        }
    )

    return{id:newVitals.id}
}
export async function createNotes(notes: Notes)
{
    const newNote = await prisma.notes.create(
        {
            data:{
                presentComplain: notes.presentComplain,
                complainHistory: notes.complainHistory,
                medicalHistory: notes.medicalHistory,
                diagnosis: notes.diagnosis,
                createdOn: notes.createdOn,
                owner:
                {
                    connect:
                    {
                        id:notes.userId
                    }
                },
                patient:
                {
                    connect:
                    {
                        id:notes.patientId
                    }
                }

            }
        }
    )

    return{id:newNote.id}
}

export async function createAppointment(appointment: Appointments)
{
    const newNote = await prisma.appointments.create(
        {
            data:{
                firstName: appointment.firstName,
                lastName: appointment.lastName,
                status: "active",
                reason: appointment.reason,
                startTime: appointment.startTimeString,
                endTime: appointment.endTimeString,
                createdOn: appointment.createdOn,
                owner:
                {
                    connect:
                    {
                        id:appointment.userId
                    }
                },

            }
        }
    )

    return{id:newNote.id}
}

