import React from 'react'
import './About.css'
export default function About() {
  return  <>
  <section id='About' className='animate__animated animate__fadeIn text-center'>
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <h2 className='sectionHeading animate__animated animate__flipInX'>About</h2>
                  <div className="star"><span className='position-relative'><i className="fa-solid fa-star"></i></span></div>
              </div>
              <div className="mt-3 w-75 mx-auto text-start">
                <div className="row">
                <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-md-6">
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
              </div>
                </div>
              </div>
          </div>
      </div>
  </section>
</>
}
