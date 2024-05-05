import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearHistory } from '../../actions/History'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import './WHL.css'
import WHLVideoList from './WHLVideoList'
function WHL({ page, videoList }) {
  const CurrentUser= useSelector((state) => state?.currentUserReducer);
  const dispatch=useDispatch()
  const handleClearHistory=()=>{
    if(CurrentUser){
       dispatch(clearHistory({
         userId:CurrentUser?.result._id
       }))
    }
  }
  return (
    
    <div className='Pages-App1'>
      <LeftSidebar/>
    <div className="Pages-App2">
        <p className="det">
      <div className="box-WHL Left-whl">
        <b>Your {page} Shown Here</b>
        {
          page==='History'&&
          <div className="clear-History" onClick={()=>handleClearHistory()}>Clear History</div>
        }
        
      </div>
      <div className="right-Side-whl">
        <h1>{page}</h1>
        <div className="whl-list">
          <WHLVideoList
          page={page}
          CurrentUser={CurrentUser?.result._id}
          videoList={videoList} />
        </div>
      </div>
        </p>
        </div>
        </div>
  );
}

export default WHL;