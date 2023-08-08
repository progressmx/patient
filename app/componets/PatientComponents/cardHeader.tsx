import React from 'react'
import { Children } from '../types'


function CardHeader(props : Children) {
  return (
    <div className={`flex gap-2 justify-start place-items-center ml-3 ${props.className}`}>
        {props.children}
    </div>
  )
}

export default CardHeader