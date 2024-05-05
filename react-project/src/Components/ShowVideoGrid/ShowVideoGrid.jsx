import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import './ShowVideoGrid.css'
function ShowVideoGrid({vids}) {
  return (
    <div className='Container-videoGrid'>
      {
        vids?.map(vi=>
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

export default ShowVideoGrid