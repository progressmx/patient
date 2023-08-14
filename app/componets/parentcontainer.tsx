import React from 'react'

type Children = 
{
    children : React.ReactNode
    className? : string
}

function ParentContainer(props: Children) {
  return (
    <div className={`flex rounded-md flex-col m-4 md:mx-auto md:w-full  p-4  md:flex-row ${props.className}`}>
        {props.children}
    </div>
  )
}

export default ParentContainer