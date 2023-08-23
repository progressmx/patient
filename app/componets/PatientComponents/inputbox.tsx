import React from 'react'

type Variables = 
{
    type?:string
    name?:string
    placeholder?:string
    className?:string
}
export default function Inputbox(props:Variables) {
  return (
    <input type={props.type} name={props.name} placeholder={props.placeholder}
     className={`border-[1px] border-gray-400 rounded-md h-10 pl-3 ${props.className}`}>
    </input>
  )
}
