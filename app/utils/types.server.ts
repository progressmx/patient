export type RegisterForm = 
{
    email : string,
    password : string,
    fullName : string
}
export type PatientForm = 
{
    firstName: string,
    lastName: string,
    gender: string,
    idNumber: string,
    contact: string,
    dobStr: string,
    reason: string,
    payment: string,
    userId: string,
}

export type Vitals = 
{
    bloodPresure: string
    height: string
    temperature: string
    weight: string
    createdOn: string
    userId: string
    patientId?: string
}
export type Appointments = 
{
    firstName: string,
    lastName: string,
    reason: string
    startTimeString: string
    endTimeString: string
    createdOn:string
    userId: string
}
export type Notes = 
{
    presentComplain: string
    complainHistory: string
    medicalHistory: string
    diagnosis: string
    createdOn: string
    userId: string
    patientId?: string
}

export type LoginForm = 
{
    email:string
    password:string
}