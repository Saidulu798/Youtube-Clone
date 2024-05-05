import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import './Comments.css'
import DisplayComments from './DisplayComments';
import { postComment } from '../../actions/comments';
function Comments({videoId}) {
    const [commentText, setCommentText] = useState("");

    const CurrentUser = useSelector((state) => state?.currentUserReducer);
    const commentsList = useSelector(s=>s.commentReducer)

    // const commentsList=[
    //     {
    //         _id:'1',
    //     commentBody:"hello",
    //     userCommented:"abcd",
    //     },
    //     {
    //         _id:"2",
    //         commentBody:"Hii",
    //         userCommented:"abcd",
    //     },
    //     {
    //         _id:"3",
    //         commentBody:"hiii",
    //         userCommented:"xyz",
    //     },
    // ]
     
    const dispatch = useDispatch();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (CurrentUser) {
        if(!commentText) {
          alert("Plz Type your comment !")
        } else {
          dispatch(
            postComment({
            videoId: videoId,
            userId: CurrentUser?.result._id,
            commentBody: commentText,
            userCommented: CurrentUser?.result.name,
          })
        );
        setCommentText("");
      }
    }else{
      alert('Plz Login to Post Your Comment !')
    }
  };
  return (
    <>
    <form action="" className="comments-sub-form"
      onSubmit={handleOnSubmit}
      >
        <input type="text"
        onChange={(e) => setCommentText(e.target.value)} 
        placeholder='add comment...'
        value={commentText}
        className="comments-ibox"
         />
        <input 
        type="submit" value="add" 
        className="comment-add-btn" />
      </form>
      <div className="display-comment">
        { commentsList?.data
            ?.filter((q) => videoId === q?.videoId)
            .reverse()
            .map((m) => {
                return(
                    <DisplayComments
                    cId={m._id}
                    userId={m.userId}
                    commentBody={m.commentBody}
                    commentOn={m.commentOn}
                    userCommented={m.userCommented}
                    />
                );
            })} 
      </div>
    </>
  )
}

export default Comments;