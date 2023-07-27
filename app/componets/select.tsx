import React from 'react'
import type { select_bundle } from './types'
// import { Select} from '@material-tailwind/react'

function Select(props:select_bundle) {
  return (
    <>
        <select name={props.name} className='rounded-md border-[1px] border-gray-400 focus:ring-[2px]  focus:ring-indigo-500 h-10 p-2'>
        {
            props.select_group.map((reason)=>(
                <option value={reason.value} className='rounded p-4 m-1'>{reason.label}</option>
            ))
        }
        </select>
    </>
  )
}

export default Select