import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { authblogs } from '../api'
import axios from 'axios'

function Allauthorblog({blogmap}) {

const location=useLocation()
const [allauthorblogs,setallauthorblogs]=useState()

async function getAllauthorblogs(){
    let authorblogs=await axios.get(authblogs+location.state.blogmap.authorname)
    console.log(authorblogs);
    setallauthorblogs(authorblogs)
        
}
useEffect(()=>{
    getAllauthorblogs()
},[])
  return (
    <div>Allauthorblog</div>
  )
}

export default Allauthorblog