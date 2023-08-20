import { useState } from 'react'
import { tabsChildren } from './types'
import List from './list'
import LinkItem from './linkitem'
import {AiOutlineHome,AiOutlineCalendar,AiOutlinePieChart,AiOutlineLogout,AiOutlineClose,AiOutlineMenu} from "react-icons/ai"


export default function TabData(props: tabsChildren) {

    const [activeTab, setActiveTab] = useState(props.tab_header[0].route);

    const [open, setOpen] = useState(false);
    const handleMobile = () => setOpen(!open);
  return (
    <div className='flex flex-col w-full'>
      <div className={`hidden md:w-full  md:flex md:flex-row md:justify-start md:place-items-center ${props.className}`}>
          <List className="flex-row gap-2">
              {
                  props.tab_header.map((tabs)=>(
                  <LinkItem 
                  key={tabs.label} 
                  onClick={() => setActiveTab(tabs.route)}
                  className={activeTab === tabs.route?
                        'border-b-2 border-black font-extrabold p-[5px] px-4 md:px-2 py-2 text-black'
                        :
                       "p-[5px] px-2 md:px-4 text-gray-900 opacity-80  py-2" }>


                      <p className='flex flex-row justify-center place-content-center place-items-center gap-1 subpixel-antialiased mt-1 text-sm leading-5'>
                        {/* <tabs.icons className='hidden py-1 w-7 h-7 md:block' />  */}
                        {tabs.label}
                      </p>
                  </LinkItem>
                  ))

              }
          </List>
      </div>
      
      <div className='flex flex-row p-4 w-[100%] justify-end place-content-end text-2xl md:hidden'>
          {!open? 
            <>
              <div className='bg-white  flex justify-center place-items-center w-10 h-10 rounded-full hover:bg-gray-500'>
                <AiOutlineMenu className='text-black' onClick={handleMobile}/>
              </div> 
            </>
            : 
            <>
              <div className='bg-white  flex justify-center place-items-center w-10 h-10 rounded-full hover:bg-gray-500'>
                <AiOutlineClose className='text-black' onClick={handleMobile}/>
              </div> 
            </>}
      </div>
      <div className={open? `md:hidden absolute right-0 top-20 rounded-lg p-4 ${props.className} bg-white shadow mr-4 md:hidden`:"hidden md:hidden"}>
          <List className="grid grid-cols-3 gap-3">
              {
                  props.tab_header.map((tabs)=>(
                  <LinkItem 
                  key={tabs.label} 
                  onClick={() => setActiveTab(tabs.route)}
                  className={activeTab === tabs.route?'bg-blue-800 p-[5px] px-2 rounded-md py-2 text-white': "p-[5px] px-2 text-black rounded-md py-2" }>
                      <p className='flex flex-row justify-center place-content-center place-items-center gap-1 subpixel-antialiased font-light mt-1 text-sm leading-5'>
                        {/* <tabs.icons className='hidden py-1 w-7 h-7 md:block' /> */}
                        {tabs.label}
                      </p>
                  </LinkItem>
                  ))

              }
          </List>
      </div>


      <>
          {
            props.tab_body.map((t_body)=>(
             <div key={t_body.label}>
                <div className={activeTab === t_body.label? "flex" : "hidden"}>
                      <t_body.component />
                </div>
             </div>
            ))
          }
      </>
    </div>
  )
}
