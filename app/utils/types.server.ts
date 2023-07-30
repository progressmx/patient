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
    idNumber: string,
    contact: string,
    dobStr: string,
    reason: string,
    payment: string,
    userId: string,
}

export type LoginForm = 
{
    email:string
    password:string
}