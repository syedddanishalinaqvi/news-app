import React from 'react'
import Link from 'next/link'

const Navbar = ({ onclick, buttonhtml }) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" href="/news">EveryDay News</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="/fav">Favourites</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <button class="btn btn-outline-success" onClick={onclick} type="submit">{buttonhtml}</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
