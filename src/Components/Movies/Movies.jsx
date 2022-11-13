import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Movies.css'

export default function Movies() {

  return <>
      <section className='p-0'>
        <div className="container-fluid">
            <div className="row bg-black">
                <div className="col-3 col-sm-2 movie-nav">
                    <ul className='position-fixed navbar-dark p-0 pt-5 mt-5'>
                        <li className='nav-item '><Link className='nav-link text-white' to={'nowPlaying'}>Now Playing</Link></li>
                        <li className='nav-item mt-3'><Link className='nav-link text-white' to={'popular'}>Popular</Link></li>
                        <li className='nav-item mt-3'><Link className='nav-link text-white' to={'topRated'}>Top Rated</Link></li>
                        <li className='nav-item mt-3'><Link className='nav-link text-white' to={'trending'}>Trending</Link></li>
                        <li className='nav-item mt-3'><Link className='nav-link text-white' to={'upComing'}>Up Coming</Link></li>
                    </ul>
                </div>
                <div className="col-9 col-sm-10">
                    <Outlet/>
                </div>
            </div>
        </div>
    </section>
  </>
}
