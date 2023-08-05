import React from 'react'
type Children = 
{
    children : React.ReactNode
    className?: string,
    onClick?: () => void;
}
function LinkItem(props: Children) {
  return (
    <>
        <li onClick={props.onClick} className={`flex hover:cursor-pointer ${props.className}`}>
            {props.children}
        </li>
    </>
  )
}

export default LinkItem