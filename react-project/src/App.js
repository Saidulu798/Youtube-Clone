import "./App.css"
import React, { useEffect } from "react";
import Navbar from './Components/Navbar.jsx'
import {BrowserRouter as Router} from "react-router-dom";
import { useState } from 'react';
import AllRoutes from "./Components/AllRoutes.jsx";
import DrawerSidebar from "./Components/LeftSidebar/DrawerSidebar.jsx";
import CreateEditChanel from "./Pages/chanel/CreateEditChanel.jsx";
import { useDispatch } from "react-redux";
import { fetchAllChanel } from "./actions/chanelUser.js";
import VideoUpload from "./Pages/VideoUpload/VideoUpload.jsx";
import { getAllVideo } from "./actions/video.js";
import { getAlllikedVideo } from "./actions/likedVideo.js";
import { getAllwatchLater } from "./actions/watchLater.js";
import { getAllHistory } from "./actions/History.js";

function App() {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchAllChanel());
  dispatch(getAllVideo());
  dispatch(getAlllikedVideo());
  dispatch(getAllwatchLater());
  dispatch(getAllHistory());
   }, [dispatch]);

   
  const[toggleDrawerSidebar,
     setToggleDrawerSidebar] = useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display === 'none'){
      setToggleDrawerSidebar({
        display:"flex",
      })
    }else{
      setToggleDrawerSidebar({
        display:"none",
      });
    }
  };
  const [vidUploadPage, setVidUploadPage] = useState(false)
  const [EditCreateChanelBtn, setEditCreateChanelBtn]=useState(false)
  return (
    <Router>
      {vidUploadPage &&  <VideoUpload setVidUploadPage={setVidUploadPage}/>}
      {EditCreateChanelBtn && (
        <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn}/>
        )}
     <Navbar 
       setEditCreateChanelBtn={setEditCreateChanelBtn} 
       toggleDrawer={toggleDrawer}
     />
     
      <DrawerSidebar
      toggleDrawer={toggleDrawer}
      toggleDrawerSidebar={toggleDrawerSidebar}
      />
     
     <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn}  />
    </Router>
  );
}

export default App;
