import React from 'react'
type Children = 
{
    children : React.ReactNode
    className?: string
}
export default function List(props: Children) {
  return (
    <>
        <ul className={'flex '+props.className}>
            {props.children}
        </ul>
    </>
  )
}
