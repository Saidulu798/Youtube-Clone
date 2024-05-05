import React from 'react'
import { FaSearch } from "react-icons/fa"
import { BsMicFill} from "react-icons/bs"
import "./Searchbar.css"
import SearchList from"./SearchList"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [SearchListA, setSearchList] = useState(false)
  const TitleArray = useSelector(s=>s.videoReducer)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).map(m=>m?.videoTitle)
  //const TitleArray =["video1","video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));
  return (
    <>
    <div className='search-bar'>
    <div className="search-bar2">
    <div className="search-div">

        <input type="text" className='iBox-searchbar' placeholder='Search...'
          onChange={e=>setSearchQuery(e.target.value)}
          value={searchQuery}
          onClick={e=>setSearchList(true)}
          />
          <Link to={`/search/${searchQuery}`}>
        <FaSearch size={20} className="search-icon"
        onClick={e=>setSearchList(false)}/>
         </Link>
        <BsMicFill size={20} className="Mic-icon"/>
        {searchQuery&& SearchListA &&
        <SearchList
        setSearchQuery={setSearchQuery}
        TitleArray={TitleArray}
        />
        }
        </div>
       </div>

    </div>
    </>
  )
}

export default Searchbar