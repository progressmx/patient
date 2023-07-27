import React, { ReactNode } from "react";

export type objType = 
{
    data:{
        id: number
        firstName: string
        lastName: string
        reason:string
        paymentMethod: string
        createdOn: string
    }[]
}
export type bundle = {
    input_bundle:{
        name:string
        label:string
    }[]
}
export type select_bundle={
    name:string
    label?:string
    select_group:
    {
        label:string
        value:string
    }[]
}

export type Children = 
{
    children: React.ReactNode,
    className?: string
}