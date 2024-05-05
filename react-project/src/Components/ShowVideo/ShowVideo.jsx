import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import './ShowVideo.css'
function ShowVideo({ vid }) {
 console.log(vid);
  return (
    <>
    <Link to={`/videopage/${vid?._id}`}>
       <video 
       src={`http://localhost:5500/${vid.filePath}`}
          className='video-show'
    />
    </Link>
    <div className="video-desc">
        <div className="Chanel-logo">
            <div className="fst-logo-app">
                <>{vid?.Uploder?.charAt(0).toUpperCase()}</>
            </div>
        </div>
        <div className="video-details">
          <p className="title-vid-showvideo">{vid?.videoTitle}</p>
          <pre className="vid-view-uploadTime">{vid?.Uploder}</pre>
          <pre className="vid-view-uploadTime">
            {vid?.Views} views <div className="dot"></div>{moment(vid?.createdAt).fromNow()}
            </pre>
        </div>
    </div>
    </>
  )
}

export default ShowVideo