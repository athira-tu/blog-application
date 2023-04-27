import React from 'react'
import { useContext } from 'react';
// import { deletetask } from '../../API/Api'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './context/UserContext';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FolderSharedIcon from '@mui/icons-material/FolderShared';

import './card.css'
// import axios from 'axios'

function Card({ blogmap }) {

    const navigate = useNavigate()
    // async function del() {
    //     await axios.delete(deletetask + task._id)
    //     window.location.replace("http://localhost:5173/viewblog")


    // }
    function viewauthorblog(){
        navigate('/allauthorblog',{state:{blogmap}})
    }
    return (

        <>
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
                    <FolderSharedIcon className='btns folder' onClick={viewauthorblog}/>
    
                </div>
                


                



            </div >
        </>
    )
}

export default Card