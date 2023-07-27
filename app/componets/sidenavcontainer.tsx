import Sidenav from "~/componets/sidenav";
import SideHead from "~/componets/sidenavhead";
import SideBody from "~/componets/sidebody";
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
  return (
    <Sidenav className="lg:w-[20vw]">
        <SideHead>
            <h1>Side bar</h1>
        </SideHead>
        <SideBody>
            <List className="flex-col">
            {
                data.map((links)=>(
                <LinkItem className="mb-2 p-2" key={links.name}>
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
        </SideBody>
    </Sidenav>
  )
}