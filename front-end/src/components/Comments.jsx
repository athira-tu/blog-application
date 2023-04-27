import React from 'react'
import "./comments.css"
import FavoriteIcon from '@mui/icons-material/Favorite';



function Comments({ commentmap }) {


    return (
        <>
      

<div class="l-card">
<div class="l-card__text">
    <p>{commentmap.comment}</p>
</div>
<section class="l-card__user">
    <div class="l-card__userImage">
<img src="  https://www.kahanihindi.com/wp-content/uploads/2020/02/Whatsapp-DP-Profile-FULL-SIZE-1.jpg" alt="" />
    </div>
    <div class="l-card__userInfo">
        <span>{commentmap.authorname}</span>
        <span>{new Date(commentmap.dateposted).toDateString()}</span>
    </div>
</section><br /><br />
<FavoriteIcon className='favicon'/>
</div>
</>
    )
}

export default Comments