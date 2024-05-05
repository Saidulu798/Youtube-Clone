import React from 'react'
import Home from '../Pages/Home'
import {
    Routes,
    Route
  } from "react-router-dom";
import Library from '../Pages/Library/Library';
import YourVideo from '../Pages/YourVideo/YourVideo';
import WatchHistory from '../Pages/WatchHistory/WatchHistory'
import LikedVideo from '../Pages/LikedVideo/LikedVideo'
import WatchLater from '../Pages/WatchLater/WatchLater'
import VideoPage from '../Pages/VideoPage/VideoPage';
import Chanel from '../Pages/chanel/Chanel';
import Search from '../Pages/Search/Search';
function AllRoutes({setEditCreateChanelBtn,setVidUploadPage}) {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Library' element={<Library/>}/>
        <Route path='/YourVideo' element={<YourVideo/>}/>
        <Route path='/history' element={<WatchHistory/>}/>
        <Route path='/LikedVideo' element={<LikedVideo/>}/>
        <Route path='/WatchLater' element={<WatchLater/>}/>
        <Route path='/VideoPage/:vid' element={<VideoPage/>}/>
        <Route path='/search/:searchQuery' element={<Search/>}/>
        <Route path='/chanel/:Cid' 
            element={<Chanel 
            setVidUploadPage={setVidUploadPage}
            setEditCreateChanelBtn={setEditCreateChanelBtn}/>}
        />
    </Routes>
  )
}

export default AllRoutes