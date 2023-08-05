import React, { useState } from 'react'
import { tabsChildren } from './types'
import List from './list'
import LinkItem from './linkitem'
import {AiOutlineHome,AiOutlineCalendar,AiOutlinePieChart,AiOutlineLogout,AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
import { NavLink } from '@remix-run/react'

export default function TabData(props: tabsChildren) {

    const [activeTab, setActiveTab] = useState(props.tab_header[0].route);

    const [open, setOpen] = useState(false);
    const handleMobile = () => setOpen(!open);
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className={`hidden md:flex md:flex-row md:justify-center md:place-content-center ${props.className}`}>
          <List className="flex-row gap-2">
              {
                  props.tab_header.map((tabs)=>(
                  <LinkItem 
                  key={tabs.label} 
                  onClick={() => setActiveTab(tabs.route)}
                  className={activeTab === tabs.route?'bg-[#f4f4f4] p-[5px] px-4 md:px-2 rounded-full py-2': "p-[5px] px-2 md:px-4  bg-gray-400 text-black rounded-full py-2" }>
                      <p className='flex flex-row justify-center place-content-center place-items-center gap-1 subpixel-antialiased font-light mt-1 text-sm leading-5'>
                        <tabs.icons className='hidden py-1 w-7 h-7 md:block' /> {tabs.label}
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
                        <tabs.icons className='hidden py-1 w-7 h-7 md:block' /> {tabs.label}
                      </p>
                  </LinkItem>
                  ))

              }
          </List>
      </div>


      <div className='flex w-full min-h-[40vw] p-4 mx-auto  md:p-6 rounded-lg md:border-[1px] md:border-gray-600'>
          {
            props.tab_body.map((t_body)=>(
             <div key={t_body.label}>
                <div className={activeTab === t_body.label? "flex" : "hidden"}>
                      <t_body.component />
                </div>
             </div>
            ))
          }
      </div>
    </div>
  )
}
