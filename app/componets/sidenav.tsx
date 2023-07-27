import React from 'react'

type Children = 
{
    children : React.ReactNode
    className?: string
}

export default function Sidenav(props : Children) {
  return (
    <nav className={'fixed hidden lg:flex lg:absolute lg:shadow lg:flex-col gap-2 lg:bg-[#00091A] lg:h-full p-2 ' + props.className}>
        {props.children}
    </nav>
  )
}
