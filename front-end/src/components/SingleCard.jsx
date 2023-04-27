import React, { useEffect } from 'react'
import { postcomment, singleblog, theblogcomments } from './api'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { useRef } from 'react'
import Comments from './comments'
import { authblogs } from './api'
import "./singlecard.css"
import Navbar from './Navbar'

function SingleCard(blogmap) {
    const { id } = useParams()
    const { authorid } = useParams
    const [oneblog, setoneblog] = useState({})
    const navigate = useNavigate()
    const location = useLocation()

    const { loggedinuser } = useContext(UserContext)





    // const [comment, setcomment] = useState({});





    async function showoneblog() {
        const response = await axios.get(singleblog + id)
        // console.log(response);
        setoneblog(response.data.blog)

    }
    const [refresh, setRefresh] = useState()
    useEffect(() => {
        showoneblog()
    }, [id])

    const commentref = useRef()

    async function addcomment() {
        if (loggedinuser) {
            let commentobj = {
                authorname: loggedinuser.name,
                comment: commentref.current.value,

                authorid: loggedinuser._id,
                blogid: id,

                dateposted: new Date().toDateString()
            }
            let response = await axios.post(postcomment, commentobj)
            setRefresh(!refresh)
            commentref.current.value = ''
            console.log(response);

            console.log(commentobj);
        } else {
            navigate('/login')
        }
    }
    const [blogcomment, setblogcomment] = useState()

    
    // async function readAuthorAllBlog() {
    //     let response = await axios.get(allBlogOfOneApi + location.state.singleblog.author_id)
    //     console.log(response);
    //     navigate("/authorallblogs", { state: response.data.singleUserBlog })
    // }

    async function fetchallcomment() {
        let res = await axios.get(theblogcomments + id)

        console.log(res);
        setblogcomment(res.data.blogcomment)

    }
    useEffect(() => { fetchallcomment() }, [refresh])
    async function authblog() {
        axios.get(authblogs + blogmap.authorid)
        navigate('/authorblog')
    }

    return (
        <>
            
        <Navbar />
      <div className="singlecard">

            <div className='allcard'>
        <div className='cardhead'>
            <h2 className='all'>{oneblog.title}</h2>
            <div className="details">
        <h3 className='desc'>{oneblog.authorname} </h3>
        <h6 className='desc'>{new Date().toDateString()}</h6><br />
        <span>
        <h6 className='desc'>{oneblog.category}</h6>
        </span>
        </div>
        </div>
        <p className='descr'>{oneblog.description}</p>
    </div >

           
            <textarea name="comment" id="commentarea" cols="30" rows="10" placeholder='comments' ref={commentref}></textarea>
            <button onClick={addcomment} className='addcommentbtn'>POST</button>

            <div>
                {blogcomment && blogcomment.map((com) => {
                    return (
                        <Comments commentmap={com} />
                    )
                })}
            </div>
            </div>
        </>
    )
}


export default SingleCard