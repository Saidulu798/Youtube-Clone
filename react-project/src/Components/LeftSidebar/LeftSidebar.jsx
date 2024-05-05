import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary} from "react-icons/md"
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import { SiYoutubeshorts } from 'react-icons/si'
function LeftSidebar() {
  return (
    <div className="container-leftbar">
    <NavLink to={'/'} className="Icon-Sidebar">
          <AiOutlineHome size={22} className='icon-sidebar2'/>
          <div className="text-icon-sidebar">Home</div>
    </NavLink>
    <div className="Icon-Sidebar">
          <MdOutlineExplore size={22} className='icon-sidebar2'/>
          <div className="text-icon-sidebar">Explore</div>
    </div>
    <div className="Icon-Sidebar">
          <SiYoutubeshorts size={22} className='icon-sidebar2'/>
          <div className="text-icon-sidebar">Shorts</div>
    </div>
    <div className="Icon-Sidebar">
          <MdOutlineSubscriptions size={22} className='icon-sidebar2'/>
          <div className="text-icon-sidebar" style={{fontSize:"12px"}}>Subscriptions</div>
    </div>
    <NavLink to={'/Library'} className="Icon-Sidebar">
          <MdOutlineVideoLibrary size={22} className='icon-sidebar2'/>
          <div className="text-icon-sidebar">Library</div>
    </NavLink>
    </div>
  )
}

export default LeftSidebar