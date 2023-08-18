import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NoImage from '../assests/NoImage.jpg'

const NewsItemListView = ({data}) => {
    const{title,description,url,urlToImage}=data;
    return (
        <div>
            <ul class="list-group" style={{ position:"inherit"}}>
                <li class=" row list-group-item">
                    <div class="container px-4 ">
                        <div class="row gx-5">
                            <div class="col-4 text-center">
                                <img class="card-img-top" style={{height:"120px",width:"200px"}} src={!urlToImage?"https://resources.alleghenycounty.us/css/images/Default_No_Image_Available.png":urlToImage} alt="Card image cap" />
                            </div>
                            <div class="col-6 text-left">
                                <div class="card-body">
                                    <h5 class="card-title">{title.slice(0,60)}...</h5>
                                    <p class="card-text">{description?description.slice(0,90):<b>This News has no description availabe May be try to go to link and find out the description"</b>}</p>
                                </div>
                            </div>
                            <div class="col-2">
                            <a href={url} class="btn btn-primary">Page Link &rarr;</a>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default NewsItemListView
