import type { RegisterForm, PatientForm } from "./types.server";
import { prisma } from "./prisma.server";
import { json,createCookieSessionStorage,redirect } from "@remix-run/node";
import { createPatient, createUser} from "./user.server";
import type { LoginForm } from "./types.server";
import bcrypt from "bcryptjs";
import { NULL } from "sass";


const sessionSecret = process.env.SESSION_SECRET

if(!sessionSecret)
{
    throw new Error("SESSION_SECRET must be set")
}

const storage = createCookieSessionStorage(
    {
        cookie:
        {
            name:'user-session',
            secure:process.env.NODE_ENV == 'production',
            secrets:[sessionSecret],
            sameSite:'lax',
            path:'/',
            maxAge:60*60*24*30,
            httpOnly:true,
        },
    }
)


export async function register(user : RegisterForm)
{
    const exist = await prisma.user.count({where: {email:user.email}})

    if(exist)
    {
        console.log("user already exist")
        return json({error: "User already exist with that email"},{status : 400})
    }

    let newUser = await createUser(user)

    if(!newUser)
    {
        console.log("Something went wrong in creating new user")
        return json(
            {
                error:"Something went wrong in creating new user",
                fields:{email:user.email,password:user.password}
            },
            {status:400}
        )
    }

    return createUserSesseion(newUser.id, '/')
}

export async function registerPatient(user : PatientForm)
{
    const exist = await prisma.Patient.count({where: {firstName:user.firstName}})

    if(exist)
    {
        console.log("user already exist")
        return json({error: "User already exist with that email"},{status : 400})
    }

    let newUser = await createPatient(user)

    if(!newUser)
    {
    
        console.log("Something went wrong in creating new patient")
        return json(
            {
                error:"Something went wrong in creating new patient",
                fields:{
                    firstName:user.firstName,
                    lastName:user.lastName, 
                    idNumber:user.idNumber,
                    phone:user.contact,
                    dob:user.dobStr, 
                    reason:user.reason, 
                    payment:user.payment
                }
            },
            {status:400}
        )
    }
    return null
}


export async function login({email,password} : LoginForm) 
{
    const user = await prisma.user.findUnique(
        {
            where:{email},
        }
    )  
    console.log(user)
    if(!user || !(await bcrypt.compare(password, user.password)))
    {
        console.log("Something went wrong while trying to login")
        return json({error:'incorrect login password'},{status:400})
    }

    // return {id:user.id,email}
    return createUserSesseion(user.id, '/')
}


export async function createUserSesseion(userId: string,redirectTo: string) 
{
    const session = await storage.getSession()
    session.set('userId',userId)
    
    console.log("now redirecting user to home page")
    return redirect(redirectTo,{
        headers:{
            'Set-Cookie':await storage.commitSession(session),
        }
    })
}

export async function requireUserId(request: Request, redirectTo: string = new URL(request.url).pathname) 
{
    const session = await getUserSession(request)
    const userId = session.get('userId')
    if (!userId || typeof userId !== 'string') {
      const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
      throw redirect(`/login?${searchParams}`)
    }
    console.log(userId)
    return userId
}

function getUserSession(request: Request) 
{
    return storage.getSession(request.headers.get('Cookie'))
}


async function getUserId(request: Request) 
{
    const session = await getUserSession(request)
    const userId = session.get('userId')
    if (!userId || typeof userId !== 'string') return null
    return userId
}

export async function getUser(request: Request)
{
    const userId = await getUserId(request)
    if (typeof userId !=='string') {
      return null
    }
  
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, email: true},
      })
      return user
    } catch {
      throw logout(request)
    }
}
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
        select: { id: true, firstName: true,lastName: true,paymentMethod:true,reason:true,createdOn:true },
      })
    //   console.log("patients : ",patient)
      return patient

    } catch {
      throw "no one found"
    }
}

export async function logout(request: Request) {
    const session = await getUserSession(request)
    return redirect('/login', {
      headers: {
        'Set-Cookie': await storage.destroySession(session),
      },
    })
  }