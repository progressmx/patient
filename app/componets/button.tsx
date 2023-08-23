import React from 'react'
import { Children } from './types'

function Button(props: Children) {
  return (
    <>
        <button onClick={props.onClick} className={"flex flex-row justify-center place-items-center w-full gap-2 hover:cursor-pointer p-[10] " + props.className}>
            {props.children}
        </button>
    </>
  )
}

export default Button