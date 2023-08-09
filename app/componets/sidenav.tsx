import React from 'react'

type Children = 
{
    children : React.ReactNode
    className?: string
}

export default function Sidenav(props : Children) {
  return (
    <nav className={`hidden w-[20vw] lg:flex lg:top-0 lg:left-0 lg:fixed lg:shadow lg:flex-col gap-2 lg:bg-white lg:h-full p-2 ${props.className}`}>
        {props.children}
    </nav>
  )
}
