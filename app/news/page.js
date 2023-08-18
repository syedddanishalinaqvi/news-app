'use client'
import React from 'react'
import addData from "@/firebase/firestore/addData";
import 'bootstrap/dist/css/bootstrap.min.css'
import NewsItemGridView from '../../Components/NewsItemGridView'
import NewsItemListView from '../../Components/NewsItemListView'
import Navbar from '../../Components/Navbar'




const News = () => {

    const [view, setView] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [fav, setFav] = React.useState([]);
    const buttonHtml = React.useRef("Grid View");

    React.useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=9ba80058b89d4c80833cb705fec6cd44`)
            .then(res => res.json())
            .then(result => setData([result.articles]))
    }, [])

    const handleFav=async (e,data)=>{
        e.preventDefault();
        let c=0;
        for(let i=0;i<fav.length;i++){
            if(data.title===fav[i].title){
                c=1;
            }
        }
        if(c!==1){
            const {error}=await addData('fav',data.title,{...data,user_id:localStorage.getItem('user')});
            if(error){
                return console.log(error)
            }
            setFav([...fav,data]);
        }
    }

    const handleView = (e) => {
        e.preventDefault();
        if (view) {
            buttonHtml.current = "List View"
            setView(false);
        }
        else {
            buttonHtml.current = "Grid View"
            setView(true);
        }
    }

    return (
        <>
            <Navbar onclick={(e) => { handleView(e) }} buttonhtml={buttonHtml.current} />
            <div>
                <div class="row">
                    <h1 class="text-center" >Top Headlines</h1>
                    {
                        data[0]?.map((element) => {
                            if (view) {
                                return <div className='col-5 ms-5 my-3' key={element.title}><span class="position-absolute translate-middle badge rounded-pill bg-danger">
                                <a href="" onClick={(e) => handleFav(e,element)} style={{ color: "black" ,textDecoration: "none" }}>&#10084;</a>
                                <span class="visually-hidden">unread messages</span></span><NewsItemListView data={element} /></div>
                            }
                            return <div className='col-2 d-flex justify-content-between ms-5 my-2' key={element.title}><span class="position-absolute translate-middle badge rounded-pill bg-danger">
                                <a href="" onClick={(e) => handleFav(e,element)} style={{ color: "black", textDecoration: "none" }}>&#10084;</a>
                                <span class="visually-hidden">unread messages</span>
                            </span><NewsItemGridView data={element} /></div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default News
