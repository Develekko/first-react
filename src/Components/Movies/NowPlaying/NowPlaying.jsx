import axios from 'axios';
import Loading from '../../Loading/Loading'
import React, { useEffect, useState } from 'react'

export default function NowPlaying() {
    const [nowPlaying, setNowPlaying] = useState([]);

    async function getNowPlayingMovies() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`)
        setNowPlaying(data.results)
    }
    useEffect(() => {
        getNowPlayingMovies()
    }, [])


    return <>
        <section className={(nowPlaying.length > 0 ? '' : 'pt-0')}>
            <div className="container">
                <div className="col-12 text-center movies-heading">
                    <h2 className='sectionHeading animate__animated animate__flipInX text-white'>Now Playing</h2>
                    <div className="star"><span className='position-relative'><i className="fa-solid fa-star"></i></span></div>
                </div>
                <div className="row justify-content-center">
                    {nowPlaying.length > 0 ? nowPlaying.map((movie, index) =>
                        <div key={index} className='col-md-3'>
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
