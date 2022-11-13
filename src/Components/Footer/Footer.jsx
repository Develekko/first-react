/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Footer.css'
export default function Footer() {
    return <>
        <footer className='px-0'>
            <div className="footerBody text-center text-white">
                <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive <br /> Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4 my-3">
                        <h3>AROUND THE WEB</h3>
                        <div className="social">
                            <ul>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use,<br/> MIT licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="bg-dark text-center text-white p-2 fixed-bottom">
                <p className='m-0'>© Copyright <strong>2022</strong>. All Rights Reserved</p>
                <p className='m-0'>Created by <a className='nav-link d-inline' target='_blank' href="https://github.com/Develekko"><strong>Housam Ramadan</strong></a></p>
            </div>
        </footer>
    </>
}