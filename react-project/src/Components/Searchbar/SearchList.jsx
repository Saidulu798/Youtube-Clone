import React from 'react'
import './SearchList.css'
import { FaSearch } from 'react-icons/fa'
function SearchList({TitleArray,setSearchQuery}) {
  return (
    <>
    
    <div className="SearchList">
      {
        TitleArray.map(m=>{
          return     <p
          key={m}
          onClick={e=>setSearchQuery(m)}
         className="title-Item">
            <FaSearch/>
            {m}
        </p>
         })
        }
        <p className="title-Item">
          <FaSearch/>
          item1
        </p>
        <p className="title-Item">
            <FaSearch/>
            item2
        </p>
    </div>
    </>
  )
}

export default SearchList