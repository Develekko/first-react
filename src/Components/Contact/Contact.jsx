import React, { useState } from 'react'
import './Contact.css'
import $ from 'jquery'

export default function Contact() {
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [phone, setPhone] = useState(false);
    function checkName() {
        const regex = /^[a-zA-z\s]{1,30}$/
        if ($('.name').val() === '') {
            setName(false)
        }
        else if (regex.test($('.name').val())) {
            setName(false)
        }
        else {
            setName(true)
        }
    }
    function checkEmail() {
        const regex = /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{3}$/;
        if ($('.email').val() === '') {
            setEmail(false)
        }
        else if (regex.test($('.email').val())) {
            setEmail(false)
        }
        else {
            setEmail(true)
        }
    }
    function checkPhone() {
        const regex = /^(02)?(01)[0125][0-9]{8}$/;
        if ($('.phone').val() === '') {
            setPhone(false)
        }
        else if (regex.test($('.phone').val())) {
            setPhone(false)
        }
        else {
            setPhone(true)
        }
    }

    return <>
        <section id='Contact' className='animate__animated animate__fadeIn text-center'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className='sectionHeading animate__animated animate__flipInX'>Contact Me</h2>
                        <div className="star"><span className='position-relative'><i className="fa-solid fa-star"></i></span></div>
                    </div>
                    <form className='text-start w-75 mx-auto'>
                        <div className='position-relative'>
                            <input required type="text" onInput={checkName} placeholder='Name' maxLength={30} className='form-control mx-auto name' />
                            {name ? <span className='animate__animated animate__fadeIn text-danger position-absolute fw-bold ps-2'>*Invalid Name! Only Characters Allowed'</span> : null}
                        </div>
                        <div className="position-relative">
                            <input required type="email" onInput={checkEmail} placeholder='Email Address' className='form-control mx-auto mt-4 email' />
                            {email ? <span className='animate__animated animate__fadeIn text-danger position-absolute fw-bold ps-2'>*Invalid Email! try Example@domain.com'</span> : null}
                        </div>
                        <div className="position-relative">
                            <input required type="number" onInput={checkPhone} placeholder='Phone Number' className='form-control mx-auto mt-4 phone' />
                            {phone ? <span className='animate__animated animate__fadeIn text-danger position-absolute fw-bold ps-2'>*Invalid Phone Number! try 01148134726'</span> : null}
                        </div>
                        <textarea placeholder='Message' className='form-control mx-auto mt-4' cols="30" rows="3"></textarea>
                        <button type='submit' className={"btn btn-success mt-3 " + (name || email || phone ? 'disabled' : null)} >Send</button>
                    </form>
                </div>
            </div>
        </section>
    </>
}