import React from 'react'
import { bundle} from './types'
import { Input } from '@material-tailwind/react'

function InputBundle(props: bundle){
  return (
    <>
        {
             props.input_bundle.map((field)=>(
                <Input size="md" label={field.label} name={field.name} required/>
            ))
        }
</>
  )
}

export default InputBundle