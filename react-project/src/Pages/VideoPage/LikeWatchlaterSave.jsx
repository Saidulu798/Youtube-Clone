import React, {useEffect, useState} from 'react'
import {BsThreeDots} from 'react-icons/bs'
import './LikeWatchlaterSave.css'
import { RiHeartAddFill,  RiShareForwardLine,RiPlayListAddFill } from 'react-icons/ri'
import { AiFillDislike, AiOutlineDislike,AiFillLike,AiOutlineLike } from 'react-icons/ai'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../../actions/video'
import { addTolikedVideo, deletelikedVideo } from '../../actions/likedVideo'
import { addTowatchLater, deleteWatchLater } from '../../actions/watchLater'

function LikeWatchlaterSave({ vv, vid }) {

  const CurrentUser = useSelector((state) => state?.currentUserReducer);
   const dispatch = useDispatch();
   const [SAveVideo, setSAveVideo] = useState(false);
   const [DislikeBtn, setDislikeBtn]= useState(false);
   const [LikeBtn, setLikeBtn] = useState(false);
   
   const likedVideoList= useSelector((state) => state.likedVideoReducer);
   
   const watchLaterList= useSelector(state=>state.watchLaterReducer)
    useEffect(() => {
    likedVideoList?.data
    .filter(
     (q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id
    )
    .map((m) => setLikeBtn(true))
   
   watchLaterList?.data
   .filter(
    (q) => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id
   )
   .map((m) => setSAveVideo(true));
  }, []);

   const toggleSavedVideo= () => {
    if (CurrentUser){
    if(SAveVideo){
        setSAveVideo(false);
        dispatch(deleteWatchLater({
          videoId: vid,
          Viewer: CurrentUser?.result._id,
        })
      );
    }else{
      setSAveVideo(true);
      dispatch(addTowatchLater({
        videoId: vid,
        Viewer: CurrentUser?.result._id,
      })
    );
   }
  }else{
    alert("Plz Login To Save the Video! ")
  }
};

   const toggleLikeBtn = (e, lk) => {
    if (CurrentUser) {
    if (LikeBtn) {
      setLikeBtn(false);
      dispatch(
        likeVideo({
          id: vid,
          Like: lk - 1,
        })
      );
      dispatch(deletelikedVideo({
        videoId:vid,
        Viewer: CurrentUser?.result._id,
      }))
    }else{
      setLikeBtn(true);
      dispatch(
        likeVideo({
          id: vid,
          Like: lk + 1,
        })
      );
      dispatch(
        addTolikedVideo({
        videoId:vid,
        Viewer: CurrentUser?.result._id,
      })
    );
      setDislikeBtn(false);
    }
    }else{
      alert("Plz Login To give a like")
    }
  };

    const toggleDislikeBtn= (e, lk) => {
      if (CurrentUser) {
       if (DislikeBtn) {
        setDislikeBtn(false);
      } else {
        setDislikeBtn(true);
        if (LikeBtn) {
          dispatch(
            likeVideo({
              id: vid,
              Like: lk - 1,
            })
          );
          dispatch(deletelikedVideo({
            videoId:vid,
            Viewer: CurrentUser?.result._id,
          }))
        }
        setLikeBtn(false);
      }
    }else{
      alert("Plz Login To give a like")
    }
  };
  return (
    <div className='btns-cont-videopage'>
        <div className="btn-videopage">
            <BsThreeDots/>
        </div>

       <div className="btn-videopage">
        <div className="like-videopage" onClick={(e) => toggleLikeBtn(e, vv.Like)}>
          {LikeBtn ? (
            <>
             <AiFillLike size={25} className='btns-videopage'/>
         
            </>
            ):(
          <>
          <AiOutlineLike size={25} className='btns-videopage'/>
          </>
           )}
           <b>{vv.Like}</b>
        </div>
        <div className="like-videopage" onClick={(e) => toggleDislikeBtn(e, vv.Like)}>
          {DislikeBtn ? (
            <>
             <AiFillDislike size={25} className='btns-videopage'/>
         
            </>
            ):(
          <>
          <AiOutlineDislike size={25} className='btns-videopage'/>
          </>
           )}
           <b>DISLIKE</b>
        </div>
        <div className="like-videopage" onClick={()=>toggleSavedVideo()}>
          {SAveVideo ? (
          <>
          <MdPlaylistAddCheck size={25} className='btns-videopage'/>
          <b>Saved</b>
          </>
          ):(
          <>
          <RiPlayListAddFill size={25} className='btns-videopage'/>
          <b>Save</b>
          </>
          )}
          </div>
          <div className="like-videopage">
          <>
          <RiHeartAddFill size={25} className='btns-videopage'/>
          <b>Thanks</b>
          </>
          </div>
          <div className="like-videopage">
          <>
          <RiShareForwardLine size={25} className='btns-videopage'/>
          <b>Share</b>
          </>
      </div>
     </div>
    </div>
  );
}

export default LikeWatchlaterSave;