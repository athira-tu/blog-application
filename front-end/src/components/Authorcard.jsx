import React from 'react'
// import { deletetask } from '../../API/Api'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Deleteblog } from './api'
import './authorcard.css'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import EditIcon from '@mui/icons-material/Edit';

function Authorcard({ blogmap }) {
    const navigate = useNavigate()

    async function del() {
        console.log(blogmap);
        await axios.delete(Deleteblog + blogmap._id)
        window.location.replace("http://localhost:5173/viewauthorblog")
    }
    async function blogedit() {
        navigate('/editblog', { state: blogmap })
    }
    console.log(blogmap);
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

            <DeleteSharpIcon className='btns like' onClick={del}/>
            <EditIcon className='btns dislike' onClick={blogedit}/>
          

        </div>
        


        



    </div >
        </>
    )
}

export default Authorcard