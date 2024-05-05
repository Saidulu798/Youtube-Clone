import React from 'react'
import './Home.css'
import LeftSidebar from '../Components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../Components/ShowVideoGrid/ShowVideoGrid'
//import vid from '../Components/ShowVideo/vid.mp4';
import { useSelector } from 'react-redux';

function Home() {

  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
//  console.log(videosFile)
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
    
    const NavList=[
      "All",
      "python",
      "Java",
      "C++",
      "Movies",
      "Science",
      "Animation",
      "Gaming",
      "Comedy",
    ] 
  return (
    <div className='Pages-App1'>
      <LeftSidebar/>
    <div className="Pages-App2">
    <div className="navigation-Home">
      {
       NavList.map((m)=> {
        return(

      <p key={m} className="btn-nav-home">
           {m}
       </p>
            );
           })}
       </div>
        <ShowVideoGrid vids={vids}/>
        </div>
    </div>
  );
}

export default Home