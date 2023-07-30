import Card from '~/componets/card'
import {Typography,Input,Button} from "@material-tailwind/react";
import { Form , useNavigation, useActionData,useLoaderData} from "@remix-run/react";
import { ActionFunction,json,LoaderFunction, redirect } from '@remix-run/node';
import {login,getUser} from '~/utils/auth.server';
import { useRef,useEffect, useState } from 'react';
import { validateEmail,validatePassword,validateName} from '~/utils/validator.server';
import { Action } from '@remix-run/router';


export const loader: LoaderFunction = async({request}) =>
{
    return (await getUser(request))? redirect('/'):null
}

export default function Signin() {

    const actionData = useActionData()
    const firstLoad = useRef(true)
    // const [errors, setErrors] = useState(actionData?.errors || {})
    // const errors = useLoaderData()

  return (
    <div className='absolute flex justify-center place-items-center  h-full w-full'>
        <Card>
            <Typography variant="h4" className='text-gray-900'>Log in</Typography>
            <Typography className='text-gray-900 font-normal'>fill in the details to login</Typography>
            <Form method="post">
                <div className='m-4 flex flex-col gap-4'>
                    {/* <span>{errors.error}</span> */}
                    <Input label="email" name="email"></Input>
                    <Input type="password" label="password" name="password" ></Input>
                    <input type="hidden" name="__action" value="register" />
                    <Button type="submit">login</Button>
                    <Typography>
                        Don't have an account ? <a href="/join" className='text-blue-400'>Create account</a>
                    </Typography>
                </div>
            </Form>
        </Card>
    </div>
  )
}
export const action: ActionFunction = async ({request})=>
{
    const form = await request.formData()
    const action = "login"
    const email = form.get('email')
    const password = form.get('password')

    if(typeof email !== "string" || typeof password !== 'string')
    {
        return json(
            {
                error:"invalid form data",
                form:action
            },
            {
                status:400
            }
        )
    }

    const errors = 
    {
        email:validateEmail(email),
        password:validatePassword(password),
    }

    if(Object.values(errors).some(Boolean))
    {
        return json({
            errors,fields:
            {
                email,
                password
            },
            form:action
        })
    }

    switch(action)
    {
        case'login':
        {
            return await login({email,password})
        }
        default:
            console.log("invalid login")
            return json({error:'invalid form data'},{status:400})
    }
}
