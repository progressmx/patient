import React from 'react'
type Children = 
{
    children : React.ReactNode
}
function LinkItem(props: Children) {
  return (
    <>
        <li className='flex mb-2 p-2 text-white text-sm hover:cursor-pointer hover:bg-gray-500 rounded hover:text-black'>
            {props.children}
        </li>
    </>
  )
}

export default LinkItem