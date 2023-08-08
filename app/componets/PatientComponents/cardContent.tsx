import React from 'react'
import { Children } from '../types'


export default function CardContent(props: Children) {
  return (
    <div className={`flex flex-row w-2/4 gap-2 p-1 ${props.className}`}>
        {props.children}
    </div>
  )
}
