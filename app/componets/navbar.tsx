import { Typography } from '@material-tailwind/react'
import React from 'react'
import List from "~/componets/list";
import LinkItem from "~/componets/linkitem";
import {FiUsers} from "react-icons/fi"
import {FaUsersCog} from "react-icons/fa"
import {AiOutlineHome,AiOutlineCalendar,AiOutlinePieChart,AiOutlineLogout} from "react-icons/ai"
import { NavLink } from "@remix-run/react";

const data = [
  {
      name:"Dashboard",
      link:"./",
      icon:AiOutlineHome
  },
  {
      name:"Patients",
      link:"/patients",
      icon:FiUsers
  },
]


export default function NavBar() {
  return (
    <div className='flex flex-row shadow mx-auto h-[60px] bg-[#00091A]'>
        <div className='flex flex-row gap-1 w-[10%] justify-start place-items-center md:justify-center md:place-items-center md:w-[40%]'>
            <Typography variant="h4" className="text-bold text-gray-400">
                Octaven
            </Typography>
        </div>
        <div className='flex flex-row gap-1 justify-center w-[90%] place-items-center md:justify-center md:place-items-center md:w-[60%]'>
            <List className="flex-row gap-2">
                {
                    data.map((links)=>(
                    <LinkItem key={links.name}>
                        <links.icon className='w-5 h-5 mr-2' />
                        <NavLink to={links.link}>{links.name}</NavLink>
                    </LinkItem>
                    ))
                }
                <form action="./logout" method="post">
                    <button className="bg-transparent">
                        <LinkItem>
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
