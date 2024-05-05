import React from 'react'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
//import vid from '../../Components/ShowVideo/vid.mp4'
import DecribeChanel from './DecribeChanel'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Chanel({setEditCreateChanelBtn,setVidUploadPage}) {

  const {Cid}=useParams();

  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel === Cid).reverse();

    // const vids = [
    //     {
    //       _id: 1,
    //       video_src:vid,
    //       chanel:"62bafe6752cea35a6c30685f",
    //       title:"video 1",
    //       Uploader:"abcd",
    //       description:"description of video 1"
    //     },
    //     {
    //       _id:2,
    //       video_src:vid,
    //       chanel:"cdd",
    //       title:"video 2",
    //       description:"description of video 2"
    //     },
    //     {
    //       _id: 3,
    //       video_src:vid,
    //       chanel:"add",
    //       title:"video 3",
    //       description:"description of video 3"
    //     },
    //     {
    //       _id: 4,
    //       video_src:vid,
    //       chanel:"add",
    //       title:"video 4",
    //       description:"description of video 4"
    //     },
    //     ];
        
    return (
        <div className='Pages-App1'>
          <LeftSidebar/>
        <div className="Pages-App2"/>
        <DecribeChanel 
           Cid={Cid}
          setVidUploadPage={setVidUploadPage}
          setEditCreateChanelBtn = {setEditCreateChanelBtn}/> 
          <ShowVideoGrid vids={vids}/>
            </div>
   );

    }

export default Chanel;