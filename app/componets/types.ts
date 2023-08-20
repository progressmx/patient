import React, { ReactNode } from "react";
import { IconType } from "react-icons";

export type objType = 
{
    className?:string
    data:{
        id: number
        firstName: string
        lastName: string
        gender: string
        dob:string
        reason:string
        paymentMethod: string
        createdOn: string
    }[]
}
export type bundle = {
    className?: string,
    input_bundle:{
        name:string
        label:string
    }[]
}
export type Bundle = {
    className?: string,
    input_bundle:{
        name:string
        label:string
        icon:IconType
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
    className?: string,
    onClick?: (...args: any) => any,
}
export type tabsChildren = 
{
    children: React.ReactNode,
    className?: string,
    onClick?: (...args: any) => any,
    tab_header:
    {
        label:string
        route:string
        // icons:IconType | undefined
    }[]
    tab_body:
    {
        label:string,
        component:()=>JSX.Element,
    }[]
}
export type Notes = 
{
    className?: string,
    onClick?: (...args: any) => any,
    notes:
    {
        title:string,
        note:string,
        date:string
    }[]
}
export type Treatment = 
{
    className?: string,
    onClick?: (...args: any) => any,
    medication:
    {
        medication:string,
        dosage:string,
        duration:string
    }[]
}

export type vitalsType = 
{
    className?: string,
    onClick?: (...args: any) => any,
    vitals:
    {
        id:number
        bloodPresure: string
        temperature: string
        weight: string
    }[]
}
export type notesType = 
{
    className?: string,
    onClick?: (...args: any) => any,
    notes:
    {
        id:number
        presentComplain: string
        createdOn: string
    }[]
}

