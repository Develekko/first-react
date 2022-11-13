import React from 'react'
import item1 from '../../Assets/Images/cabin.png';
import item2 from '../../Assets/Images/cake.png';
import item3 from '../../Assets/Images/circus.png';
import item4 from '../../Assets/Images/game.png';
import item5 from '../../Assets/Images/safe.png';
import item6 from '../../Assets/Images/submarine.png';
import $ from 'jquery';
import './Portfolio.css';
export default function Portfolio() {
    const details = (e) => {
        $('.modeling').fadeIn(300);
        $('body,html').css('overflow', 'hidden')
        $('.modeling img').attr('src', $(e.target).attr('data-img'));
        $('.modeling h2').html($(e.target).attr('data-img-alt'));
    }
    const closeBtn = () => {
        $('.modeling').fadeOut(500);
        $('body,html').css('overflow', 'visible')
    }
    const closeModelOutside = (e) => {
        e.stopPropagation();
    }

    $(document).on('keydown', function (e) { if (e.key === "Escape") { closeBtn() } })
    return <>
        <div onClick={closeBtn} className='modeling text-center py-5'>
            <div onClick={closeModelOutside} className="bg-white modelBody container rounded-3 p-3 position-relative overflow-hidden">
                <span className='position-absolute close'><i onClick={closeBtn} className="fa-solid fa-xmark"></i></span>
                <h2 className='sectionHeading'> Portfolio</h2>
                <div className="star"><span className='position-relative'><i className="fa-solid fa-star"></i></span></div>
                <img className='animate__animated animate__fadeInDown' src={item1} alt="" />
                <p className='animate__animated animate__flipInX'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button onClick={closeBtn} className='btn btn-success animate__animated animate__fadeInUp'> <i className="fa-solid fa-xmark"></i> Close Window</button>
            </div>
        </div>

        <section id='Portfolio' className='animate__animated animate__fadeIn text-center overflow-hidden'>
            <div className="container">
                <div className="row g-5">
                    <div className="col-12">
                        <h2 className='sectionHeading animate__animated animate__flipInX'>Portfolio</h2>
                        <div className="star"><span className='position-relative'><i className="fa-solid fa-star"></i></span></div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={details} className="item position-relative">
                            <img className='img-fluid rounded-3' src={item1} alt="" />
                            <div data-img={item1} data-img-alt='LOG CABIN' className="overlay rounded-3">
                                <i data-img={item1} data-img-alt='LOG CABIN' className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={details} className="item position-relative">
                            <img className='img-fluid rounded-3' src={item2} alt="" />
                            <div data-img={item2} data-img-alt='TASTY CAKE' className="overlay rounded-3">
                                <i data-img={item2} data-img-alt='TASTY CAKE' className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={details} className="item position-relative ">
                            <img className='img-fluid rounded-3' src={item3} alt="" />
                            <div data-img={item3} data-img-alt='CIRCUS TENT' className="overlay rounded-3">
                                <i data-img={item3} data-img-alt='CIRCUS TENT' className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={details} className="item position-relative">
                            <img className='img-fluid rounded-3' src={item4} alt="" />
                            <div data-img={item4} data-img-alt='CONTROLLER' className="overlay rounded-3">
                                <i data-img={item4} data-img-alt='CONTROLLER' className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={details} className="item position-relative">
                            <img className='img-fluid rounded-3' src={item5} alt="" />
                            <div data-img={item5} data-img-alt='LOCKED SAFE' className="overlay rounded-3">
                                <i data-img={item5} data-img-alt='LOCKED SAFE' className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div onClick={details} className="item position-relative">
                            <img className='img-fluid rounded-3' src={item6} alt="" />
                            <div data-img={item6} data-img-alt='SUBMARINE' className="overlay rounded-3">
                                <i data-img={item6} data-img-alt='SUBMARINE' className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}