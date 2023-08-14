import React from 'react'
import type { Children } from './types'

export default function ContianerBody(props: Children) {
  return (
    <>
        <div className={'flex sm:w-full text-left '+ props.className}>
            {props.children}
        </div>
    </>
  )
}

