'use client'
import React from 'react'
import Link from 'next/link'
import NewsItemGridView from '../NewsItemGridView'
import FavContext  from '@/Context/FavContext'

const Fav = () => {
    const{fav}=React.useContext(FavContext);
  return (
    <div>
            <h5><Link href="/news" style={{textDecoration:"none"}}><b>&larr;</b></Link> Go Back To Home</h5>
            <div>
                <div class="row">
                    <h1 class="text-center" >Favorites</h1>
                    {
                        fav?.map((element) => {
                            return <div className='col-2 d-flex justify-content-between ms-5 my-2' key={element.title}><NewsItemGridView data={element} /></div>
                        })
                    }
                </div>
            </div>
    </div>
  )
}

export default Fav
