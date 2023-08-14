import {Input, Button  } from '@material-tailwind/react'
import CardHeader from '../PatientComponents/cardHeader'
import CardBody from '../PatientComponents/cardBody'
import SummaryCard from '../PatientComponents/summaryCard'
import { Form , useNavigation,useActionData,useLoaderData} from "@remix-run/react";

function NewAppoinment() {

    const error = useActionData()

  return (
    <SummaryCard>
        <CardHeader className='text-[#0068ff] flex-col gap-4'>
            <h3 className='text-lg font-bold '>Create new Appointment</h3>
            {error?.message && <p className='text-red-700 font-semibold text-sm'>{error.message}</p>}
        </CardHeader>
        <Form method='post'>
            <CardBody >
                <Input name="firstName" label="first name" required/>
            </CardBody>
            <CardBody >
                <Input name="lastName" label="last name" required/>
            </CardBody>
            <CardBody >
                <Input name="reason" label="appointment reason" required/>
            </CardBody>
            <CardBody >
                <Input type='datetime-local' name="startTime" label="start time" required/>
            </CardBody>
            <CardBody >
                <Input type="datetime-local" name="endTime" label="end Time" required/>
            </CardBody>
            <input type='hidden' name="action" value="newApt"></input>
            <CardBody>
                <Button className='mr-' type='submit'>set Appointment</Button>
            </CardBody>
       </Form>
    </SummaryCard>
  )
}

export default NewAppoinment