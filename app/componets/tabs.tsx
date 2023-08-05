import React from 'react'
import {Children} from './types'

export default function Tabs(props: Children) {
  return (

    <div className={`className='mx-auto flex flex-row gap-6 p-6 ${props.className}`}>
        {props.children}
    </div>
  )
}
