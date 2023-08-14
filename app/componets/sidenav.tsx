import React from 'react'

type Children = 
{
    children : React.ReactNode
    className?: string
}

export default function Sidenav(props : Children) {
  return (
    <nav className={`hidden lg:flex lg:top-0 lg:left-0 lg:fixed lg:w-[20%] lg:shadow lg:flex-col gap-2 lg:bg-white lg:h-full p-2 ${props.className}`}>
        {props.children}
    </nav>
  )
}
