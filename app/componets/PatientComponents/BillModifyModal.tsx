import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

type Children = 
{
    children: React.ReactNode,
    position: string
    className?: string
    onClick?: (...args: any) => any,
}

export default function BillModifyModal(props:Children) {
  return (
    <div className={`flex flex-col gap-2 w-full h-screen fixed left-0 p-4 top-0 z-50  ${props.className} bg-clip-padding backdrop-filter backdrop-blur-sm`}>
        <div className='w-full flex justify-end place-items-center'>
            <div onClick={props.onClick} className='bg-white flex justify-center place-items-center w-6 h-6 rounded-full hover:cursor-pointer hover:bg-gray-300'>
                <LiaTimesSolid className='w-6 h-6 ' />
            </div>
        </div>
        <div className='flex justify-center mx-auto w-full overflow-y-auto'>
            {props.children}
        </div>
    </div>
  )
}
