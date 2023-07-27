import React from 'react'
import { Children } from './types'

function Button(props: Children) {
  return (
    <>
        <button className={"flex flex-row justify-center place-items-center w-full gap-2 hover:cursor-pointer rounded-sm p-[10] " + props.className}>
            {props.children}
        </button>
    </>
  )
}

export default Button