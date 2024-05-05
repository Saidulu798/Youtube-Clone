import React from 'react'
import { useSelector } from 'react-redux'
//import vid from '../../Components/ShowVideo/vid.mp4'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
import './YourVideo.css'
function YourVideo() {

  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel === CurrentUser?.result?._id).reverse();

  // const vids = [
  //   {
  //     _id: 1,
  //     video_src:vid,
  //     chanel:"62bafe6752cea35a6c30685f",
  //     title:"video 1",
  //     Uploader:"abcd",
  //     description:"description of video 1"
  //   },
  //   {
  //     _id:2,
  //     video_src:vid,
  //     chanel:"cdd",
  //     title:"video 2",
  //     description:"description of video 2"
  //   },
  //   {
  //     _id: 3,
  //     video_src:vid,
  //     chanel:"add",
  //     title:"video 3",
  //     description:"description of video 3"
  //   },
  //   {
  //     _id: 4,
  //     video_src:vid,
  //     chanel:"add",
  //     title:"video 4",
  //     description:"description of video 4"
  //   },
  //   ];
  return (
    <div className='Pages-App1'>
        <LeftSidebar/>
    <div className="Pages-App2">
      <div className="container-YourVideo">
      <h1>Your Video</h1>
      {
        CurrentUser ?(<>
      <ShowVideoGrid vids={vids}/>
        </>):<>
        <h3>Plz Login to see Your uploded video List...</h3></>
      }
        </div>
        </div>
    </div>
  )
}

export default YourVideo