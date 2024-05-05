import React from 'react'
import {useSelector} from 'react-redux'
import vid from '../../Components/ShowVideo/vid.mp4'
import ShowVideo from '../ShowVideo/ShowVideo';
function ShowVideoList({videoId}) {
  const vids=useSelector(s=>s.videoReducer)
  console.log(vids.data);
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
    //       _id: 2,
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
    //   ];

  return (
     <div className='Container-videoGrid'>
    {
      vids?.data?.filter(q=>q._id === videoId).map(vi=>
        {
          return (
          <div key={vi._id} className='video-box'>
              <ShowVideo vid={vi}/>
                    
            </div>
          )
        })
      }
    </div>
  )
}

export default ShowVideoList