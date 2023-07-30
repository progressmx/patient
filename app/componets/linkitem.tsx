import React from 'react'
type Children = 
{
    children : React.ReactNode
    className?: string
}
function LinkItem(props: Children) {
  return (
    <>
        <li className={'flex text-sm hover:cursor-pointer hover:bg-gray-500 rounded hover:text-black '+props.className}>
            {props.children}
        </li>
    </>
  )
}

export default LinkItem