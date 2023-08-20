import React from 'react'
import { Input,Typography,Card,Button} from '@material-tailwind/react'
import { Form, useNavigation } from '@remix-run/react'
import InputBundle from './inputbundle'
import Select from './select'
import SummaryCard from './PatientComponents/summaryCard'
import CardHeader from './PatientComponents/cardHeader'
import CardBody from './PatientComponents/cardBody'

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
const gender = 
[
    {
        label : "male",
        value : "male"
    },
    {
        label : "female",
        value : "female"
    },
    {
        label : "others",
        value : "others"
    },
]

function NewPatient() {

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    
  return (
    <SummaryCard className='p-4'>
         <CardHeader className='text-[#0068ff] flex-col gap-4'>
            <h3 className='text-lg font-bold '>Add new patient</h3>
            {/* {error?.message && <p className='text-red-700 font-semibold text-sm'>{error.message}</p>} */}
        </CardHeader>
        <Form method='post'>
            <div className='flex flex-col gap-4 mt-4'>
                <InputBundle input_bundle={text_fields} />
                <Input type="date" label='date of bith' name="dob"></Input>
                <Select label="patient's gender" name="gender" select_group={gender}/>
                <Select label="visit reason" name="reason" select_group={visit_reason}/>
                <Select label="payment methon" name="payment" select_group={payment_method}/>
                <Button disabled={isSubmitting} type='submit'> {isSubmitting ? 'Adding...': 'Add Patient'}</Button>
            </div>
        </Form>
    </SummaryCard>
  )
}

export default NewPatient