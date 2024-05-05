import React, { useEffect } from 'react'
//import vid from '../../Components/ShowVideo/vid.mp4'
//import vu-vu from '../../Components/ShowVideo/vu-vu.mp4'
import moment from 'moment'
import './VideoPage.css'
import LikeWatchlaterSave from './LikeWatchlaterSave'
import Comments from '../../Components/Comments/Comments'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToHistory } from '../../actions/History'
import { viewVideo } from '../../actions/video'
function VideoPage() {
  const {vid}= useParams();
  //console.log(vid);
  //const chanels=useSelector(state =>state?.chanelReducers);
  //const currentChanel=chanels.filter((c) => c._id === vid)[0];

  const vids = useSelector((state) => state.videoReducer);
  const vv=vids?.data.filter((q) => q._id === vid)[0];
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const handleHistory=()=>{
    dispatch(
      addToHistory({
        videoId: vid,
        Viewer: CurrentUser?.result._id,
        })
    );
  };
  const handleViews=()=>{
     dispatch( viewVideo({
       id:vid
     }))
  }
  useEffect(() => {
    if(CurrentUser){
    handleHistory();
    }
    handleViews();
  },[]);
  return (
    <>
    <div className="video-page1">
      <div className="video-page2">
         <div className="video-display-screen-videopage">
           <video 
           src={`http://localhost:5500/${vv?.filePath}`}
           className={'video-show-videopage'}
           controls
           //autoPlay
           ></video>
          <div className="video-details-videopage">
            <div className="video-btns-title-videopage">
                <p className="video-title-videopage"> {vv?.videoTitle} </p>
                <div className="views-date-btns-videopage">
                    <div className="views-videopage">
                    {vv?.Views} views <div className="dot"></div> {moment(vv?.createdAt).fromNow()}
                    </div>
                    <LikeWatchlaterSave vv={vv} vid={vid} />
                </div>
                </div>
                
                <Link 
                to={`/chanel/${vv?.videoChanel}`} 
                className="chanel-details-videopage">

                    <b className="chanel-logo-videopage">
                        <p>{vv?.Uploder.charAt(0).toUpperCase()}</p>
                    </b>
                    <p className="chanel-name-videopage">{vv?.Uploder}</p>
                </Link>
                <div className="comment-videopage">
                    <h2>
                       <u> Coments</u>
                   </h2>
                   <Comments videoId={vv._id} />
                   </div>
                </div> 
             </div>
             <div className="More-videobar">
            More Videos
         </div>
        </div>  
    </div>
    </>
  );
}

export default VideoPage;