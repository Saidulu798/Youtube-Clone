import React from 'react'
import { useSelector } from 'react-redux'
//import vid from '../../Components/ShowVideo/vid.mp4'
import WHL from '../../Components/WHL/WHL';

function LikedVideo() {
  const likedVideoList= useSelector(state=>state.likedVideoReducer)
  //  const likedVideo = [
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
    <WHL page={"Liked Video"} videoList={likedVideoList}/>
  )
}

export default LikedVideo