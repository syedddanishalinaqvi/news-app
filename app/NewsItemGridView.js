import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NewsItem.css'


const NewsItemGridView = ({data}) => {
    const{title,description,url,urlToImage}=data;
    return (
        <>
            <div class="card" style={{width: "25rem",height:"35rem", position:"inherit"}}>
                <img class="card-img-top" style={{height:"25rem"}} src={!urlToImage?"https://resources.alleghenycounty.us/css/images/Default_No_Image_Available.png":urlToImage} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title"  >{title?.slice(0,60)}</h5>
                    <p class="card-text" >{description?.slice(0,90)}</p>
                    <a href={url} target="_blank" class="btn btn-primary align-center">Page Link &rarr;</a>
                </div>
            </div>
        </>
    )
}

export default NewsItemGridView
