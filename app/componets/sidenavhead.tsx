import React from 'react'

type Children = 
{
    children : React.ReactNode,
    className?:string
}

export default function SideHead(props : Children) {
  return (
    <div className={`flex flex-col mt-6 mb-2 border-b-[1px] border-gray-500 text-center p-4${props.className}`}>
        {props.children}
    </div>
  )
}
