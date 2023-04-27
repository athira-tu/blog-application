import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { useLocation, useParams } from 'react-router-dom';
import { sortblog } from './api';
import './card.css'
import Navbar from './Navbar';
import './sortblog.css'


function Sortblog() {

    // const location = useLocation()
    const { category } = useParams()

    const [sortblogs, setsortblog] = useState([])

    async function getcategoryBlog() {
        console.log(location.state);
        let response = await axios.get(sortblog + category)
        // console.log(response);
        setsortblog(response.data.set)
    }
    useEffect(() => {
        getcategoryBlog()

        // console.log(sortblogs);
    }, [category])





    return (
        <>
            <Navbar />

            <div className='catmain'>

                {
                    sortblogs && sortblogs.map((c) => {
                        console.log(c);
                        return (
                           

                            <div>
                                <div className='allcard'>
                                    <div className='cardhead'>
                                        <h2 className='all'>{c.title}</h2>
                                    </div>
                                    <h3 className='color'>{c.description}</h3>
                                    <h3 className='color'>{c.category}</h3>
                                    <h6 className='color'>{c.authorname}</h6>




                                </div>
                            </div>


                        )
                    })
                }
            </div>
        </>
    )
}






export default Sortblog