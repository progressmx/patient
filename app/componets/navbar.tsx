import { Typography } from '@material-tailwind/react'
import React,{useState} from 'react'
import List from "~/componets/list";
import LinkItem from "~/componets/linkitem";
import {FiUsers} from "react-icons/fi"
import {FaUsersCog} from "react-icons/fa"
import {AiOutlineHome,AiOutlineCalendar,AiOutlinePieChart,AiOutlineLogout,AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
import { NavLink } from "@remix-run/react";

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
]


export default function NavBar() {


    const [open, setOpen] = useState(false);
    const handleMobile = () => setOpen(!open);

  return (
    <div className='fixed z-10 flex flex-row gap-x-20 w-full shadow mx-auto h-[60px] bg-blue-800 mb-32'>
        <div className='flex flex-row gap-1 px-2 w-[10%] justify-start place-items-center md:justify-center md:place-items-center md:w-[40%]'>
            <Typography variant="h4" className="text-bold text-white">
                Octaven
            </Typography>
        </div>
        <div className='hidden md:flex md:flex-row md:gap-1 w-[90%] place-items-center md:justify-center md:place-items-center md:w-[60%]'>
            <List className="flex-row gap-2">
                {
                    data.map((links)=>(
                    <LinkItem key={links.name} className='p-[5px] text-sm text-white hover:bg-blue-400 rounded hover:text-black'>
                        <links.icon className='w-5 h-5 mr-2' />
                        <NavLink to={links.link}>{links.name}</NavLink>
                    </LinkItem>
                    ))
                }
                <form action="./logout" method="post">
                    <button className="bg-transparent">
                        <LinkItem className='p-[5px] text-sm text-white hover:bg-blue-400 rounded hover:text-black'>
                        <AiOutlineLogout className='w-5 h-5 mr-2' />
                            log out
                        </LinkItem>
                    </button>
                </form>
            </List>
        </div>
        <div className='flex flex-row p-4 w-[100%] justify-end place-content-end text-2xl md:hidden'>
                {!open? <AiOutlineMenu className='text-white' onClick={handleMobile}/>:<AiOutlineClose className='text-white' onClick={handleMobile}/>}
        </div>
        <div className={open? "absolute flex flex-col right-0 top-12 p-4 rounded-lg bg-white shadow mr-4 md:hidden": "hidden md:hidden" }>
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
