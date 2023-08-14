import React ,{ReactNode}from 'react'
import { IconType } from 'react-icons'

type Children = 
{
    className?:string
    data:
    {
        name:string
        value:string
        icon:IconType
    }[]
}
function Head(props : Children) { 
  return (
    <div className={`grid p-6 w-full md:w-[80%] lg:w-[60%] grid-cols-3 md:grid-cols-3 ${props.className}`}>
        {
            props.data.map((values)=>(
                <div key={values.name} className='flex flex-col'>
                    <div className='flex flex-row gap-1 place-items-center'>
                        <values.icon className='text-gray-900 h-6 w-6 pr-2'/>
                        <p className='font-bold text-2xl text-gray-900'>{values.value.split("/")[0]}</p>
                       {values.name === "total"?"" : <p className='text-bold text-sm text-gray-700'>/{values.value.split("/")[1]}</p>}
                    </div>
                   <p className='text-gray-700 text-xs'>{values.name}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Head