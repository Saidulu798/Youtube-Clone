import React from 'react'
import { FaEdit, FaUpload } from 'react-icons/fa'
import './Describe.css'
import { useSelector } from 'react-redux'
function DecribeChanel({setEditCreateChanelBtn,Cid,setVidUploadPage} ) {
      
   const chanels=useSelector(state =>state?.chanelReducers);
      
   const currentChanel=chanels.filter(c => c._id === Cid)[0];

   const CurrentUser= useSelector((state) => state?.currentUserReducer);

  return (
    <div className='container3-chanel'>
        <div className="chanel-logo-chanel">
            <b>{currentChanel?.name.charAt(0).toUpperCase()}</b>
        </div>
        <div className="description-chanel">
          <b> {currentChanel?.name} </b>
          <p> {currentChanel?.desc} </p>
        </div>
           {CurrentUser?.result._id === currentChanel?._id && ( <>
        <p className="editbtn-chanel" 
        onClick={()=>{setEditCreateChanelBtn(true)}}>
            <FaEdit/>
            <b>Edit Chanel</b>
        </p>
        <p className="uploadbtn-chanel" onClick={()=>setVidUploadPage(true)} >
            <FaUpload/>
            <b>Upload Video</b>
        </p>
        </>
        )}
       </div>
        ) 
        }
export default DecribeChanel