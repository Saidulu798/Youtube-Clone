import React,{useState} from 'react'
import './Comments.css'
import { useDispatch } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from "moment";
import { useSelector } from 'react-redux';

function DisplayComments({cId, commentBody, userId,commentOn,userCommented}) {
    const [Edit, setEdit] = useState(false);
    const [cmtBdy, setcmtBdy] = useState("");
    const [cmtId, setcmtId] = useState("");

    const CurrentUser = useSelector((state) => state?.currentUserReducer);
  
    const handleEdit=(ctId,ctBdy) => {
       setEdit(true);
       setcmtId(ctId)
       setcmtBdy(ctBdy);
    };
     
    const dispatch = useDispatch();
    const handleOnSubmit= (e) => {
        e.preventDefault();
        if (!cmtBdy) {
          alert("Type Your Comments ")
        } else {
          dispatch(
            editComment({
            id: cmtId,
            commentBody: cmtBdy,
          })
        );
          setcmtBdy("");
        }
        setEdit(false);
    };
    const handleDel= (id) => {
      dispatch(deleteComment(id))
    }
  return (
    <>
    {Edit ? (<>
          <form action="" className="comments-sub-form"
             onSubmit={handleOnSubmit}
      >
        <input 
        type="text"
        onChange={(e) => setcmtBdy(e.target.value)} 
        placeholder='Edit comment...'
        value={cmtBdy}
        className="comments-ibox" />

        <input 
        type="submit" 
        value="Change" 
        className="comment-add-btn" />
    </form>
    </>
    ):(
    <p className="Comment-body">{commentBody}</p>
    )}
    <p className="user-commented">
      {""}
     - {userCommented} commented {moment(commentOn).fromNow()}</p>
    {
      CurrentUser?.result._id === userId && (
        <p className="EditDell">
        <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
        <i onClick={()=> handleDel(cId)} >Delete</i>
      </p>
      )}
  </>
  );
}

export default DisplayComments;