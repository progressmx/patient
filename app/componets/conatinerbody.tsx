import React from 'react'
import type { Children } from './types'

export default function ConatinerBody(props: Children) {
  return (
    <>
        <div className={'sm:w-full text-left '+ props.className}>
            {props.children}
        </div>
    </>
  )
}

