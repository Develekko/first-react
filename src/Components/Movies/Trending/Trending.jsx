import axios from 'axios';
import Loading from '../../Loading/Loading'
import React, { useEffect, useState } from 'react'

export default function Trending() {
    const [trending, setTrending] = useState([]);

    async function getTrendingMovies() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=f1aca93e54807386df3f6972a5c33b50`)
        setTrending(data.results)
    }
    useEffect(() => {
        getTrendingMovies()
    }, [])

    return <>
        <section className={trending.length > 0 ? '' : 'pt-0'}>
            <div className="container">
                <div className="col-12 text-center movies-heading">
                    <h2 className='sectionHeading animate__animated animate__flipInX text-white'>Trending</h2>
                    <div className="star"><span className='position-relative'><i className="fa-solid fa-star"></i></span></div>
                </div>
                <div className="row justify-content-center">
                    {trending.length > 0 ? trending.map((movie, index) =>
                        <div key={index} className='col-md-4'>
                            <div className="movies">
                                <img className='img-fluid' src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt="" />
                                <h3>{movie.title ? movie.title : movie.name}</h3>
                                <p>{movie.overview.length > 300 ? movie.overview.slice(0, 300) + `...` : movie.overview}</p>
                            </div>
                        </div>
                    ) : <Loading />}
                </div>
            </div>
        </section>
    </>
}