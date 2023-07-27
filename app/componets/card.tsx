import React from 'react'
type Children = {
    children : React.ReactNode
}

function Card(props : Children) {
  return (
    <div className='flex flex-col gap-2 bg-white shadow rounded-md p-6'>
        {props.children}
    </div>
  )
}

export default Card