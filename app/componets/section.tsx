import React from 'react'


type Children = {
    children ?: React.ReactNode,
    className?:string
}

export default function Section(props: Children) {
  return (
    <div className={`${props.children}`}>
        {props.children}
    </div>
  )
}