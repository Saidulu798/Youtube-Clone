import React from 'react'
import './LeftSidebar.css'
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineVideoLibrary, MdOutlineWatchLater, MdSubscriptions } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'
import { FaHistory } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
function DrawerSidebar({toggleDrawer,toggleDrawerSidebar}) {
  return (
    <div className='DrawerLeftSidebar' style={toggleDrawerSidebar}>
    <div className="DrawerLeftSidebar2">
    <div className="Drawer-Leftsidebar">
    <NavLink to={'/'} className="icon-div">
       <p>
            <AiOutlineHome
            size={25}
            className={'Icon-Sidebar'}
            style={{margin:"auto 0.7rem"}}/>
            <div className="text-icon-sidebar">Home</div>
        </p>
        </NavLink> 
        <div className="icon-div">
        <p>
            <MdOutlineExplore
            size={25}
            className={'Icon-Sidebar'}
            style={{margin:"auto 0.7rem"}}/>
            <div className="text-icon-sidebar">Explore</div>
        </p>
        </div>
        <div className="icon-div"> 
        <p>
            <SiYoutubeshorts
            size={25}
            className={'Icon-Sidebar'}
            style={{margin:"auto 0.7rem"}}/>
            <div className="text-icon-sidebar">Shorts</div>
        </p>
        </div>
        <div className="icon-div"> 
        <p>
            <MdSubscriptions
            size={25}
            className={'Icon-Sidebar'}
            style={{margin:"auto 0.7rem"}}/>
            <div className="text-icon-sidebar">Subscriptions</div>
        </p> 
        </div>    
        </div>
        <div className="libraryBtn-Drawerleftsidebar">
        <NavLink to={'/Library'} className="icon-div"> 
        <p>
            <MdOutlineVideoLibrary
            size={25}
            className={'Icon-Sidebar'}
            style={{margin:"auto 0.7rem"}}/>
            <div className="text-icon-sidebar">Library</div>
        </p> 
        </NavLink> 
        <NavLink to={'/History'} className="icon-div"> 
        <p>
            <FaHistory
            size={25}
            className={'Icon-Sidebar'}
            style={{margin:"auto 0.7rem"}}/>
            <div className="text-icon-sidebar">History</div>
        </p> 
        </NavLink> 
        <NavLink to={'/YourVideo'} className="icon-div"> 
        <p>
            <AiFillPlaySquare
            size={25}
            className={'Icon-Sidebar'}
            style={{margin:"auto 0.7rem"}}/>
            <div className="text-icon-sidebar">Your Videos</div>
        </p> 
        </NavLink>
        <NavLink to={'/WatchLater'} className="icon-div"> 
        <p>
            <MdOutlineWatchLater
            size={25}
            className={'Icon-Sidebar'}
            style={{margin:"auto 0.7rem"}}/>
            <div className="text-icon-sidebar">Watch Later</div>
        </p> 
        </NavLink> 
        <NavLink to={'/LikedVideo'} className="icon-div"> 
        <p>
            <AiFillLike
            size={25}
            className={'Icon-Sidebar'}
            style={{margin:"auto 0.7rem"}}/>
            <div className="text-icon-sidebar">Liked Videos</div>
        </p> 
        </NavLink> 
        </div> 
        <div className="Subscription-lsdbar">
            <h3>Your Subscriptions</h3>
           <div className="channel-lsdbar">
            <p>C</p>
            <div>Chanel</div>
            </div> 
            <div className="channel-lsdbar">
            <p>C</p>
            <div>Chanel</div>
            </div> 
            <div className="channel-lsdbar">
            <p>C</p>
            <div>Chanel</div>
            </div> 
            <div className="channel-lsdbar">
            <p>C</p>
            <div>Chanel</div>
            </div> 
            <div className="channel-lsdbar">
            <p>C</p>
            <div>Chanel</div>
            </div> 
    
        </div>  
        </div> 
          <div className="DrawerLeftSidebar3"
          onClick={()=>toggleDrawer()}
          ></div> 
        </div>    
        
  )
}

export default DrawerSidebar