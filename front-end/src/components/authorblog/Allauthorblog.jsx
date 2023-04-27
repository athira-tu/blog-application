import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { authblogs } from '../api'
import axios from 'axios'
import Allauthorcard from "./Allauthorcard"
import Navbar from "../Navbar"

function Allauthorblog({blogmap}) {

const location=useLocation()
const [allauthorblogs,setallauthorblogs]=useState()

async function getAllauthorblogs(){
    let authorblogs=await axios.get(authblogs+location.state.blogmap.authorid)
    console.log(authorblogs);
    setallauthorblogs(authorblogs.data.blogs)
        
}
useEffect(()=>{
    getAllauthorblogs()
},[])
  return (
    <>
  <Navbar />

  <div className="main">
    <div className="authorcont">
      {allauthorblogs && allauthorblogs.map((blog)=>{
        return(
          <Allauthorcard blogmap={blog}/>
        )
      })}
    </div>
  </div>


 </>
  )
}

export default Allauthorblog