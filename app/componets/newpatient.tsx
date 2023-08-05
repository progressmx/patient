import React from 'react'
import { Input,Typography,Card,Button} from '@material-tailwind/react'
import { Form, useNavigation } from '@remix-run/react'
import InputBundle from './inputbundle'
import Select from './select'
const text_fields = [
    {
        name:"firstName",
        label:"first name"
    },
    {
        name:"lastName",
        label:"last name"
    },
    {
        name:"phone",
        label:"phone number"
    },
    {
        name:"idNumber",
        label:"id / passport number"
    }
]

const visit_reason = [
    {
        label:"Consultation",
        value:"consult"
    },
    {
        label:"Check-up",
        value:"check"
    },
    {
        label:"Bill payment",
        value:"bill"
    },
]
const payment_method = [
    {
        label:"Cash",
        value:"cash"
    },
    {
        label:"Medical AID",
        value:"medicalAid"
    },
]


function NewPatient() {

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    
  return (
    <div className='relative flex justify-center place-items-center w-full'>
        <Card color="transparent" shadow={false} className='w-[100vw] mt-4 md:w-[70vw] lg:w-[30vw] p-6'>
            <Typography variant="h4" className="text-bold text-gray-900 text-center"> Add new patient</Typography>
            <Typography className="text-gray-800 opacity-70 text-center">Fill in the details</Typography>
            <Form method='post'>
                <div className='flex flex-col gap-4 mt-4'>
                   <InputBundle input_bundle={text_fields} />
                   <Input type="date" label='date of bith' name="dob"></Input>
                    <Select label="visit reason" name="reason" select_group={visit_reason}/>
                    <Select label="payment methon" name="payment" select_group={payment_method}/>
                    <Button disabled={isSubmitting} type='submit'> {isSubmitting ? 'Adding...': 'Add Patient'}</Button>
                </div>
            </Form>
        </Card>
    </div>
  )
}

export default NewPatient