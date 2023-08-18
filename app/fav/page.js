'use client'
import React from 'react'
import Link from 'next/link'
import NewsItemGridView from '../../Components/NewsItemGridView'
import { query,collection, onSnapshot, where, orderBy,getFirestore } from "firebase/firestore"
import app from '@/firebase/config'

const Fav = () => {
    const [data, setData] = React.useState([]);
    const db=getFirestore(app)
    const messageRef = collection(db, "fav");


    React.useEffect(() => {
        const queryList = query(messageRef, where("user_id", "==", localStorage.getItem('user')));
        const baat=onSnapshot(queryList, (snapshot) => {
            let messages = [];
            snapshot.forEach((element) => {
                messages.push({ ...element.data(), id: element.id })
            })
            setData(messages);
        })
        return ()=>baat();
    },[])

    return (
    <div>
            <h5><Link href="/news" style={{textDecoration:"none"}}><b>&larr;</b></Link> Go Back To Home</h5>
            <div>
                <div class="row">
                    <h1 class="text-center" >Favorites</h1>
                    {
                        data?.map((element) => {
                            return <div className='col-2 d-flex justify-content-between ms-5 my-2' key={element.title}><NewsItemGridView data={element} /></div>
                        })
                    }
                </div>
            </div>
    </div>
  )
}

export default Fav
