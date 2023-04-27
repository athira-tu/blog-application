import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import "./allauthorcard.css"


function Allauthorcard({blogmap}) {
  const location=useLocation()

  return (
    <>
    <div className="allauthorcard">
    <div className='allcard'>
        <div className='cardhead'>
            <h2 className='all'>{blogmap.title}</h2>
            <div className="details">
        <h3 className='desc'>{blogmap.authorname} </h3>
        <h6 className='desc'>{new Date().toDateString()}</h6><br />
        <span>
        <h6 className='desc'>{blogmap.category}</h6>
        </span>
        </div>
        </div>
        <p className='descr'>{blogmap.description}<Link to={`/singleblog/${blogmap._id}`}>read more...</Link></p>

        <div className="buttons">

            <ThumbUpAltIcon className='btns like'/>
            <ThumbDownIcon className='btns dislike'/>
            <FolderSharedIcon className='btns folder' />

        </div>
        


        



    </div >
    </div>  
</>
  )
}

export default Allauthorcard