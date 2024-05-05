import React, { useState } from 'react'
import './VideoUpload.css'
import { useDispatch, useSelector } from 'react-redux'
import { uploadVideo } from '../../actions/video';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';

function VideoUpload({ setVidUploadPage }) {

  const CurrentUser = useSelector ((state) => state.currentUserReducer);
     const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [videoFile, setVideoFile] = useState("");

     const handleSetVideoFile = (e) => {
          setVideoFile(e.target.files[0]);
     };

     const [progress, setProgress] = useState(0);

      const fileOptions = {
         onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded/1000) * 100)/(total / 1000));
            setProgress(percentage);
            if(percentage === 100) {
               setTimeout(function () {}, 3000);
               setVidUploadPage(false);
            }
         },
      };
     const uploadVideoFile = () => {
           if (!title) {
            alert("Plz Enter A Title of the Video");
           } else if (!videoFile) {
            alert("Plz Attach a video File");
           } else if (videoFile.size > 1000000) {
             alert("Plz Attach video File less than 1kb");
           } else {
            const fileData= new FormData();
            fileData.append("file", videoFile);
            fileData.append("title", title);
            fileData.append("chanel", CurrentUser?.result._id);
            fileData.append("Uploder", CurrentUser?.result.name);
            //console.log(videoFile);
             dispatch(
              uploadVideo({
              fileData: fileData,
              fileOptions: fileOptions,
             })
             );
           }
     };

    return (
    <div className='container-vidupload'>
      <input 
      type='submit'
      name='text'
      value={"X"}
      onClick={() => setVidUploadPage(false)}
      className='ibtn-x'
      />
      <div className="container2-vidupload">
        <div className="ibox-div-vidupload">
        <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text" 
        className='ibox-vidupload'
        maxLength={30}
        placeholder='Enter Title of your video'
        />
      <label htmlFor="file" className='ibox-vidupload btn-vidupload'>
        <input 
         type="file"
         name='file'
         className='ibox-vidupload'
         style={{ fontSize: "1rem" }} 
         onChange={(e) => {
          handleSetVideoFile(e);
        }}
        />
      </label>
    </div>
     <div className="ibox-div-vidupload">
        <input 
        onClick={() => uploadVideoFile()}
        type="submit" 
        value="Upload"
        className='ibox-vidupload btn-vidupload'
         />
       </div>
       <div className="loader ibox-div-vidupload">
        <CircularProgressbar
          value={progress}
          text={`${progress}`}
          styles={
            buildStyles({
               rotation: 0.25,
               strokeLinecap: "butt",
               textSize: "20px",
               pathTransitionDuration: 0.5,
               pathColor: `rgba(255,255,255,${progress/100})`,
               textColor: "#f88",
               trailColor: "#adff2f",
               backgroundColor: "#3e98c7",

            })
          }
        />
       </div>
      </div>
    </div>
  );
}

export default VideoUpload;