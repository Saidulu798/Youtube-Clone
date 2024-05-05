import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
//import vid from '../Components/ShowVideo/vid.mp4';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Search() {
   const {searchQuery}=useParams();
  const vids = useSelector((state)=>state.videoReducer)
  ?.data?.filter((q) => q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase()))
  .reverse();

  return (
    <div className='Pages-App1'>
      <LeftSidebar/>
    <div className="Pages-App2">
        <h2 style={{color:'white'}}>Search Results for {searchQuery}...</h2>
        <ShowVideoGrid vids={vids}/>
        </div>
    </div>
  );
}

export default Search