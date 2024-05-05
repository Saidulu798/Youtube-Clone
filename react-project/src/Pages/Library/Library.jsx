import React from 'react'
import './Library.css'
import WHLVideoList from '../../Components/WHL/WHLVideoList'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import vid from '../../Components/ShowVideo/vid.mp4'
import { FaHistory } from 'react-icons/fa'
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { useSelector } from 'react-redux';
function Library() {
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
  
  const CurrentUser= useSelector((state) => state?.currentUserReducer);
  const watchLaterList= useSelector(state=>state.watchLaterReducer)
  const likedVideoList= useSelector(state=>state.likedVideoReducer)
  const historyList= useSelector(state=>state.HistoryReducer)
  return (
    <div className='Pages-App1'>
        <LeftSidebar/>
        <div className="Pages-App2">
            <div className="container-library">
                <h1 className="title-librarypage">
                  <b>
                    <FaHistory/>
                  </b>
                  <b>History</b>
                </h1>
                <div className="videolist-librarypage">
                  <WHLVideoList
                  page={"History"}
                  CurrentUser={CurrentUser?.result._id}
                  videoList={historyList}
                  />
                </div>
            </div>
            <div className="container-library">
                <h1 className="title-librarypage">
                  <b>
                    <MdOutlineWatchLater/>
                  </b>
                  <b>Watch Later</b>
                </h1>
                <div className="videolist-librarypage">
                  <WHLVideoList
                  page={"Watch Later"}
                  CurrentUser={CurrentUser?.result._id}
                  videoList={watchLaterList}
                  />
                </div>
            </div>
            <div className="container-library">
                <h1 className="title-librarypage">
                  <b>
                    <AiOutlineLike/>
                  </b>
                  <b>Liked Videos</b>
                </h1>
                <div className="videolist-librarypage">
                  <WHLVideoList
                  page={"Liked Videos"}
                  CurrentUser={CurrentUser?.result._id}
                  videoList={likedVideoList}
                  />
                </div>
            </div>
        </div>
    </div>

  )
}
export default Library