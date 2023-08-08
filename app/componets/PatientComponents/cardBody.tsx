import React from 'react'
import { Children } from '../types'


function CardBody(props: Children) {
  return (
    <div className={`flex gap-1 justify-left place-content-left mx-auto md:mx-1 w-[90%] p-2 ${props.className}`}>
        {props.children}
    </div>
  )
}

export default CardBody