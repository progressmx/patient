import React from 'react'
import ContianerBody from '../containerbody'

type Children = 
{
    children?:React.ReactNode
    className?:string
    color?:string
    bg?:string
}

export default function ContainterButton(props: Children) {
  return (
    <ContianerBody className={`gap-4 justify-center place-content-center place-items-center w-2/4 mt-4 md:mt-auto  md:w-[25%] ${props.className} p-2 rounded-lg hover:cursor-pointer`}>
        {props.children}
    </ContianerBody>
  )
}
