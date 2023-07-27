import Card from '~/componets/card'
import {Typography,Input,Button} from "@material-tailwind/react";
import { Form , useNavigation, useActionData,useLoaderData} from "@remix-run/react";
import { ActionFunction , json} from '@remix-run/node';
import { validateEmail,validatePassword,validateName} from '~/utils/validator.server';
import { Action } from '@remix-run/router';
import { register } from '~/utils/auth.server';

export default function join() {

    // const errors = useLoaderData()

  return (
    <div className='absolute flex justify-center place-items-center  h-full w-full'>
        <Card>
            <Typography variant="h4" className='text-gray-900'>Create and account</Typography>
            <Typography className='text-gray-900 font-normal'>fill in the details to sign-up</Typography>
            <Form method='post'>
                {/* <span>{errors.error}</span> */}
                <div className='m-4 flex flex-col gap-4'>
                    <Input label="full name" name="fullName" required></Input>
                    <Input label="email" name="email" required></Input>
                    <Input type="password" label="password" name="password" required></Input>
                    <input type="hidden" name="__action" value="register" />
                    <Button type="submit">login</Button>
                    <Typography>
                        Already have an account ? <a href="/login" className='text-blue-400'>Login</a>
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
    const email = form.get('email')
    const password = form.get('password')
    let fullName = form.get("fullName")
    const action = "register"

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
            }
        })
    }

    switch(action)
    {
        case'register':
        {
            fullName = fullName as string

            return await register({email,password,fullName})
        }
        default:
            return json({error:'invalid form data'},{status:400})
    }
}