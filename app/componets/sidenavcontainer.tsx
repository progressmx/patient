import Sidenav from "~/componets/sidenav";
import SideHead from "~/componets/sidenavhead";
import SideBody from "~/componets/sidebody";
import List from "~/componets/list";
import LinkItem from "~/componets/linkitem";
import {FiUsers} from "react-icons/fi"
import {FaUsersCog} from "react-icons/fa"
import {AiOutlineHome,AiOutlineCalendar,AiOutlinePieChart,AiOutlineLogout} from "react-icons/ai"
import { NavLink } from "@remix-run/react";
import { useState} from "react";
import { useLocation } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";


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

export default function SideNavContainer() {

    // const [activePage, setActivePage] = useState("/");
    const location = useLocation();

  return (
    <Sidenav className="">
        <SideHead className="text-[#0068ff] font-semibold">
            <h1>Side bar</h1>
        </SideHead>
        <SideBody>
            <List className="flex-col">
            {
                data.map((links)=>(
                <LinkItem
                 className={location.pathname === links.link?"mb-2 p-2 bg-[#0068ff] text-white rounded-md " : "mb-2 p-2 text-black hover:bg-[#0068ff] hover:text-white hover:rounded-md"} key={links.name}>
                    <links.icon className='w-5 h-5 mr-2' />
                    <NavLink to={links.link}>{links.name}</NavLink>
                </LinkItem>
                ))
            }
            </List>
        </SideBody>
    </Sidenav>
  )
}