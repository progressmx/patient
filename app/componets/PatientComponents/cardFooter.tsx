import React from 'react'
import { Children } from '../types'

function CardFooter(props: Children) {
  return (
    <div className={`flex ml-3 flex-row gap-2 justify-left place-items-center mt-4 ${props.className}`}>
        {props.children}
    </div>
  )
}

export default CardFooter