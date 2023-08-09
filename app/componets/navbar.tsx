import { Typography } from '@material-tailwind/react'
import React,{useState} from 'react'
import List from "~/componets/list";
import LinkItem from "~/componets/linkitem";
import {FiUsers} from "react-icons/fi"
import {FaUsersCog} from "react-icons/fa"
import {BiChevronDown,BiChevronUp,BiSearchAlt2} from "react-icons/bi"
import {AiOutlineHome,AiOutlineCalendar,AiOutlinePieChart,AiOutlineLogout,AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
import { NavLink } from "@remix-run/react";
import {Input, Avatar} from '@material-tailwind/react';
import { LoaderFunction } from "@remix-run/node";
import { requireUserId,getUser } from "~/utils/auth.server";
import { useLoaderData } from "@remix-run/react";
import { json } from "react-router-dom";


const data = [
  {
      name:"Dashboard",
      link:"/",
      icon:AiOutlineHome
  },
  {
      name:"Patients",
      link:"/patients",
      icon:FiUsers
  },
  {
      name:"Appointments",
      link:"#",
      icon:AiOutlineCalendar
  },
  {
      name:"Reports",
      link:"#",
      icon:AiOutlinePieChart
  },
  {
      name:"Users",
      link:"#",
      icon:FaUsersCog
  },
]


export const loaderUser: LoaderFunction = async({request})=>
{
    await requireUserId(request)
    const userDetails = await getUser(request)
    console.log("user data top : ",userDetails)
    return json({userDetails})
}

export default function NavBar() {

    const [open, setOpen] = useState(false);
    const handleMobile = () => setOpen(!open);

    const userDetails = useLoaderData()

    console.log("user data : ",userDetails)
    // const name = userDetails.fullName.split(" ")

  return (
    <div className='fixed top-4 lg:left-[22vw] left-4 right-4 rounded-lg lg:w-[75%] z-10 flex flex-row gap-x-20 shadow mx-auto h-[60px] bg-white mb-32'>
        <div className='flex flex-row gap-1 px-2 w-[10%] justify-start place-items-center md:justify-center md:place-items-center md:w-[40%]'>
            <Typography variant="h4" className="text-bold text-[#0068ff]">
                Octaven
            </Typography>
        </div>
        <div className='flex flex-row gap-2 justify-end place-items-center w-[90%] md:w-[60%] px-2 md:px-4 lg:pr-10'>
            <div className='hidden md:flex'>
                <Input placeholder="search a patient" icon={<BiSearchAlt2 className='w-5 h-5 rounded-3xl' />} />
            </div>
            <div className='bg-[#0068ff] flex justify-center place-content-center place-items-center w-8 h-8 rounded-full text-white'>
                <p className=' font-semibold text-[16px]'>
                    {/* {name[0][0]} */} T
                </p>
            </div>
            <div className='lg:hidden'>
                {!open? 
                    <BiChevronDown className='text-[#0068ff] hover:cursor-pointer font-semibold h-8 w-8 p-1 rounded-full' onClick={handleMobile}/>
                    :<BiChevronUp className='text-[#0068ff] hover:cursor-pointer h-8 w-8 p-1 rounded-full' onClick={handleMobile}/>}
            </div>
        </div>
        <div className={open? "absolute flex flex-col right-0 top-12 p-4 rounded-lg bg-white shadow-md mr-4 lg:hidden": "hidden lg:hidden" }>
            <List className="flex-col gap-2">
                    {
                        data.map((links)=>(
                        <LinkItem key={links.name} className='p-[5px] w-full text-sm text-black hover:bg-blue-400 rounded hover:text-white'>
                            <links.icon className='w-5 h-5 mr-2' />
                            <NavLink to={links.link}>{links.name}</NavLink>
                        </LinkItem>
                        ))
                    }
                    <form action="/logout" method="post">
                        <button className="bg-transparent p-[5px] w-full text-sm text-black hover:bg-blue-400 rounded hover:text-white">
                            <LinkItem className=''>
                            <AiOutlineLogout className='w-5 h-5 mr-2' />
                                log out
                            </LinkItem>
                        </button>
                    </form>
            </List>
        </div>
    </div>
  )
}
