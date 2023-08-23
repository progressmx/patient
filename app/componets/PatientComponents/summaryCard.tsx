import React from 'react'
import { Children } from '../types'


function SummaryCard(props: Children) {
  return (
    <div className={`flex flex-col w-[80vw] mt-6 gap-4 py-4 md:gap-2 bg-white rounded-xl md:p-4 md:w-[40vw] lg:w-[32vw] ${props.className}`}>
        {props.children}
    </div>
  )
}

export default SummaryCard