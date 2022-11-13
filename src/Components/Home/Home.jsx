import React from 'react';
import './Home.css';
import Avatar from '../../Assets/Images/Avatar.svg'
export default function Home() {

    return <>
        <section id='Home' className='d-flex justify-content-center align-items-center animate__animated animate__fadeIn'>
            <div className='text-center text-white'>
                <img className='img-fluid mb-5 animate__animated animate__zoomIn' src={Avatar} alt="" />
                <h1 className='animate__animated animate__flipInX'>START REACT</h1>
                <div className="star"><span className='position-relative'><i className="fa-solid fa-star"></i></span></div>
                <p className='animate__animated animate__fadeInUp'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </section>
    </>
}




