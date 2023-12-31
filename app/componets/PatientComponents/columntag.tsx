import React from 'react'
import ContainerBody from "../containerbody"

type Props = 
{
    columnName?: string
    columnData?: string
    children?:React.ReactNode
    className?:string
    columnNameColor?:string
    columnDataColor?:string
}

function ColumnTag(props: Props) {
  return (
    <ContainerBody className={`flex-row w-full md:flex-col ${props.className}`}>
       {props.columnName != null?
        <>
            <p className={`text-lg block pr-4 md:pr-0 md:text-sm font-semibold leading-6 ${props.columnNameColor}`}>
                {props.columnName}
            </p>
            <p className={`text-lg md:text-sm font-semibold leading-6 ${props.columnDataColor}`}>
                {props.columnData}
            </p>
        </>
        :
        <>
            {props.children}
        </>
        }
    </ContainerBody>
  )
}

export default ColumnTag